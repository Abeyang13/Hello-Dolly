using DollyAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DollyAPI.Controllers
{
    [Authorize]
    public class DolliesController : ApiController
    {
        // GET api/values
        // GETALL Messages that was sent in the last 10 minutes
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // PUT api/values/5
        // PUT Messages that into database where Dolly can pull the messages
        public void Put(int id, [FromBody]Dolly value)
        {
        
        }

    }
}
