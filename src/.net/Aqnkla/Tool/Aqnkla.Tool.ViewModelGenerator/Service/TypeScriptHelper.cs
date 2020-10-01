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
    internal static class TypeScriptHelper
    {

        public static void GenerateFiles(string outputDirectory)
        {
            var assemblyFiles = GetAssemblyFiles();

            assemblyFiles.ForEach(b => ProcessAssembly(b));
            //var aqnklaAssembly = AppDomain.CurrentDomain.GetAssemblies().Where(b => b.FullName.StartsWith("Aqnkla")).FirstOrDefault();
            //Console.WriteLine("Assembly identity={0}", aqnklaAssembly.FullName);
            //Console.WriteLine("Codebase={0}", aqnklaAssembly.CodeBase);

            //var refernceAssemlies = aqnklaAssembly.GetTypes();

        }

        private static void ProcessAssembly(AqnklaFile assemblyFile)
        {
            var viewModelTypes = new List<Type>();
            var assembly = Assembly.LoadFrom(assemblyFile.FullName);

            try
            {
                var types = assembly.GetTypes();
                foreach (var type in types)
                {
                    if (type.CustomAttributes.Any(b => b.AttributeType == typeof(ExportViewModelAttribute)))
                    {
                        viewModelTypes.Add(type);
                    }
                }

            }
            catch
            {

            }

            if (viewModelTypes.Count > 0)
            {
                CreateTypeScriptFile(viewModelTypes);
            }

        }

        private static void CreateTypeScriptFile(List<Type> types)
        {
            var objects = new List<string>();

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

            var ffff = string.Join("\n", objects);
        }

        private static string ReadClass(Type type)
        {
            var properties = type.GetProperties();
            var builder = new StringBuilder();
            builder.AppendLine($"export interface {type.Name} {{");

            foreach (var property in properties)
            {
                var propertyTsType = property.PropertyType.Name;

                if (IsCollection(property.PropertyType))
                {
                    propertyTsType = GetCollectionName(property.PropertyType);
                }
                else if (!property.PropertyType.Assembly.GetName().Name.StartsWith("Aqnkla"))
                {
                    propertyTsType = MapDonNetTypeToTs(property.PropertyType);
                }

                builder.AppendLine($"\t{GetCamelCaseName(property.Name)}: {propertyTsType};");
            }
            builder.AppendLine("}");
            return builder.ToString();
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

        private static string ReadEnum(Type type)
        {
            return string.Empty;
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
            var files = Directory.EnumerateFiles(startupPath, "*.dll", SearchOption.AllDirectories).Distinct().Select(
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
    }
}
