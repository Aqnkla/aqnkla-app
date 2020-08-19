using Aqnkla.Domain.Email.Service;
using Aqnkla.Mail.MailKit.Helper;
using Aqnkla.Mail.MailKit.Service;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Aqnkla.Mail.MailKit.Extensions
{
    public static class ServiceExtension
    {
        public static void AddMailMailKit(this IServiceCollection services,
            IConfiguration configuration)
        {
            var appSettingsSection = configuration.GetSection("MailKitSettings");
            services.Configure<MailKitSettings>(appSettingsSection);
            services.AddSingleton<IMailService, MailKitService>();
        }
    }
}