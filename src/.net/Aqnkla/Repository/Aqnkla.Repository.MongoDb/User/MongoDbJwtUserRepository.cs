using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Repository;
using Aqnkla.Repository.MongoDb.Base;
using Aqnkla.Repository.MongoDb.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Linq;
using System.Threading.Tasks;

namespace Aqnkla.Repository.MongoDb.User
{
    public class MongoDbJwtUserRepository : MongoDbRepository<JwtUserEntity<ObjectId>>, IJwtUserRepository<ObjectId>
    {
        public MongoDbJwtUserRepository(IOptions<MongoDbSettings> options) : base(options)
        {
        }

        public async Task<JwtUserEntity<ObjectId>> GetByHashAsync(ObjectId userId, string hash)
        {
            var value = await Collection.FindAsync(b => b.AqnklaUserId == userId && b.PasswordHash == hash).ConfigureAwait(false);

            return await value.FirstOrDefaultAsync().ConfigureAwait(false);
        }

        public async Task<JwtUserEntity<ObjectId>> GetByTokenAsync(string token)
        {
            var value = await Collection.FindAsync(b => b.RefreshTokens.Any(v => v.Token == token)).ConfigureAwait(false);

            return await value.FirstOrDefaultAsync().ConfigureAwait(false);
        }

        public Task<JwtUserEntity<ObjectId>> GetByValidTokenAsync(string token)
        {
            throw new System.NotImplementedException();
        }
    }
}
