namespace Aqnkla.Domain.Password.Service
{
    public interface IPasswordService
    {
        string HashPassword(string password);
        bool Verify(string password, string passwordHash);
    }
}
