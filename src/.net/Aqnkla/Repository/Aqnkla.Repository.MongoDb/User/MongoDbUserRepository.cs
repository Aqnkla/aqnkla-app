using Aqnkla.Domain.User.Entity;
using Aqnkla.Domain.User.Repository;
using Aqnkla.Repository.MongoDb.Base;
using Aqnkla.Repository.MongoDb.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using System;
using System.Threading.Tasks;

namespace Aqnkla.Repository.MongoDb.User
{
    public class MongoDbUserRepository : MongoDbRepository<AqnklaUserEntity<ObjectId>>, IAqnklaUserRepository<ObjectId>
    {

        public MongoDbUserRepository(IOptions<MongoDbSettings> options) : base(options)
        {
        }

        public Task<AqnklaUserEntity<ObjectId>> GetUserAsync(string uniqueName)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UserEmailExistsAsync(string emailAddress)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UserExistsAsync(string uniqueName)
        {
            throw new NotImplementedException();
        }
    }
}
