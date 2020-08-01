using Aqnkla.Authentication.JwtBearer.Model;
using Aqnkla.Domain.Base.Entity;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace Aqnkla.Authentication.JwtBearer.Entity
{
    public class JwtUserEntity<TKey> : BaseEntity<TKey>
    {
        public TKey AqnklaUserId { get; set; }

        [JsonIgnore]
        public string PasswordHash { get; set; }

        [JsonIgnore]
        public List<RefreshToken> RefreshTokens { get; set; }
    }
}
