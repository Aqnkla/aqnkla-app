using System;
using System.Globalization;

namespace Aqnkla.Authentication.JwtBearer.Provider.Helpers
{
    // custom exception class for throwing application specific exceptions 
    // that can be caught and handled within the application
    public class JwtAppException : Exception
    {
        public JwtAppException() : base() { }

        public JwtAppException(string message) : base(message) { }

        public JwtAppException(string message, params object[] args)
            : base(string.Format(CultureInfo.CurrentCulture, message, args))
        {
        }

        public JwtAppException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}