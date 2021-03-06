﻿using DollyAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DollyAPI.Controllers
{
    public class MessagesController : ApiController
    {
        ApplicationDbContext db;

        public MessagesController()
        {
            db = new ApplicationDbContext();
        }
        // GET api/values
        // GETALL Messages that was sent in the last 10 minutes
        public IHttpActionResult Get()
        {
            var timeDifference = DateTime.Now.AddMinutes(-10);
            var messages = db.Messages.Where(m => m.MessageSent >= timeDifference).ToList();

            return Ok(messages);
        }

        // PUT api/values/5
        // PUT Messages into database where Dolly can pull the messages
        [HttpPut]
        public IHttpActionResult Put([FromBody]Message value)
        {
            db.Messages.Add(value);
            db.SaveChanges();
            return Ok();
        }

    }
}
