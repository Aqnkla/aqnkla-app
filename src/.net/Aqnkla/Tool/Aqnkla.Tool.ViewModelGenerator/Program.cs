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
            var outputDirectory = @"C:\Source\aqnkla\aqnkla-app\src\angular\aqnkla\src\app\modules\application\common-modules\food\models\api";
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
