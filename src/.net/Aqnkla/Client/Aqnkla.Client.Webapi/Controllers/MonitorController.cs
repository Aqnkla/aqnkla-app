using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Aqnkla.Client.Webapi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MonitorController : ControllerBase
    {
        private readonly ILogger<MonitorController> logger;

        public MonitorController(ILogger<MonitorController> logger)
        {
            this.logger = logger;
        }


        [HttpGet]
        public IEnumerable<string> Get()
        {
            var values = new List<string>
            {
                DateTime.Now.ToLongDateString(),
                DateTime.Now.ToLongTimeString()
            };
            return values;
        }
    }
}
