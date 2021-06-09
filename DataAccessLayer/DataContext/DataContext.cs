using System;
using DataAccessLayer.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataAccessLayer.DataContext
{
    //connect for database
    public class DataContext : IdentityDbContext

    {
        public DataContext()
        {

        }

        //add constructor
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<Hotel_Basic_Info> Hotel_Basic_Infos { get; set; }
    }
}
