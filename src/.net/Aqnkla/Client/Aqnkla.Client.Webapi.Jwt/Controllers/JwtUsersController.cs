using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System;
using Aqnkla.Authentication.JwtBearer.Model;
using MongoDB.Bson;
using Aqnkla.Authentication.JwtBearer.Services.Authentication;
using System.Threading.Tasks;

namespace Sorgo.Client.Webapi.Jwt.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class JwtUsersController : ControllerBase
    {
        private readonly IAuthenticationService<ObjectId> authenticationService;

        public JwtUsersController(IAuthenticationService<ObjectId> authenticationService)
        {
            this.authenticationService = authenticationService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> AuthenticateAync([FromBody] AuthenticateRequest model)
        {
            var response = await authenticationService.AuthenticateAsync(model, ipAddress());

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            setTokenCookie(response.RefreshToken);

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("refresh-token")]
        public async Task<IActionResult> RefreshTokenAync()
        {
            var refreshToken = Request.Cookies["refreshToken"];
            var response = await authenticationService.RefreshTokenAsync(refreshToken, ipAddress());

            if (response == null)
                return Unauthorized(new { message = "Invalid token" });

            setTokenCookie(response.RefreshToken);

            return Ok(response);
        }

        [HttpPost("revoke-token")]
        public async Task<IActionResult> RevokeTokenAync([FromBody] RevokeTokenRequest model)
        {
            // accept token from request body or cookie
            var token = model.Token ?? Request.Cookies["refreshToken"];

            if (string.IsNullOrEmpty(token))
                return BadRequest(new { message = "Token is required" });

            var response = await authenticationService.RevokeTokenAsync(token, ipAddress());

            if (!response)
                return NotFound(new { message = "Token not found" });

            return Ok(new { message = "Token revoked" });
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAync(ObjectId id)
        {
            var user = await authenticationService.GetByIdAsync(id);
            if (user == null) return NotFound();

            return Ok(user);
        }

        [HttpGet("{id}/refresh-tokens")]
        public async Task<IActionResult> GetRefreshTokensAync(ObjectId id)
        {
            var user = await authenticationService.GetByIdAsync(id);
            if (user == null) return NotFound();

            return Ok(user.RefreshTokens);
        }

        // helper methods

        private void setTokenCookie(string token)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTime.UtcNow.AddDays(7)
            };
            Response.Cookies.Append("refreshToken", token, cookieOptions);
        }

        private string ipAddress()
        {
            if (Request.Headers.ContainsKey("X-Forwarded-For"))
                return Request.Headers["X-Forwarded-For"];
            else
                return HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString();
        }
    }
}
