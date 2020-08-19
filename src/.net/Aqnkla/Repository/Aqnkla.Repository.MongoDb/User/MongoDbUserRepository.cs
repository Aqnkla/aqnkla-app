using Aqnkla.Domain.User.Entity;
using Aqnkla.Domain.User.Repository;
using Aqnkla.Repository.MongoDb.Base;
using Aqnkla.Repository.MongoDb.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Threading.Tasks;

namespace Aqnkla.Repository.MongoDb.User
{
    public class MongoDbUserRepository : MongoDbRepository<AqnklaUserEntity<ObjectId>>, IAqnklaUserRepository<ObjectId>
    {
        public MongoDbUserRepository(IOptions<MongoDbSettings> options) : base(options)
        {
        }

        public async Task<AqnklaUserEntity<ObjectId>> GetUserAsync(string uniqueName)
        {
            var value = await Collection.FindAsync(b => b.UserUniqueName == uniqueName).ConfigureAwait(false);

            return await value.FirstOrDefaultAsync().ConfigureAwait(false);
        }

        public async Task<bool> UserEmailExistsAsync(string emailAddress)
        {
            var value = await Collection.FindAsync(b => b.UserUniqueName == emailAddress).ConfigureAwait(false);

            return await value.AnyAsync().ConfigureAwait(false);
        }

        public async Task<bool> UserExistsAsync(string uniqueName)
        {
            var value = await Collection.FindAsync(b => b.UserUniqueName == uniqueName).ConfigureAwait(false);

            return await value.AnyAsync().ConfigureAwait(false);
        }
    }
}
