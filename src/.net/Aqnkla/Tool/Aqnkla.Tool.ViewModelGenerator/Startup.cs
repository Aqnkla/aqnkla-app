using Aqnkla.Tool.ViewModelGenerator.Service;

namespace Aqnkla.Tool.ViewModelGenerator
{
    internal class Startup
    {
        private readonly ITypeScriptService typeScriptService;

        public Startup(ITypeScriptService typeScriptService)
        {
            this.typeScriptService = typeScriptService;
        }

        public void Run()
        {
            typeScriptService.GenerateFiles();
        }
    }
}
