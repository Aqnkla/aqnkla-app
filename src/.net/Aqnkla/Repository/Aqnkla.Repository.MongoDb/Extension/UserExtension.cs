using Aqnkla.Authentication.JwtBearer.Core.Repository;
using Aqnkla.Domain.User.Repository;
using Aqnkla.Repository.MongoDb.User;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson;

namespace Aqnkla.Repository.MongoDb.Extension
{
    public static class UserExtension
    {
        public static void RegisterMongoDbUser(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IJwtUserRepository<ObjectId>, MongoDbJwtUserRepository>();
            serviceCollection.AddSingleton<IAqnklaUserRepository<ObjectId>, MongoDbUserRepository>();

        }
    }
}