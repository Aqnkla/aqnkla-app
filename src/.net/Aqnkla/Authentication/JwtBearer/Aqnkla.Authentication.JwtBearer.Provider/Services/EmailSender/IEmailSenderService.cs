using Aqnkla.Authentication.JwtBearer.Core.Entity;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.EmailSender
{
    public interface IEmailSenderService<TKey>
    {
        void SendAlreadyRegisteredEmail(string email, string origin);
        void SendPasswordResetEmail(JwtUserEntity<TKey> account, string origin);
        void SendVerificationEmail(JwtUserEntity<TKey> account, string origin);
    }
}