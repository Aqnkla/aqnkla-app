using Aqnkla.Authentication.JwtBearer.Core.Model;
using Aqnkla.Authentication.JwtBearer.Core.Services;
using Aqnkla.Authentication.JwtBearer.Provider.Helpers;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Account;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Administration;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Authentication;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Convert;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Email;
using Aqnkla.Authentication.JwtBearer.Provider.Services.EmailSender;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Token;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;

namespace Aqnkla.Authentication.JwtBearer.Provider.Extension
{
    public static class ServiceExtension
    {
        public static void AddJwtAuthentication<TKey>(this IServiceCollection services,
            IConfiguration configuration)
        {

            // configure strongly typed settings objects
            var appSettingsSection = configuration.GetSection("JwtSettings");
            services.Configure<JwtSettings>(appSettingsSection);

            // configure JWT authentication
            var appSettings = appSettingsSection.Get<JwtSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });


            services.AddSingleton<IConvertService<TKey>, ConvertService<TKey>>();
            services.AddSingleton<IJwtEmailSenderService<TKey>, JwtEmailSenderService<TKey>>();
            services.AddSingleton<IJwtAccountService<TKey>, JwtAccountService<TKey>>();
            services.AddSingleton<IJwtEmailService, JwtEmailService>();
            services.AddSingleton<IJwtUserService<TKey>, JwtUserService<TKey>>();

            services.AddSingleton<IAdministrationService<TKey>, AdministrationService<TKey>>();
            services.AddSingleton<IAuthenticationService<TKey>, AuthenticationService<TKey>>();
            services.AddSingleton<ITokenService<TKey>, TokenService<TKey>>();







        }
    }
}
