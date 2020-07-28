using System;
using System.Runtime.Serialization;

namespace Aqnkla.Domain.ExceptionAqnkla
{
    [Serializable]
    public class InvalidFilePathException : Exception
    {
        public InvalidFilePathException()
        {
        }

        public InvalidFilePathException(string message) : base(message)
        {
        }

        public InvalidFilePathException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected InvalidFilePathException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
