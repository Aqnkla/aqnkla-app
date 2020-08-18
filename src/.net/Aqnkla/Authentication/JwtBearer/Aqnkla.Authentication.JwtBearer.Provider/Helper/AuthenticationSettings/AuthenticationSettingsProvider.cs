using Aqnkla.Authentication.JwtBearer.Core.Model;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Authentication.JwtBearer.Provider.Helper.AuthenticationSettings
{
    public class AuthenticationSettingsProvider : IAuthenticationSettingsProvider
    {
        private readonly JwtSettings jwtSettings;

        public AuthenticationSettingsProvider(IOptions<JwtSettings> options)
        {
            jwtSettings = options.Value;
        }
        public string GetSecret()
        {
            return jwtSettings.Secret;
        }
    }
}
