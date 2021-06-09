using System;
using System.Collections.Generic;
using System.Linq;
using DataAccessLayer.DataContext;
using DataAccessLayer.Models;
using Microsoft.EntityFrameworkCore;
using PresentationLayer.Infrastructure;

namespace PresentationLayer.Repository
{
    public class HotelsRepo : IHotelsRepo
    {
        private readonly DataContext _context;
        //var context = new SchoolContext();
        public HotelsRepo(DataContext context)
        {
            _context = context;
        }
        [Obsolete]
        public List<Hotel_Basic_Info> Hotel_Basic_s()
        {
            return _context.Hotel_Basic_Infos.FromSql($"hotels_details_list_get {4}").AsEnumerable().ToList();
        }
    }
}
