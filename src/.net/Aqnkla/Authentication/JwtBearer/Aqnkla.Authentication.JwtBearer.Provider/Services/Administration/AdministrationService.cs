using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using Aqnkla.Authentication.JwtBearer.Core.Services;
using Aqnkla.Authentication.JwtBearer.Provider.Helpers;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Convert;
using Aqnkla.Domain.Password.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Administration
{
    public class AdministrationService<TKey> : IAdministrationService<TKey>
    {
        private readonly IJwtUserService<TKey> jwtUserService;
        private readonly IConvertService<TKey> convertService;
        private readonly IPasswordService passwordService;

        public AdministrationService(
            IJwtUserService<TKey> jwtUserService,
            IConvertService<TKey> convertService,
            IPasswordService passwordService)
        {
            this.jwtUserService = jwtUserService;
            this.convertService = convertService;
            this.passwordService = passwordService;
        }
        public async Task<AccountResponse> CreateAsync(CreateRequest model)
        {
            // validate
            var jwtUserEntity = await jwtUserService.GetByEmailAsync(model.Email);
            if (jwtUserEntity != null)
                throw new JwtAppException($"Email '{model.Email}' is already registered");

            // map model to new account object
            JwtUserEntity<TKey> account = convertService.CreateRequestToUser(model);
            account.Created = DateTime.UtcNow;
            account.Verified = DateTime.UtcNow;

            // hash password
            account.PasswordHash = passwordService.HashPassword(model.Password);

            // save account
            await jwtUserService.AddAsync(account);
            AccountResponse accountResponse = convertService.UserToAccountResponse(account);
            return accountResponse;
        }


        public async Task<IEnumerable<AccountResponse>> GetAllAsync()
        {
            var accounts = await jwtUserService.GetAllAsync();
            IList<AccountResponse> accountResponse = accounts.Select(b => convertService.UserToAccountResponse(b)).ToList();
            return accountResponse;
        }

    }
}
