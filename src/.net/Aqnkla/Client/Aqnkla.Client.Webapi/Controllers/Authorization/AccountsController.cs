﻿using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Account;
using Aqnkla.Client.Webapi.Controllers.Base;
using Aqnkla.Domain.Key.Service;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System.Threading.Tasks;

namespace Aqnkla.Client.Webapi.Controllers.Authorization
{
    [ApiController]
    [Route("auth/[controller]")]
    public class AccountsController : BaseController
    {
        private readonly IJwtAccountService<ObjectId> accountService;
        private readonly IKeyService<ObjectId> keyService;

        public AccountsController(
           IJwtAccountService<ObjectId> accountService,
           IKeyService<ObjectId> keyService)
        {
            this.accountService = accountService;
            this.keyService = keyService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync(RegisterRequest model)
        {
            await accountService.RegisterAsync(model, Request.Headers["origin"]);
            return Ok(new { message = "Registration successful, please check your email for verification instructions" });
        }

        [HttpPost("verify-email")]
        public async Task<IActionResult> VerifyEmailAsync(VerifyEmailRequest model)
        {
            await accountService.VerifyEmailAsync(model.Token);
            return Ok(new { message = "Verification successful, you can now login" });
        }

        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPasswordAsync(ForgotPasswordRequest model)
        {
            await accountService.ForgotPasswordAsync(model, Request.Headers["origin"]);
            return Ok(new { message = "Please check your email for password reset instructions" });
        }

        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPasswordAsync(ResetPasswordRequest model)
        {
            await accountService.ResetPasswordAsync(model);
            return Ok(new { message = "Password reset successful, you can now login" });
        }

        [Authorize]
        [HttpPut("{id:int}")]
        public async Task<ActionResult<AccountResponse>> UpdateAsync(string id, UpdateRequest model)
        {
            var objectId = keyService.ParseKey(id);
            // users can update their own account and admins can update any account
            if (objectId != Account.Id && Account.Role != Role.Admin)
                return Unauthorized(new { message = "Unauthorized" });

            // only admins can update role
            if (Account.Role != Role.Admin)
                model.Role = null;

            var account = await accountService.UpdateAsync(objectId, model);
            return Ok(account);
        }

        [Authorize]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(string id)
        {
            var objectId = keyService.ParseKey(id);
            // users can delete their own account and admins can delete any account
            if (objectId != Account.Id && Account.Role != Role.Admin)
                return Unauthorized(new { message = "Unauthorized" });

            await accountService.DeleteAsync(objectId);
            return Ok(new { message = "Account deleted successfully" });
        }

        [Authorize(Role.Admin)]
        [HttpGet("{id:int}")]
        public async Task<ActionResult<AccountResponse>> GetByIdAsync(string id)
        {
            var objectId = keyService.ParseKey(id);
            // users can get their own account and admins can get any account
            if (objectId != Account.Id && Account.Role != Role.Admin)
                return Unauthorized(new { message = "Unauthorized" });

            var account = await accountService.GetByIdAsync(objectId);
            return Ok(account);
        }
    }
}
