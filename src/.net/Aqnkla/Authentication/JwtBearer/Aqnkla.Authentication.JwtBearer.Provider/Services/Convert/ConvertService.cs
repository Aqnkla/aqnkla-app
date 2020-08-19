using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using Aqnkla.Authentication.JwtBearer.Core.Model.Authentication;
using Aqnkla.Domain.Key.Service;
using System;
using System.Linq;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Convert
{
    public class ConvertService<TKey> : IConvertService<TKey>
    {
        private readonly IKeyService<TKey> keyService;

        public ConvertService(
            IKeyService<TKey> keyService)
        {
            this.keyService = keyService;
        }

        public JwtUserEntity<TKey> CreateRequestToUser(CreateRequest request)
        {
            var user = new JwtUserEntity<TKey>
            {
                Email = request.Email,
                LanguageCode = request.LanguageCode
            };
            return user;
        }

        public JwtUserEntity<TKey> RegisterRequestToUser(RegisterRequest request)
        {
            var user = new JwtUserEntity<TKey>
            {
                Email = request.Email,
                LanguageCode = request.LanguageCode
            };
            return user;
        }

        public JwtUserEntity<TKey> UpdateRequestToUser(UpdateRequest request)
        {
            var user = new JwtUserEntity<TKey>
            {
                Email = request.Email,
                LanguageCode = request.LanguageCode
            };
            return user;
        }

        public AccountResponse UserToAccountResponse(JwtUserEntity<TKey> user)
        {
            var response = new AccountResponse
            {
                Id = keyService.GetKeyString(user.Id),
                Email = user.Email,
                LanguageCode = user.LanguageCode,
                Created = user.Created,
                IsVerified = user.IsVerified,
                Updated = user.Updated,
                Role = Enum.GetName(typeof(Role), user.Role)
            };
            return response;
        }

        public AuthenticateResponse UserToAuthenticateResponse(JwtUserEntity<TKey> user)
        {
            var response = new AuthenticateResponse
            {
                Id = keyService.GetKeyString(user.Id),
                Email = user.Email,
                LanguageCode = user.LanguageCode,
                Created = user.Created,
                IsVerified = user.IsVerified,
                Updated = user.Updated,
                Role = Enum.GetName(typeof(Role), user.Role),
                RefreshToken = user.RefreshTokens.OrderByDescending(d => d.Created).FirstOrDefault(b => b.IsActive).Token
            };
            return response;
        }
    }
}
