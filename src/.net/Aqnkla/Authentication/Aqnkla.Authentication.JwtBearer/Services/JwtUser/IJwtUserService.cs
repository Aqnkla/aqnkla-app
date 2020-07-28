using System;
using Sorgo.Domain.Base.Service;
using Sorgo.Authentication.JwtBearer.Entity;

namespace Sorgo.Authentication.JwtBearer.Services.JwtUser
{
    public interface IJwtUserService<TKey> : IService<JwtUserEntity<TKey>, TKey>
    {
    }
}
