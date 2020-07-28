using System.ComponentModel.DataAnnotations;

namespace Aqnkla.Authentication.JwtBearer.Entity
{
    public class AuthenticateRequest
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}