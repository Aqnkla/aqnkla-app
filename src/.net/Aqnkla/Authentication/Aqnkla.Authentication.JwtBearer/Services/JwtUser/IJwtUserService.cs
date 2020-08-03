using Aqnkla.Authentication.JwtBearer.Entity;
using Aqnkla.Domain.Base.Service;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Services.JwtUser
{
    internal interface IJwtUserService<TKey> : IService<JwtUserEntity<TKey>, TKey>
    {
        Task<JwtUserEntity<TKey>> GetByHashAsync(string username, string hash);
        Task<JwtUserEntity<TKey>> GetByTokenAsync(string token);
    }
}
