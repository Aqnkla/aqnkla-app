using Aqnkla.Domain.Attributes;
using Aqnkla.Domain.ExceptionAqnkla;
using Aqnkla.Tool.ViewModelGenerator.Helper;
using Aqnkla.Tool.ViewModelGenerator.Model;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Aqnkla.Tool.ViewModelGenerator.Service
{

    internal class TypeScriptService : ITypeScriptService
    {
        private readonly ILogger<TypeScriptService> logger;
        private readonly IOptions<GeneratorSettings> options;

        public TypeScriptService(
            ILogger<TypeScriptService> logger,
            IOptions<GeneratorSettings> options)
        {
            this.logger = logger;
            this.options = options;
        }

        public void GenerateFiles()
        {
            var outputDirectory = options.Value.OutputDirectory;
            logger.LogDebug($"Model will be saved to: {outputDirectory}");
            var assemblyFiles = GetAssemblyFiles();
            if (Directory.Exists(outputDirectory))
            {
                Directory.Delete(outputDirectory, true);
                logger.LogDebug("Directory exists, will be deleted.");
            }
            Directory.CreateDirectory(outputDirectory);
            logger.LogDebug($"Generator will check {assemblyFiles.Count}.");
            assemblyFiles.ForEach(b => ProcessAssembly(b, outputDirectory));
        }

        private void ProcessAssembly(AqnklaFile assemblyFile, string outputDirectory)
        {
            logger.LogDebug($"Loading {assemblyFile.FileName}.");
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
            catch (FileNotFoundException)
            {
                logger.LogError("File not found.");

            }
            catch (ArgumentNullException)
            {
                logger.LogError("Type doesn't contain any attributes");
            }
            catch (ReflectionTypeLoadException)
            {
                logger.LogDebug("Unable to load exception.");
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
            }

            if (viewModelTypes.Count > 0)
            {
                CreateTypeScriptFile(viewModelTypes, assembly, outputDirectory);
            }

        }

        private void CreateTypeScriptFile(List<Type> types, Assembly assembly, string outputDirectory)
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
                builder.AppendLine(string.Join(Environment.NewLine, exportList.Distinct().OrderBy(b => b)));
                builder.AppendLine();
                builder.AppendLine();
            }

            builder.AppendLine(string.Join("\n", objects.OrderBy(v => v.Content).OrderBy(b => b.SortOrder).Select(b => b.Content)));

            builder.AppendLine();
            var conent = builder.ToString();
            var fileName = $"{ObjectHelper.GetAssemblyFileName(assembly)}.ts";

            var path = Path.Combine(outputDirectory, fileName);
            File.WriteAllText(path, conent, Encoding.UTF8);
            logger.LogDebug($"Typescript file created: {fileName}.");
        }

        private AqnklaObject ReadClass(Type type)
        {
            var properties = type.GetProperties();
            var builder = new StringBuilder();
            var export = new List<string>();
            builder.AppendLine($"export interface {type.Name} {{");

            foreach (var property in properties)
            {

                var propertyTsType = property.PropertyType.Name;

                if (ObjectHelper.IsCollection(property.PropertyType))
                {
                    propertyTsType = ObjectHelper.GetCollectionName(property.PropertyType);
                    var genericType = property.PropertyType.GenericTypeArguments.First();
                    if (type.Assembly.FullName != genericType.Assembly.FullName)
                    {
                        export.Add($"import {{ { genericType.Name } }} from './{ObjectHelper.GetAssemblyFileName(genericType.Assembly)}';");
                    }
                }
                else if (!property.PropertyType.Assembly.GetName().Name.StartsWith("Aqnkla"))
                {
                    propertyTsType = ObjectHelper.MapDonNetTypeToTs(property.PropertyType);
                }
                else
                {
                    if (type.Assembly.FullName != property.PropertyType.Assembly.FullName)
                    {
                        export.Add($"import {{ { property.PropertyType.Name } }} from './{ObjectHelper.GetAssemblyFileName(property.PropertyType.Assembly)}';");
                    }
                }
                builder.AppendLine($"  {ObjectHelper.GetCamelCaseName(property.Name)}: {propertyTsType};");
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

        private AqnklaObject ReadEnum(Type type)
        {
            var builder = new StringBuilder();
            builder.AppendLine($"export enum {type.Name} {{");

            var names = type.GetEnumNames();
            foreach (var name in names)
            {
                builder.AppendLine($"  {name},");

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

        private List<AqnklaFile> GetAssemblyFiles()
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

    }
}
