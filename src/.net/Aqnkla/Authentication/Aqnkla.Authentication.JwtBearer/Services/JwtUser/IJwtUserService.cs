using Aqnkla.Authentication.JwtBearer.Entity;
using Aqnkla.Domain.Base.Service;

namespace Aqnkla.Authentication.JwtBearer.Services.JwtUser
{
    public interface IJwtUserService<TKey> : IService<JwtUserEntity<TKey>, TKey>
    {
        JwtUserEntity<TKey> GetByHash(string username, string hash);
        JwtUserEntity<TKey> GetByToken(string token);
    }
}
