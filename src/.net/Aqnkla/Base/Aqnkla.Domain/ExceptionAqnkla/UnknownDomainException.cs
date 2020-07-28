// Copyright (C) Sorgo - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using System;
using System.Runtime.Serialization;

namespace Aqnkla.Domain.ExceptionAqnkla
{
    [Serializable]
    public class UnknownDomainException : Exception
    {
        public UnknownDomainException()
        {
        }

        public UnknownDomainException(string message) : base(message)
        {
        }

        public UnknownDomainException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected UnknownDomainException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
