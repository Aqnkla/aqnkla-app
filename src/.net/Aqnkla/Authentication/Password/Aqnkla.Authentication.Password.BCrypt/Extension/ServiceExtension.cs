using Aqnkla.Authentication.Password.BCrypt.Service;
using Aqnkla.Domain.Password.Service;
using Microsoft.Extensions.DependencyInjection;

namespace Aqnkla.Authentication.Password.BCrypt.Extension
{
    public static class ServiceExtension
    {
        public static void AddBCryptPassword(this IServiceCollection services)
        {
            services.AddSingleton<IPasswordService, BCryptPasswordService>();
        }
    }
}
