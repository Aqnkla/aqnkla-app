using Aqnkla.Domain.User.Entity;
using Aqnkla.Domain.User.Repository;
using Aqnkla.Repository.MongoDb.Base;
using MongoDB.Bson;
using System;
using System.Threading.Tasks;

namespace Aqnkla.Repository.MongoDb.User
{
    public class MongoDbUserRepository : MongoDbRepository<AqnklaUserEntity<ObjectId>>, IAqnklaUserRepository<ObjectId>
    {
        public Task<AqnklaUserEntity<ObjectId>> GetUserAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UserEmailExistsAsync(string emailAddress)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UserExistsAsync(string userId)
        {
            throw new NotImplementedException();
        }
    }
}
