using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Repository;
using Aqnkla.Domain.User.Service;
using Aqnkla.Service.Base;
using System;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Core.Services
{
    public class JwtUserService<TKey> : BaseService<JwtUserEntity<TKey>, TKey>, IJwtUserService<TKey>
    {
        private readonly IJwtUserRepository<TKey> repository;
        private readonly IAqnklaUserService<TKey> aqnklaUserService;

        public JwtUserService(
            IJwtUserRepository<TKey> repository,
            IAqnklaUserService<TKey> aqnklaUserService) : base(repository)
        {
            this.repository = repository;
            this.aqnklaUserService = aqnklaUserService;
        }

        public async Task<JwtUserEntity<TKey>> GetByHashAsync(string username, string hash)
        {
            var user = await aqnklaUserService.GetUserAsync(username).ConfigureAwait(false);
            if (user == null)
            {
                return null;
            }
            return await repository.GetByHashAsync(user.Id, hash).ConfigureAwait(false);
        }

        public async Task<JwtUserEntity<TKey>> GetByTokenAsync(string token)
        {
            return await repository.GetByTokenAsync(token).ConfigureAwait(false);
        }
    }
}
