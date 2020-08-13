using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Repository;
using Aqnkla.Repository.MongoDb.Base;
using MongoDB.Bson;

namespace Aqnkla.Repository.MongoDb.User
{
    public class MongoDbJwtUserRepository : MongoDbRepository<JwtUserEntity<ObjectId>>, IJwtUserRepository<ObjectId>
    {
    }
}
