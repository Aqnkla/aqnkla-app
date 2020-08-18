using System.ComponentModel.DataAnnotations;

namespace Aqnkla.Authentication.JwtBearer.Core.Model.Accounts
{
    public class VerifyEmailRequest
    {
        [Required]
        public string Token { get; set; }
    }
}