// Copyright (C) Aqnkla - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// Written by Mariusz Nowak <dev@sorgo.net>, 2019
using Aqnkla.Domain.Attributes;
using Aqnkla.Domain.ExceptionAqnkla;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace Aqnkla.Domain.Helper
{
    public static class AttributeHelper
    {
        public static T GetLabelEnum<T>(string label) where T : Enum
        {
            var enums = Enum.GetValues(typeof(T)) as IEnumerable<T>;
            var dictionary = new Dictionary<T, string>();
            foreach (var enumValue in enums)
            {
                var type = typeof(T);
                var memInfo = type.GetMember(enumValue.ToString());
                var attributes = memInfo[0].GetCustomAttributes(typeof(LabelEnumAttribute), false);
                var enumLabel = ((LabelEnumAttribute)attributes[0]).Label;
                dictionary.Add(enumValue, enumLabel);
            }
            var returnValue = dictionary.SingleOrDefault(b => b.Value == label).Key;
            if (returnValue == null)
            {
                throw new UnknownLabelValueException(label);

            }
            return returnValue;
        }


        public static Type GetEnumTypeLabelEnum<T>(T label) where T : Enum
        {
            var type = typeof(T).GetCustomAttributes(true).FirstOrDefault(b => b is DesiredTypeAttribute);
            if (type is DesiredTypeAttribute attribute)
            {
                return attribute.TypeAttribute;
            }
            var msg = "object has not appropriate attribute";
            throw new UnknownTypeValueException(string.Format(CultureInfo.CurrentCulture, msg), label.ToString());
        }
    }
}
