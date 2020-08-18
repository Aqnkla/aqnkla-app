namespace Aqnkla.Authentication.JwtBearer.Provider.Helpers
{
    public class JwtSettings
    {
        public string Secret { get; set; }
        public string EmailFrom { get; set; }
        public string SmtpHost { get; set; }
        public int SmtpPort { get; set; }
        public string SmtpUser { get; set; }
        public string SmtpPass { get; set; }
    }
}