using Aqnkla.Authentication.JwtBearer.Core.Services;
using Aqnkla.Authentication.JwtBearer.Provider.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Bson;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Provider.Middleware
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IJwtUserService<ObjectId> jwtUserService;
        private readonly JwtSettings _appSettings;

        public JwtMiddleware(
            RequestDelegate next,
            IOptions<JwtSettings> appSettings,
            IJwtUserService<ObjectId> jwtUserService)
        {
            _next = next;
            this.jwtUserService = jwtUserService;
            _appSettings = appSettings.Value;
        }

        public async Task Invoke(HttpContext context)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

            if (token != null)
                await AttachAccountToContext(context,  token);

            await _next(context);
        }

        private async Task AttachAccountToContext(HttpContext context,  string token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var accountId = jwtToken.Claims.First(x => x.Type == "id").Value;
                var accountObjectId = new ObjectId(accountId);
                // attach account to context on successful jwt validation
                context.Items["Account"] = await jwtUserService.GetAsync(accountObjectId);
            }
            catch
            {
                // do nothing if jwt validation fails
                // account is not attached to context so request won't have access to secure routes
            }
        }
    }
}