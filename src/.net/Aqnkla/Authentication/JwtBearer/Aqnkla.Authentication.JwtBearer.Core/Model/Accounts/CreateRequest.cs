using Aqnkla.Authentication.JwtBearer.Core.Entity;
using System.ComponentModel.DataAnnotations;

namespace Aqnkla.Authentication.JwtBearer.Core.Model.Accounts
{
    public class CreateRequest
    {

        [Required]
        [EnumDataType(typeof(Role))]
        public string Role { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }


        [Required]
        [MinLength(2)]
        [MaxLength(2)]
        public string LanguageCode { get; set; }

        [Required]
        [MinLength(6)]
        public string Password { get; set; }

        [Required]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }
    }
}