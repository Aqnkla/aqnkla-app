using Aqnkla.Authentication.JwtBearer.Entity;
using Aqnkla.Domain.Base.Repository;

namespace Aqnkla.Authentication.JwtBearer.Repository
{
    public interface IJwtUserRepository<TKey> : IRepository<JwtUserEntity<TKey>, TKey>
    {
    }
}
