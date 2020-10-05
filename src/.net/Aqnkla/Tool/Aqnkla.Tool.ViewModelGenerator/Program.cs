using Aqnkla.Tool.ViewModelGenerator.Service;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Microsoft.Extensions.Logging.Abstractions;
using System;
using System.Linq;
using Aqnkla.Tool.ViewModelGenerator.Model;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace Aqnkla.Tool.ViewModelGenerator
{
    class Program
    {
        static void Main()
        {
            //var outputDirectory = @"C:\Source\aqnkla\aqnkla-app\src\angular\aqnkla\src\app\modules\application\common-modules\food\models\api";
            //if (args != null)
            //{
            //    var output = args.Where(b => b.StartsWith(outputDirectoryCommand)).FirstOrDefault();
            //    if (output != null)
            //    {
            //        outputDirectory = output.Remove(0, outputDirectoryCommand.Length);
            //    }
            //}
            //TypeScriptHelper.GenerateFiles(outputDirectory);
            //Console.WriteLine("finished");
            //Console.ReadKey();


            //var serviceCollection = new ServiceCollection();


            //serviceCollection.Configure<GeneratorSettings>(Configuration.GetSection("GeneratorSettings"));
            //var serviceProvider = serviceCollection
            //    .AddLogging()
            //    .AddSingleton<ITypeScriptService, TypeScriptService>()
            //    .AddSingleton<Startup>()
            //    .BuildServiceProvider();


            //var logger = serviceProvider.GetService<ILoggerFactory>().CreateLogger<Program>();
            //logger.LogDebug("Starting application");

            //var startup = serviceProvider.GetService<Startup>();
            //startup.Run();

            //logger.LogDebug("All done!");



            // create service collection
            var services = new ServiceCollection();
            ConfigureServices(services);

            // create service provider
            var serviceProvider = services.BuildServiceProvider();

            // entry to run app
            serviceProvider.GetService<Startup>().Run();
        }


        private static void ConfigureServices(IServiceCollection services)
        {
            // configure logging
            services.AddLogging(builder =>
            {
                builder.AddConsole();
                builder.AddDebug();
            });

            // build config
            var configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false)
            .AddEnvironmentVariables()
            .Build();

            services.Configure<GeneratorSettings>(configuration.GetSection("GeneratorSettings"));

            services.AddSingleton<ITypeScriptService, TypeScriptService>();
            services.AddSingleton<Startup>();
        }
    }
}