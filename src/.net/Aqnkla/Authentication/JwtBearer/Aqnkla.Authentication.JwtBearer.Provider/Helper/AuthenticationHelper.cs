﻿using System;
using System.Security.Cryptography;
using System.Text;

namespace Aqnkla.Authentication.JwtBearer.Provider.Helper
{
    internal static class AuthenticationHelper
    {
        public static string GenaretePasswordHash(string password)
        {
            using var sha256Hash = SHA256.Create();
            return GetHash(sha256Hash, password);
        }


        private static string GetHash(HashAlgorithm hashAlgorithm, string input)
        {

            // Convert the input string to a byte array and compute the hash.
            byte[] data = hashAlgorithm.ComputeHash(Encoding.UTF8.GetBytes(input));

            // Create a new Stringbuilder to collect the bytes
            // and create a string.
            var sBuilder = new StringBuilder();

            // Loop through each byte of the hashed data
            // and format each one as a hexadecimal string.
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }

            // Return the hexadecimal string.
            return sBuilder.ToString();
        }
    }
}
