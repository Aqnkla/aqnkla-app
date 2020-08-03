namespace Aqnkla.Authentication.JwtBearer.Provider
{
    public interface IAuthenticationSettingsProvider
    {
        string GetSecret();
    }
}
