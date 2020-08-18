using AutoMapper;
using BC = BCrypt.Net.BCrypt;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Aqnkla.Authentication.JwtBearer.Core.Services;
using System.Threading.Tasks;
using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Provider.Services.EmailSender;
using Aqnkla.Authentication.JwtBearer.Provider.Helpers;
using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;

namespace WebApi.Services
{

    public class AccountService<TKey> : IAccountService<TKey>
    {
        private readonly IJwtUserService<TKey> jwtUserService;
        private readonly IMapper _mapper;
        private readonly IEmailSenderService<TKey> emailSenderService;
        private readonly JwtSettings _appSettings;

        public AccountService(
            IJwtUserService<TKey> jwtUserService,
            IMapper mapper,
            IOptions<JwtSettings> appSettings,
            IEmailSenderService<TKey> emailSenderService)
        {
            this.jwtUserService = jwtUserService;
            _mapper = mapper;
            this.emailSenderService = emailSenderService;
            _appSettings = appSettings.Value;
        }

        public async Task<AuthenticateResponse> AuthenticateAsync(AuthenticateRequest model, string ipAddress)
        {
            var account = await jwtUserService.GetByEmailAsync(model.Email);

            if (account == null || !account.IsVerified || !BC.Verify(model.Password, account.PasswordHash))
                throw new AppException("Email or password is incorrect");

            // authentication successful so generate JWT and refresh tokens
            var jwtToken = GenerateJwtToken(account);
            var refreshToken = GenerateRefreshToken(ipAddress);

            // save refresh token
            account.RefreshTokens.Add(refreshToken);
            await jwtUserService.UpdateAsync(account.Id, account);

            var response = _mapper.Map<AuthenticateResponse>(account);
            response.JwtToken = jwtToken;
            response.RefreshToken = refreshToken.Token;
            return response;
        }

        public async Task<AuthenticateResponse> RefreshTokenAsync(string token, string ipAddress)
        {
            var (refreshToken, account) = await GetRefreshTokenAsync(token);

            // replace old refresh token with a new one and save
            var newRefreshToken = GenerateRefreshToken(ipAddress);
            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = ipAddress;
            refreshToken.ReplacedByToken = newRefreshToken.Token;
            account.RefreshTokens.Add(newRefreshToken);
            await jwtUserService.UpdateAsync(account.Id, account);

            // generate new JWT
            var jwtToken = GenerateJwtToken(account);

            var response = _mapper.Map<AuthenticateResponse>(account);
            response.JwtToken = jwtToken;
            response.RefreshToken = newRefreshToken.Token;
            return response;
        }

        public async Task RevokeTokenAsync(string token, string ipAddress)
        {
            var (refreshToken, account) = await GetRefreshTokenAsync(token);

            // revoke token and save
            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = ipAddress;
            await jwtUserService.UpdateAsync(account.Id, account);
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
            var account = _mapper.Map<JwtUserEntity<TKey>>(model);

            account.Role = Role.User;
            account.Created = DateTime.UtcNow;
            account.VerificationToken = RandomTokenString();

            // hash password
            account.PasswordHash = BC.HashPassword(model.Password);

            // save account
            await jwtUserService.AddAsync(account);

            // send email
            emailSenderService.SendVerificationEmail(account, origin);
        }

        public async Task VerifyEmailAsync(string token)
        {
            var account = await jwtUserService.GetByTokenAsync(token);

            if (account == null) throw new AppException("Verification failed");

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
            account.ResetToken = RandomTokenString();
            account.ResetTokenExpires = DateTime.UtcNow.AddDays(24);

            await jwtUserService.UpdateAsync(account.Id, account);

            // send email
            emailSenderService.SendPasswordResetEmail(account, origin);
        }

        public async Task ValidateResetTokenAsync(ValidateResetTokenRequest model)
        {
            var account = await jwtUserService.GetByVakidTokenAsync(model.Token);

            if (account == null)
                throw new AppException("Invalid token");
        }

        public async Task ResetPasswordAsync(ResetPasswordRequest model)
        {
            var account = await jwtUserService.GetByVakidTokenAsync(model.Token);

            if (account == null)
                throw new AppException("Invalid token");

            // update password and remove reset token
            account.PasswordHash = BC.HashPassword(model.Password);
            account.PasswordReset = DateTime.UtcNow;
            account.ResetToken = null;
            account.ResetTokenExpires = null;

            await jwtUserService.UpdateAsync(account.Id, account);
        }

        public async Task<IEnumerable<AccountResponse>> GetAllAsync()
        {
            var accounts = await jwtUserService.GetAllAsync();
            return _mapper.Map<IList<AccountResponse>>(accounts);
        }

        public async Task<AccountResponse> GetByIdAsync(TKey id)
        {
            var account = await jwtUserService.GetAsync(id);
            return _mapper.Map<AccountResponse>(account);
        }

        public async Task<AccountResponse> CreateAsync(CreateRequest model)
        {
            // validate
            var jwtUserEntity = await jwtUserService.GetByEmailAsync(model.Email);
            if (jwtUserEntity != null)
                throw new AppException($"Email '{model.Email}' is already registered");

            // map model to new account object
            var account = _mapper.Map<JwtUserEntity<TKey>>(model);
            account.Created = DateTime.UtcNow;
            account.Verified = DateTime.UtcNow;

            // hash password
            account.PasswordHash = BC.HashPassword(model.Password);

            // save account
            await jwtUserService.AddAsync(account);

            return _mapper.Map<AccountResponse>(account);
        }

        public async Task<AccountResponse> UpdateAsync(TKey id, UpdateRequest model)
        {
            var account = await jwtUserService.GetAsync(id);
            var accountMail = await jwtUserService.GetByEmailAsync(model.Email);

            // validate
            if (account.Email != model.Email && accountMail != null)
                throw new AppException($"Email '{model.Email}' is already taken");

            // hash password if it was entered
            if (!string.IsNullOrEmpty(model.Password))
                account.PasswordHash = BC.HashPassword(model.Password);

            // copy model to account and save
            _mapper.Map(model, account);
            account.Updated = DateTime.UtcNow;
            await jwtUserService.UpdateAsync(account.Id, account);

            return _mapper.Map<AccountResponse>(account);
        }

        public async Task DeleteAsync(TKey id)
        {
            await jwtUserService.DelateAsync(id);
        }

        // helper methods

        private async Task<(RefreshToken, JwtUserEntity<TKey>)> GetRefreshTokenAsync(string token)
        {
            var account = await jwtUserService.GetByTokenAsync(token);
            if (account == null) throw new AppException("Invalid token");
            var refreshToken = account.RefreshTokens.Single(x => x.Token == token);
            if (!refreshToken.IsActive) throw new AppException("Invalid token");
            return (refreshToken, account);
        }

        private string GenerateJwtToken(JwtUserEntity<TKey> account)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", account.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddMinutes(15),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        private RefreshToken GenerateRefreshToken(string ipAddress)
        {
            return new RefreshToken
            {
                Token =RandomTokenString(),
                Expires = DateTime.UtcNow.AddDays(7),
                Created = DateTime.UtcNow,
                CreatedByIp = ipAddress
            };
        }

        private string RandomTokenString()
        {
            using var rngCryptoServiceProvider = new RNGCryptoServiceProvider();
            var randomBytes = new byte[40];
            rngCryptoServiceProvider.GetBytes(randomBytes);
            // convert random bytes to hex string
            return BitConverter.ToString(randomBytes).Replace("-", "");
        }

    }
}
