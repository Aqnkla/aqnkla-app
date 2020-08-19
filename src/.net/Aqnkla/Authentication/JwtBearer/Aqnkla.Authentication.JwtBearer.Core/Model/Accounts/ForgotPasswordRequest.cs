using System.ComponentModel.DataAnnotations;

namespace Aqnkla.Authentication.JwtBearer.Core.Model.Accounts
{
    public class ForgotPasswordRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}