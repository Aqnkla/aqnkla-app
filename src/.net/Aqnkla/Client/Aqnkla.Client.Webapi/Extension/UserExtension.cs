using Aqnkla.Authentication.JwtBearer.Provider.Helper.AuthenticationSettings;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Authentication;
using Aqnkla.Domain.User.Service;
using Aqnkla.Service.User;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aqnkla.Client.Webapi.Extension
{
    public static class UserExtension
    {
        public static void RegisterUser<TKey>(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IAuthenticationService<TKey>, AuthenticationService<TKey>>();
            serviceCollection.AddSingleton<IAqnklaUserService<TKey>, AqnklaUserService<TKey>>();
            serviceCollection.AddSingleton<IAuthenticationSettingsProvider, AuthenticationSettingsProvider>();
        }
    }
}
