using System.ComponentModel.DataAnnotations;

namespace Aqnkla.Authentication.JwtBearer.Core.Model.Accounts
{
    public class ValidateResetTokenRequest
    {
        [Required]
        public string Token { get; set; }
    }
}