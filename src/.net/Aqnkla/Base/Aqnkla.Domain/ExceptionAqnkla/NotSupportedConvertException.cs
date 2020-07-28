// Copyright (C) Sorgo - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using System;
using System.Runtime.Serialization;

namespace Aqnkla.Domain.ExceptionAqnkla
{
    [Serializable]
    public class NotSupportedConvertException : Exception
    {
        public NotSupportedConvertException()
        {
        }

        public NotSupportedConvertException(Type type)
            : base(type != null ? $"Cannot convert {type.FullName}" : "Conversion error, type is null")
        {
        }

        public NotSupportedConvertException(string message) : base(message)
        {
        }

        public NotSupportedConvertException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected NotSupportedConvertException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
