using System;
using System.Runtime.Serialization;

namespace Sorgo.Domain.SorgoException
{
    [Serializable]
    public class SorgoNullException : Exception
    {
        public SorgoNullException(string message) : base(message)
        {
        }

        public SorgoNullException(string message, Exception innerException) : base(message, innerException)
        {
        }

        public SorgoNullException()
        {
        }



        protected SorgoNullException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
