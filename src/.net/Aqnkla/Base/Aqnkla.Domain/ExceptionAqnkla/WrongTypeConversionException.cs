// Copyright (C) Aqnkla - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using System;
using System.Runtime.Serialization;

namespace Aqnkla.Domain.ExceptionAqnkla
{
    [Serializable]
    public class WrongTypeConversionException : Exception
    {

        public WrongTypeConversionException()
        {
        }

        public WrongTypeConversionException(string message) : base(message)
        {
        }

        public WrongTypeConversionException(Type typeFrom, Type typeTo)
            : base(typeFrom != null && typeTo != null ?
                  $"cannot convert {typeFrom.FullName} to {typeTo.FullName}" : "Conversion error")
        {
        }

        public WrongTypeConversionException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected WrongTypeConversionException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
