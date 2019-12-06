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
    public class MessagesController : ApiController
    {
        ApplicationDbContext db;
        // GET api/values
        // GETALL Messages that was sent in the last 10 minutes
        // IEnumerable<Message> messages = db.Messages.Where(m => m.MessageSent <= 10 min).ToList();
        public IHttpActionResult Get()
        {
            IEnumerable<Message> messages = db.Messages.Where(m => m.MessageSent <= DateTime.Now).ToList();
            return Ok(messages);
        }

        // PUT api/values/5
        // PUT Messages that into database where Dolly can pull the messages
        public IHttpActionResult Put([FromBody]Message value)
        {
            return Ok();
        }

    }
}
