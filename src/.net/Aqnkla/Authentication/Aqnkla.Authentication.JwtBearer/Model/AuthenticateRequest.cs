using System.ComponentModel.DataAnnotations;

namespace Aqnkla.Authentication.JwtBearer.Model
{
    public class AuthenticateRequest
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}