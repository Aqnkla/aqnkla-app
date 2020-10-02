using Aqnkla.Tool.ViewModelGenerator.Service;
using System;
using System.Linq;

namespace Aqnkla.Tool.ViewModelGenerator
{
    class Program
    {
        private const string outputDirectoryCommand = "-out=";
        static void Main(string[] args)
        {
            var outputDirectory = "c:\\data\\temp\\ts";
            if (args != null)
            {
                var output = args.Where(b => b.StartsWith(outputDirectoryCommand)).FirstOrDefault();
                if (output != null)
                {
                    outputDirectory = output.Remove(0, outputDirectoryCommand.Length);
                }
            }
            TypeScriptHelper.GenerateFiles(outputDirectory);
        }
    }
}
