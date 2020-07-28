using Aqnkla.Authentication.JwtBearer.Entity;
using System.Collections.Generic;

namespace Aqnkla.Authentication.JwtBearer.Services.Authentication
{
    public interface IAuthenticationService<TKey>
    {
        AuthenticateResponse<TKey> Authenticate(AuthenticateRequest model, string ipAddress);
        IEnumerable<JwtUserEntity<TKey>> GetAll();
        JwtUserEntity<TKey> GetById(int id);
        AuthenticateResponse<TKey> RefreshToken(string token, string ipAddress);
        bool RevokeToken(string token, string ipAddress);
    }
}