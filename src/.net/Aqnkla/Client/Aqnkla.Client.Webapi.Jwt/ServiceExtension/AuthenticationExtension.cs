using Aqnkla.Authentication.JwtBearer.Extension;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson;

namespace Aqnkla.Client.Webapi.Jwt.Extension
{
    public static class AuthenticationExtension
    {
        public static void AddJwtAuthentication(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddJwtAServices<ObjectId>(configuration);
        }
    }
}
