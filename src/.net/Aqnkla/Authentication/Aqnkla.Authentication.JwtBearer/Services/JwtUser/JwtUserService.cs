using Aqnkla.Authentication.JwtBearer.Entity;
using Aqnkla.Authentication.JwtBearer.Repository;
using Aqnkla.Service.Base;
using System;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Services.JwtUser
{
    internal class JwtUserService<TKey> : BaseService<JwtUserEntity<TKey>, TKey>, IJwtUserService<TKey>
    {
        private readonly IJwtUserRepository<TKey> repository;

        public JwtUserService(IJwtUserRepository<TKey> repository) : base(repository)
        {
            this.repository = repository;
        }

        public async Task<JwtUserEntity<TKey>> GetByHashAsync(string username, string hash)
        {
            throw new NotImplementedException();
        }

        public async Task<JwtUserEntity<TKey>> GetByTokenAsync(string token)
        {
            throw new NotImplementedException();
        }
    }
}
