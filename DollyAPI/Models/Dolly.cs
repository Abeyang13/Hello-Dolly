﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DollyAPI.Models
{
    public class Dolly
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
        public DateTime MessageSent { get; set; }

        public Dolly()
        {
            MessageSent = DateTime.Now;
        }
    }
}