using System;
using System.Threading.Tasks;
using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using Aqnkla.Authentication.JwtBearer.Core.Model.Authentication;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Authentication;
using Aqnkla.Client.Webapi.Controllers.Base;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace Aqnkla.Client.Webapi.Controllers.Authorization
{
    [Route("auth/[controller]")]
    [ApiController]
    public class AuthenticationController : BaseController
    {
        private readonly IAuthenticationService<ObjectId> authenticationService;

        public AuthenticationController(
           IAuthenticationService<ObjectId> authenticationService)
        {
            this.authenticationService = authenticationService;
        }

        [HttpPost("authenticate")]
        public async Task<ActionResult<AuthenticateResponse>> AuthenticateAsync(AuthenticateRequest model)
        {
            var response = await authenticationService.AuthenticateAsync(model, IpAddress());
            SetTokenCookie(response.RefreshToken);
            return Ok(response);
        }

        [HttpPost("refresh-token")]
        public async Task<ActionResult<AuthenticateResponse>> RefreshTokenAsync()
        {
            var refreshToken = Request.Cookies["refreshToken"];
            var response = await authenticationService.RefreshTokenAsync(refreshToken, IpAddress());
            SetTokenCookie(response.RefreshToken);
            return Ok(response);
        }

        [Authorize]
        [HttpPost("revoke-token")]
        public async Task<IActionResult> RevokeTokenAsync(RevokeTokenRequest model)
        {
            // accept token from request body or cookie
            var token = model.Token ?? Request.Cookies["refreshToken"];

            if (string.IsNullOrEmpty(token))
                return BadRequest(new { message = "Token is required" });

            // users can revoke their own tokens and admins can revoke any tokens
            if (!Account.OwnsToken(token) && Account.Role != Role.Admin)
                return Unauthorized(new { message = "Unauthorized" });

            await authenticationService.RevokeTokenAsync(token, IpAddress());
            return Ok(new { message = "Token revoked" });
        }

        [HttpPost("validate-reset-token")]
        public async Task<IActionResult> ValidateResetTokenAsync(ValidateResetTokenRequest model)
        {
            await authenticationService.ValidateResetTokenAsync(model);
            return Ok(new { message = "Token is valid" });
        }

        private void SetTokenCookie(string token)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTime.UtcNow.AddDays(7)
            };
            Response.Cookies.Append("refreshToken", token, cookieOptions);
        }

    }
}
