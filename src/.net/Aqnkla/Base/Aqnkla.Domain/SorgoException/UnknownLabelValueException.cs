// Copyright (C) Sorgo - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using System;
using System.Runtime.Serialization;

namespace Sorgo.Domain.SorgoException
{
    [Serializable]
    public class UnknownLabelValueException : Exception
    {
        public UnknownLabelValueException()
        {
        }

        public UnknownLabelValueException(string message) : base(message)
        {
        }

        public UnknownLabelValueException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected UnknownLabelValueException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
