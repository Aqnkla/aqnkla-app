using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Domain.Base.Repository;

namespace Aqnkla.Authentication.JwtBearer.Core.Repository
{
    public interface IJwtUserRepository<TKey> : IRepository<JwtUserEntity<TKey>, TKey>
    {
    }
}
