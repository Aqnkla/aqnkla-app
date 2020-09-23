using Aqnkla.Domain.Key.Service;
using Aqnkla.Repository.MongoDb.Service;
using Aqnkla.Repository.MongoDb.Settings;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson;

namespace Aqnkla.Repository.MongoDb.Extension
{
    public static class BaseExtension
    {
        public static void RegisterMongoDbBase(this IServiceCollection serviceCollection, IConfiguration configuration)
        {
            serviceCollection.Configure<MongoDbSettings>(configuration.GetSection("MongoDbSettings"));
            serviceCollection.AddSingleton<IKeyService<ObjectId>, MongoDbKeyService>();
        }
    }
}
