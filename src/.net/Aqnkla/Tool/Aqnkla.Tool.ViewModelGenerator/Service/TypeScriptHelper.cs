using Aqnkla.Domain.Attributes;
using Aqnkla.Domain.ExceptionAqnkla;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Aqnkla.Tool.ViewModelGenerator.Service
{
    internal class AqnklaFile
    {
        public string FileName { get; set; }
        public string FullName { get; set; }

        public bool HasViewModelAttribute { get; set; }
    }

    internal class AqnklaObject
    {
        public int SortOrder { get; set; }
        public List<string> Exports { get; set; }
        public string Content { get; set; }

    }

    internal static class TypeScriptHelper
    {

        public static void GenerateFiles(string outputDirectory)
        {
            var assemblyFiles = GetAssemblyFiles();
            if (Directory.Exists(outputDirectory))
            {
                Directory.Delete(outputDirectory, true);
            }
            Directory.CreateDirectory(outputDirectory);
            assemblyFiles.ForEach(b => ProcessAssembly(b, outputDirectory));
        }

        private static void ProcessAssembly(AqnklaFile assemblyFile, string outputDirectory)
        {
            var viewModelTypes = new List<Type>();
            var assembly = Assembly.LoadFrom(assemblyFile.FullName);
            try
            {
                var types = assembly.GetTypes();
                foreach (var type in types)
                {
                    if (type.CustomAttributes.Any(b =>
                    b.AttributeType == typeof(ExportViewModelAttribute)) ||
                    type.IsEnum)
                    {
                        viewModelTypes.Add(type);
                    }
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            if (viewModelTypes.Count > 0)
            {
                CreateTypeScriptFile(viewModelTypes, assembly, outputDirectory);
            }

        }

        private static void CreateTypeScriptFile(List<Type> types, Assembly assembly, string outputDirectory)
        {
            var objects = new List<AqnklaObject>();

            foreach (var value in types)
            {
                if (value.IsClass)
                {
                    objects.Add(ReadClass(value));
                }
                else if (value.IsEnum)
                {
                    objects.Add(ReadEnum(value));
                }
            }

            var exportList = new List<string>();

            foreach (var value in objects)
            {
                exportList.AddRange(value.Exports);
            }

            var builder = new StringBuilder();
            if (exportList.Count > 0)
            {
                builder.AppendLine(string.Join("\n", exportList.Distinct().OrderBy(b => b)));
                builder.AppendLine();
                builder.AppendLine();
            }

            builder.AppendLine(string.Join("\n", objects.OrderBy(v => v.Content).OrderBy(b => b.SortOrder).Select(b => b.Content)));

            builder.AppendLine();
            var conent = builder.ToString();
            var fileName = $"{ GetAssemblyFileName(assembly)}.ts";

            var path = Path.Combine(outputDirectory, fileName);
            File.WriteAllText(path, conent);
        }

        private static AqnklaObject ReadClass(Type type)
        {
            var properties = type.GetProperties();
            var builder = new StringBuilder();
            var export = new List<string>();
            builder.AppendLine($"export interface {type.Name} {{");

            foreach (var property in properties)
            {

                var propertyTsType = property.PropertyType.Name;

                if (IsCollection(property.PropertyType))
                {
                    propertyTsType = GetCollectionName(property.PropertyType);
                    var genericType = property.PropertyType.GenericTypeArguments.First();
                    if (type.Assembly.FullName != genericType.Assembly.FullName)
                    {
                        export.Add($"import {{ { genericType.Name } }} from './{GetAssemblyFileName(genericType.Assembly)}';");
                    }
                }
                else if (!property.PropertyType.Assembly.GetName().Name.StartsWith("Aqnkla"))
                {
                    propertyTsType = MapDonNetTypeToTs(property.PropertyType);
                }
                else
                {
                    if (type.Assembly.FullName != property.PropertyType.Assembly.FullName)
                    {
                        export.Add($"import {{ { property.PropertyType.Name } }} from './{GetAssemblyFileName(property.PropertyType.Assembly)}';");
                    }
                }
                builder.AppendLine($"\t{GetCamelCaseName(property.Name)}: {propertyTsType};");
            }
            builder.AppendLine("}");
            var data = new AqnklaObject
            {
                SortOrder = 100,
                Content = builder.ToString(),
                Exports = export
            };
            return data;
        }

        private static string GetCollectionName(Type propertyType)
        {
            return $"{propertyType.GenericTypeArguments.First().Name}[]";
        }

        private static bool IsCollection(Type propertyType)
        {
            if (propertyType.GetInterfaces().Contains(typeof(System.Collections.ICollection)))
            {
                return true;
            }
            return false;
        }

        private static string MapDonNetTypeToTs(Type type)
        {
            switch (type.FullName)
            {
                case "System.String":
                    return "string";
                case "System.Int32":
                case "System.Double":
                    return "number";
                case "System.Boolean":
                    return "boolean";
                default:
                    throw new UnknownTypeValueException($"missing mapping for: {type.FullName}");
            }
            throw new NotImplementedException();
        }

        private static AqnklaObject ReadEnum(Type type)
        {
            var builder = new StringBuilder();
            builder.AppendLine($"export enum {type.Name} {{");

            var names = type.GetEnumNames();
            foreach (var name in names)
            {
                builder.AppendLine($"\t{name},");

            }
            builder = builder.Remove(builder.Length - 1, 1);
            builder.AppendLine("}");

            var data = new AqnklaObject
            {
                SortOrder = 10,
                Content = builder.ToString(),
                Exports = new List<string>()
            };
            return data;
        }

        private static string GetCamelCaseName(string name)
        {
            var chars = name.ToCharArray();
            chars[0] = chars[0].ToString().ToLower()[0];
            return string.Join("", chars);
        }

        private static List<AqnklaFile> GetAssemblyFiles()
        {
            var distinctFiles = new List<AqnklaFile>();
            string startupPath = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.Parent.Parent.FullName;
            var files = Directory.EnumerateFiles(startupPath, "aqnkla*.dll", SearchOption.AllDirectories).Distinct()
                .Where(b => !b.Contains("Aqnkla.Tool"))
                .Select(
                b =>
                {
                    var file = new FileInfo(b);
                    return new AqnklaFile
                    {
                        FileName = file.Name,
                        FullName = file.FullName
                    };
                }
                ).ToList();


            foreach (var file in files)
            {
                if (!distinctFiles.Any(b => b.FileName == file.FileName))
                {
                    distinctFiles.Add(file);
                }
            }
            return distinctFiles;
        }

        private static string GetAssemblyFileName(Assembly assembly)
        {
            var names = assembly.GetName().Name.Split('.').Select(b => GetCamelCaseName(b));
            return string.Join('-', names);
        }

    }
}
