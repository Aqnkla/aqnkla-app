using System;

namespace Aqnkla.Authentication.JwtBearer.Core.Model.Accounts
{
    public class AccountResponse
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string LanguageCode { get; set; }
        public string Role { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Updated { get; set; }
        public bool IsVerified { get; set; }
    }
}