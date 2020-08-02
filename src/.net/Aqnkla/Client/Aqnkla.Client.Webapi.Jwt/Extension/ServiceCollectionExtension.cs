using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Aqnkla.Client.Webapi.Jwt.Extension
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceCollectionExtension : ControllerBase
    {
        // GET: api/<ServiceCollectionExtension>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ServiceCollectionExtension>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ServiceCollectionExtension>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ServiceCollectionExtension>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ServiceCollectionExtension>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
