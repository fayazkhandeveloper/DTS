using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PresentationLayer.Infrastructure;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PresentationLayer.Controllers
{
    public class OnlineServicesController : Controller
    {
        private readonly IHotelsRepo _hotelsRepo;
        private readonly ILogger<OnlineServicesController> _logger;
        public OnlineServicesController(ILogger<OnlineServicesController> logger, UserManager<IdentityUser> userManager,
         SignInManager<IdentityUser> signInManager,
         RoleManager<IdentityRole> roleManager, IWebHostEnvironment webHostEnvironment,IHotelsRepo hotelsRepo)
        {
            _logger = logger;
            _hotelsRepo = hotelsRepo;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        public ActionResult Hotel_List()
        {
            return View();
        }
        public ActionResult Hotel_Detail()
        {
            return View();
        }
        public ActionResult Resturents_List()
        {
            return View();
        }
        public ActionResult Travel_List()
        {
            return View();
        }
        public JsonResult GetHotelsBasicInfo()
        {

            var result = _hotelsRepo.Hotel_Basic_s().ToList();

            return Json(result);
        }
    }
}
