using Aqnkla.Authentication.JwtBearer.Core.Services;
using System.Threading.Tasks;
using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Provider.Services.EmailSender;
using Aqnkla.Authentication.JwtBearer.Provider.Helpers;
using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Convert;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Token;
using System;
using Aqnkla.Domain.Password.Service;

namespace Aqnkla.Authentication.JwtBearer.Provider.Services.Account
{

    public class JwtAccountService<TKey> : IJwtAccountService<TKey>
    {
        private readonly IJwtUserService<TKey> jwtUserService;
        private readonly IJwtEmailSenderService<TKey> emailSenderService;
        private readonly IConvertService<TKey> convertService;
        private readonly ITokenService<TKey> tokenService;
        private readonly IPasswordService passwordService;

        public JwtAccountService(
            IJwtUserService<TKey> jwtUserService,
            IJwtEmailSenderService<TKey> emailSenderService,
            IConvertService<TKey> convertService,
            ITokenService<TKey> tokenService,
            IPasswordService passwordService)
        {
            this.jwtUserService = jwtUserService;
            this.emailSenderService = emailSenderService;
            this.convertService = convertService;
            this.tokenService = tokenService;
            this.passwordService = passwordService;
        }

        public async Task RegisterAsync(RegisterRequest model, string origin)
        {
            // validate
            var user = await jwtUserService.GetByEmailAsync(model.Email);
            if (user != null)
            {
                // send already registered error in email to prevent account enumeration
                emailSenderService.SendAlreadyRegisteredEmail(model.Email, origin);
                return;
            }

            // map model to new account object
            JwtUserEntity<TKey> account = convertService.RegisterRequestToUser(model);

            account.Role = Role.User;
            account.Created = DateTime.UtcNow;
            account.VerificationToken = tokenService.RandomTokenString();

            // hash password
            account.PasswordHash = passwordService.HashPassword(model.Password);

            // save account
            await jwtUserService.AddAsync(account);

            // send email
            emailSenderService.SendVerificationEmail(account, origin);
        }

        public async Task VerifyEmailAsync(string token)
        {
            var account = await jwtUserService.GetByTokenAsync(token);

            if (account == null) throw new JwtAppException("Verification failed");

            account.Verified = DateTime.UtcNow;
            account.VerificationToken = null;

            await jwtUserService.UpdateAsync(account.Id, account);
        }

        public async Task ForgotPasswordAsync(ForgotPasswordRequest model, string origin)
        {
            var account = await jwtUserService.GetByEmailAsync(model.Email);

            // always return OK response to prevent email enumeration
            if (account == null) return;

            // create reset token that expires after 1 day
            account.ResetToken = tokenService.RandomTokenString();
            account.ResetTokenExpires = DateTime.UtcNow.AddDays(24);

            await jwtUserService.UpdateAsync(account.Id, account);

            // send email
            emailSenderService.SendPasswordResetEmail(account, origin);
        }


        public async Task ResetPasswordAsync(ResetPasswordRequest model)
        {
            var account = await jwtUserService.GetByVakidTokenAsync(model.Token);

            if (account == null)
                throw new JwtAppException("Invalid token");

            // update password and remove reset token
            account.PasswordHash = passwordService.HashPassword(model.Password);
            account.PasswordReset = DateTime.UtcNow;
            account.ResetToken = null;
            account.ResetTokenExpires = null;

            await jwtUserService.UpdateAsync(account.Id, account);
        }

        public async Task<AccountResponse> GetByIdAsync(TKey id)
        {
            var account = await jwtUserService.GetAsync(id);
            AccountResponse accountResponse = convertService.UserToAccountResponse(account);
            return accountResponse;
        }

        public async Task<AccountResponse> UpdateAsync(TKey id, UpdateRequest model)
        {
            var account = await jwtUserService.GetAsync(id);
            var accountMail = await jwtUserService.GetByEmailAsync(model.Email);

            // validate
            if (account.Email != model.Email && accountMail != null)
                throw new JwtAppException($"Email '{model.Email}' is already taken");

            // hash password if it was entered
            if (!string.IsNullOrEmpty(model.Password))
                account.PasswordHash = passwordService.HashPassword(model.Password);

            // copy model to account and save
            var updatedUser = convertService.UpdateRequestToUser(model);
            account.Updated = DateTime.UtcNow;
            await jwtUserService.UpdateAsync(account.Id, updatedUser);
            AccountResponse accountResponse = convertService.UserToAccountResponse(account);
            return accountResponse;
        }

        public async Task DeleteAsync(TKey id)
        {
            await jwtUserService.DelateAsync(id);
        }
    }
}
