using System;
using System.Collections.Generic;
using DataAccessLayer.Models;
using Microsoft.AspNetCore.Identity;

namespace DataAccessLayer.RelationTables
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<Hotel_Basic_Info> Collection { get; set; }
    }
}
