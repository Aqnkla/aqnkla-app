using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using Aqnkla.Authentication.JwtBearer.Core.Model.Authentication;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Convert
{
    public interface IConvertService<TKey>
    {
        AuthenticateResponse UserToAuthenticateResponse(JwtUserEntity<TKey> user);
        AccountResponse UserToAccountResponse(JwtUserEntity<TKey> user);

        JwtUserEntity<TKey> RegisterRequestToUser(RegisterRequest request);
        JwtUserEntity<TKey> CreateRequestToUser(CreateRequest model);
        JwtUserEntity<TKey> UpdateRequestToUser(UpdateRequest model);
    }
}
