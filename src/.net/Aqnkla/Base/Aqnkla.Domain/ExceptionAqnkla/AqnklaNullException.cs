using System;
using System.Runtime.Serialization;

namespace Aqnkla.Domain.ExceptionAqnkla
{
    [Serializable]
    public class AqnklaNullException : Exception
    {
        public AqnklaNullException(string message) : base(message)
        {
        }

        public AqnklaNullException(string message, Exception innerException) : base(message, innerException)
        {
        }

        public AqnklaNullException()
        {
        }



        protected AqnklaNullException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
