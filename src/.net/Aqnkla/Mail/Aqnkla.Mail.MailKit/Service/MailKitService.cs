using Aqnkla.Domain.Email.Model;
using Aqnkla.Domain.Email.Service;
using Aqnkla.Mail.MailKit.Helper;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;
using System.Threading.Tasks;

namespace Aqnkla.Mail.MailKit.Service
{
    public class MailKitService : IMailService
    {
        private readonly MailKitSettings mailKitSettings;

        public MailKitService(IOptions<MailKitSettings> options)
        {
            mailKitSettings = options.Value;
        }
        public async Task<bool> SendAsync(SendModel model)
        {
            try
            {

                // create message
                var email = new MimeMessage
                {
                    Sender = MailboxAddress.Parse(model.FromAddress ?? mailKitSettings.EmailFrom)
                };
                email.To.Add(MailboxAddress.Parse(model.ToAddress));
                email.Subject = model.Subject;
                email.Body = new TextPart(TextFormat.Html) { Text = model.HtmlContent };

                // send email
                using var smtp = new SmtpClient();
                smtp.Connect(mailKitSettings.SmtpHost, mailKitSettings.SmtpPort, SecureSocketOptions.StartTls);
                smtp.Authenticate(mailKitSettings.SmtpUser, mailKitSettings.SmtpPass);
                await smtp.SendAsync(email);
                await smtp.DisconnectAsync(true);
                return true;
            }
            catch
            {
                return false;
            }
        }

    }
}
