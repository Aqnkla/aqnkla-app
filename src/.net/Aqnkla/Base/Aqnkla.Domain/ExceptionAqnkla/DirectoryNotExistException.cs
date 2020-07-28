using System;
using System.Runtime.Serialization;

namespace Aqnkla.Domain.ExceptionAqnkla
{
    [Serializable]
    public class DirectoryNotExistException : Exception
    {
        public DirectoryNotExistException()
        {
        }

        public DirectoryNotExistException(string message) : base(message)
        {
        }

        public DirectoryNotExistException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected DirectoryNotExistException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
