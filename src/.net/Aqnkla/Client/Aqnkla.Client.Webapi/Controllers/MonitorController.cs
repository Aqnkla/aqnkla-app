﻿using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Aqnkla.Client.Webapi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
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
            logger.LogDebug("get message received");
            var values = new List<string>
            {
                DateTime.Now.ToLongDateString(),
                DateTime.Now.ToLongTimeString()
            };
            return values;
        }
    }
}
