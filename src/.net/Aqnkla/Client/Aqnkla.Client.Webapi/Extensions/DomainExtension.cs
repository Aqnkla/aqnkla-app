using Aqnkla.Authentication.Password.BCrypt.Service;
using Aqnkla.Domain.Password.Service;
using Aqnkla.Domain.User.Service;
using Aqnkla.Service.User;
using Microsoft.Extensions.DependencyInjection;

namespace Aqnkla.Client.Webapi.Extensions
{
    public static class DomainExtension
    {
        public static void AddDomainObjects<TKey>(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IAqnklaUserService<TKey>, AqnklaUserService<TKey>>();
            serviceCollection.AddSingleton<IPasswordService, BCryptPasswordService>();



        }
    }
}
