using Aqnkla.Domain.Password.Service;
using BC = BCrypt.Net.BCrypt;

namespace Aqnkla.Authentication.Password.BCrypt.Service
{
    public class BCryptPasswordService : IPasswordService
    {
        public string HashPassword(string password)
        {
            return BC.HashPassword(password);
        }

        public bool Verify(string password, string passwordHash)
        {
            return BC.Verify(password, passwordHash);
        }
    }
}
