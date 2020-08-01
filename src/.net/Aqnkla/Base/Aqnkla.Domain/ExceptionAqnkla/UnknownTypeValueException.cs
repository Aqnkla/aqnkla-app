// Copyright (C) Aqnkla - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using System;
using System.Runtime.Serialization;

namespace Aqnkla.Domain.ExceptionAqnkla
{
    [Serializable]
    public class UnknownTypeValueException : Exception
    {
        public string Label { get; }

        public UnknownTypeValueException()
        {
        }

        public UnknownTypeValueException(string message, string label) : base(message)
        {
            Label = label;
        }

        public UnknownTypeValueException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected UnknownTypeValueException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }

        public UnknownTypeValueException(string message) : base(message)
        {
        }
    }
}
