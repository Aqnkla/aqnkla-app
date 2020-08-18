using Aqnkla.Authentication.JwtBearer.Core.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace Aqnkla.Client.Webapi.Controllers
{
    [Controller]
    public abstract class BaseController : ControllerBase
    {
        // returns the current authenticated account (null if not logged in)
        public JwtUserEntity<ObjectId> Account => (JwtUserEntity<ObjectId>)HttpContext.Items["Account"];
    }
}
