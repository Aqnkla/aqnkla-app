using Aqnkla.Domain.Attributes;
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

            foreach (var assemblyFile in assemblyFiles)
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
            }
            //var aqnklaAssembly = AppDomain.CurrentDomain.GetAssemblies().Where(b => b.FullName.StartsWith("Aqnkla")).FirstOrDefault();
            //Console.WriteLine("Assembly identity={0}", aqnklaAssembly.FullName);
            //Console.WriteLine("Codebase={0}", aqnklaAssembly.CodeBase);

            //var refernceAssemlies = aqnklaAssembly.GetTypes();

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
