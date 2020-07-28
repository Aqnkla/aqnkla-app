using MongoDB.Bson;
using Sorgo.Domain.User.Entity;
using Sorgo.Domain.User.Repository;
using Sorgo.Repository.MongoDb.Base;
using System;
using System.Threading.Tasks;

namespace Sorgo.Repository.MongoDb.User
{
    public class MongoDbUserRepository : MongoDbRepository<UserEntity<ObjectId>>, IUserRepository<ObjectId>
    {
        public Task<UserEntity<ObjectId>> GetUserAsync(string userId)
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
