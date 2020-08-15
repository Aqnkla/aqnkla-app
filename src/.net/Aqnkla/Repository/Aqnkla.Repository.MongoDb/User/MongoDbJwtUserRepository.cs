using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Repository;
using Aqnkla.Repository.MongoDb.Base;
using Aqnkla.Repository.MongoDb.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Bson;

namespace Aqnkla.Repository.MongoDb.User
{
    public class MongoDbJwtUserRepository : MongoDbRepository<JwtUserEntity<ObjectId>>, IJwtUserRepository<ObjectId>
    {
        public MongoDbJwtUserRepository(IOptions<MongoDbSettings> options):base(options)
        {
        }
    }
}
