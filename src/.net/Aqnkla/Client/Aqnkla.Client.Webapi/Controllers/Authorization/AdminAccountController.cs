using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Aqnkla.Authentication.JwtBearer.Core.Model.Accounts;
using Aqnkla.Authentication.JwtBearer.Provider.Services.Administration;
using Aqnkla.Client.Webapi.Controllers.Base;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aqnkla.Client.Webapi.Controllers.Authorization
{
    [Route("auth/[controller]")]
    [ApiController]
    public class AdminAccountController : BaseController
    {
        private readonly IAdministrationService<ObjectId> administrationService;

        public AdminAccountController(
           IAdministrationService<ObjectId> administrationService)
        {
            this.administrationService = administrationService;
        }


        [Authorize(Role.Admin)]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AccountResponse>>> GetAllAsync()
        {
            var accounts = await administrationService.GetAllAsync();
            return Ok(accounts);
        }


        [Authorize(Role.Admin)]
        [HttpPost]
        public async Task<ActionResult<AccountResponse>> CreateAsync(CreateRequest model)
        {
            var account = await administrationService.CreateAsync(model);
            return Ok(account);
        }
    }
}
