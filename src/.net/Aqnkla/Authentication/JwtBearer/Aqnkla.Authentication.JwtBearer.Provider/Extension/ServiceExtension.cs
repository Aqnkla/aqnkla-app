﻿using Aqnkla.Authentication.JwtBearer.Core.Model;
using Aqnkla.Authentication.JwtBearer.Core.Repository;
using Aqnkla.Authentication.JwtBearer.Core.Services;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Authentication;
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
        public static void AddJwtAuthentication<TKey, TUserRepository>(this IServiceCollection services,
            IConfiguration configuration) where TUserRepository : class, IJwtUserRepository<TKey>
        {

            // configure strongly typed settings objects
            var appSettingsSection = configuration.GetSection("JwtSettings");
            services.Configure<JwtSettings>(appSettingsSection);

            // configure jwt authentication
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
                    // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
                    ClockSkew = TimeSpan.Zero
                };
            });
            services.AddControllers();
            services.AddSingleton<IAuthenticationService<TKey>, AuthenticationService<TKey>>();
            services.AddSingleton<IJwtUserService<TKey>, JwtUserService<TKey>>();
            services.AddSingleton<IJwtUserRepository<TKey>, TUserRepository>();


        }
    }
}