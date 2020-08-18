using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System;
using System.Threading.Tasks;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Authentication;
using Aqnkla.Authentication.JwtBearer.Core.Model;
using MongoDB.Bson;

namespace Aqnkla.Client.Webapi.Controllers
{
    [Authorize]
    [Route("user")]
    [ApiController]
    public class JwtUserController : ControllerBase
    {
        private readonly IAuthenticationService<ObjectId> authenticationService;

        public JwtUserController(IAuthenticationService<ObjectId> authenticationService)
        {
            this.authenticationService = authenticationService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> AuthenticateAync([FromBody] AuthenticateRequest model)
        {
            var response = await authenticationService.AuthenticateAsync(model, IpAddress()).ConfigureAwait(false);

            if (response == null)
                return BadRequest(new { message = "User name or password is incorrect" });

            SetTokenCookie(response.RefreshToken);

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("refresh-token")]
        public async Task<IActionResult> RefreshTokenAync()
        {
            var refreshToken = Request.Cookies["refreshToken"];
            var response = await authenticationService.RefreshTokenAsync(refreshToken, IpAddress()).ConfigureAwait(false);

            if (response == null)
                return Unauthorized(new { message = "Invalid token" });

            SetTokenCookie(response.RefreshToken);

            return Ok(response);
        }

        [HttpPost("revoke-token")]
        public async Task<IActionResult> RevokeTokenAync([FromBody] RevokeTokenRequest model)
        {
            // accept token from request body or cookie
            var token = model.Token ?? Request.Cookies["refreshToken"];

            if (string.IsNullOrEmpty(token))
                return BadRequest(new { message = "Token is required" });

            var response = await authenticationService.RevokeTokenAsync(token, IpAddress()).ConfigureAwait(false);

            if (!response)
                return NotFound(new { message = "Token not found" });

            return Ok(new { message = "Token revoked" });
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAync(ObjectId id)
        {
            var user = await authenticationService.GetByIdAsync(id).ConfigureAwait(false);
            if (user == null) return NotFound();

            return Ok(user);
        }

        [HttpGet("{id}/refresh-tokens")]
        public async Task<IActionResult> GetRefreshTokensAync(ObjectId id)
        {
            var user = await authenticationService.GetByIdAsync(id).ConfigureAwait(false);
            if (user == null) return NotFound();

            return Ok(user.RefreshTokens);
        }

        // helper methods

        private void SetTokenCookie(string token)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTime.UtcNow.AddDays(7)
            };
            Response.Cookies.Append("refreshToken", token, cookieOptions);
        }

        private string IpAddress()
        {
            if (Request.Headers.ContainsKey("X-Forwarded-For"))
                return Request.Headers["X-Forwarded-For"];
            else
                return HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString();
        }
    }
}
