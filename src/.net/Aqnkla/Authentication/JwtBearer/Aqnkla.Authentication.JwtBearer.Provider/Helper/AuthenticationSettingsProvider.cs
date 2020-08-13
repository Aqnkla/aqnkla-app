namespace Aqnkla.Authentication.JwtBearer.Provider.Helper
{
    public interface IAuthenticationSettingsProvider
    {
        string GetSecret();
    }
}
