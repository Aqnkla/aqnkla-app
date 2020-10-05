using Aqnkla.Domain.ExceptionAqnkla;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Aqnkla.Tool.ViewModelGenerator.Helper
{
    public static class ObjectHelper
    {


        public static string GetAssemblyFileName(Assembly assembly)
        {
            var names = assembly.GetName().Name.Split('.').Select(b => GetCamelCaseName(b));
            return string.Join('-', names);
        }


        public static string GetCamelCaseName(string name)
        {
            var chars = name.ToCharArray();
            chars[0] = chars[0].ToString().ToLower()[0];
            return string.Join("", chars);
        }

        public static string GetCollectionName(Type propertyType)
        {
            return $"{propertyType.GenericTypeArguments.First().Name}[]";
        }

        public static bool IsCollection(Type propertyType)
        {
            if (propertyType.GetInterfaces().Contains(typeof(System.Collections.ICollection)))
            {
                return true;
            }
            return false;
        }

        public static string MapDonNetTypeToTs(Type type)
        {
            switch (type.FullName)
            {
                case "System.String":
                    return "string";
                case "System.Int32":
                case "System.Double":
                    return "number";
                case "System.Boolean":
                    return "boolean";
                default:
                    throw new UnknownTypeValueException($"missing mapping for: {type.FullName}");
            }
            throw new NotImplementedException();
        }

    }
}
