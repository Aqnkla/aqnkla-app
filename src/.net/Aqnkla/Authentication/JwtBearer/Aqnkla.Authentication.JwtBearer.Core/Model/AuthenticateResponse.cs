using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Domain.User.Entity;
using Newtonsoft.Json;

namespace Aqnkla.Authentication.JwtBearer.Core.Model
{
    public class AuthenticateResponse<TKey>
    {
        public TKey Id { get; set; }
        public string Username { get; set; }
        public string JwtToken { get; set; }

        [JsonIgnore]
        public string RefreshToken { get; set; }

        public AuthenticateResponse(
            JwtUserEntity<TKey> user,
            AqnklaUserEntity<TKey> aqnklaUser,
            string jwtToken,
            string refreshToken)
        {
            Id = user.Id;
            Username = aqnklaUser.UserUniqueName;
            JwtToken = jwtToken;
            RefreshToken = refreshToken;
        }
    }
}