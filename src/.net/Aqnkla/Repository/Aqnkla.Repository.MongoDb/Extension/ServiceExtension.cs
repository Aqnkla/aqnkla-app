
using Aqnkla.Authentication.JwtBearer.Core.Repository;
using Aqnkla.Domain.Base.Repository;
using Aqnkla.Domain.User.Repository;
using Aqnkla.Repository.MongoDb.Base;
using Aqnkla.Repository.MongoDb.Settings;
using Aqnkla.Repository.MongoDb.User;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson;

namespace Aqnkla.Repository.MongoDb.Extension
{
    public static class ServiceExtension
    {
        public static void RegisterMongoDbRepository(this IServiceCollection serviceCollection, IConfiguration configuration)
        {
            serviceCollection.Configure<MongoDbSettings>(configuration.GetSection("MongoDbSettings"));
            serviceCollection.AddSingleton<IJwtUserRepository<ObjectId>, MongoDbJwtUserRepository>();
            serviceCollection.AddSingleton<IAqnklaUserRepository<ObjectId>, MongoDbUserRepository>();
        }
    }
}
