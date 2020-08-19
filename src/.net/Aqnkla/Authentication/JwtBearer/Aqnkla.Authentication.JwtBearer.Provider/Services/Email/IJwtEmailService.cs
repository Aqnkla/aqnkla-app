namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Email
{
    public interface IJwtEmailService
    {
        void Send(string to, string subject, string html, string from = null);
    }
}