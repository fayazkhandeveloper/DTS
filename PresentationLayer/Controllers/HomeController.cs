using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PresentationLayer.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Hosting;
using PresentationLayer.Infrastructure;
using DataAccessLayer.Models;
using DataAccessLayer.DataContext;

namespace PresentationLayer.Controllers
{
    public class HomeController : Controller
    {
        //Database Access Layer class in modal
        AdminClass ObjClass = new AdminClass();
 
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IWebHostEnvironment _appEnvironment;
        private IGenericRepository<Hotel_Basic_Info> _hotelRepository = null;
        private DataContext _context = null;
        private readonly ILogger<HomeController> _logger;
        private readonly IHotelsRepo _repo;
        public HomeController(ILogger<HomeController> logger, UserManager<IdentityUser> userManager,
         SignInManager<IdentityUser> signInManager,
         RoleManager<IdentityRole> roleManager, IWebHostEnvironment webHostEnvironment,
         IGenericRepository<Hotel_Basic_Info> hotelRepository)
        {
            _logger = logger;
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.roleManager = roleManager;
            this._appEnvironment = webHostEnvironment;
            this._hotelRepository = hotelRepository;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public ActionResult Introduction()
        {
            return View();
        }
        public ActionResult Mission()
        {
            return View();
        }
        public ActionResult Vision()
        {
            return View();
        }
        public ActionResult Objective()
        {
            return View();
        }
        public ActionResult Advertisement()
        {
            return View();
        }
        public ActionResult Download()
        {
            return View();
        }
        public ActionResult Contact()
        {
            return View();
        }
        public ActionResult News()
        {
            return View();
        }
       

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        //Sign Up Method called from DataManager/Ajax handler through ajax call
        public JsonResult SignUpAction(DataKeeper[] data, string action, string Email)
        {
            //FnSignUp Method defined in dbclass
            return Json(ObjClass.FnSignUp(data, action, Email), new Newtonsoft.Json.JsonSerializerSettings());

        }
        //Sign in Method which starts Session and this method is called from DataManager/Ajax handler through ajax call
        public JsonResult SigInAction(DataKeeper[] data, string action)
        {
            //LoginSelector Method defined in dbclass
            return Json(ObjClass.LoginSelector(data, action), new Newtonsoft.Json.JsonSerializerSettings());


        }
        //Forgot Password Method called from DataManager/Ajax handler through ajax call
        public JsonResult FnForgotPassword(DataKeeper[] data, string action, string Email)
        {
            //PasswordReset Method defined in dbclass
            return Json(ObjClass.PasswordReset(data, action, Email), new Newtonsoft.Json.JsonSerializerSettings());
        }           
        //Reset Password Method called from DataManager/Ajax handler through ajax call
        public JsonResult ResetAction(DataKeeper[] data, string action)
        {
            //PasswordReset Method defined in dbclass
            return Json(ObjClass.FnReset(data, action), new Newtonsoft.Json.JsonSerializerSettings());

        }
        //General List Method working without session and  called from DataManager/Ajax handler through ajax call
        public JsonResult GeneralList(DataKeeper[] data, string action)
        {
            //DataSelectorGeneral Method defined in dbclass
            return Json(ObjClass.DataSelectorGeneral(data, action), new Newtonsoft.Json.JsonSerializerSettings());
        }
        public JsonResult MultiList(DataKeeper[] data, string action)
        {
            return Json(ObjClass.DataSelector(data, action), new Newtonsoft.Json.JsonSerializerSettings());
        }
        //Single Action Method working for single Insert,Update,Delete and  called from DataManager/Ajax handler through ajax call
        public JsonResult SingleAction(DataKeeper[] data, string action)
        {

            //DataProcessor Method defined in dbclass
            return Json(ObjClass.DataProcessor(data, action), new Newtonsoft.Json.JsonSerializerSettings());

        }

        //Single Action Method working for multiple Insert,Update,Delete and  called from DataManager/Ajax handler through ajax call
        public JsonResult MultiAction(DataKeeper[] data, int colms, ArrayDetails[] Details, string action)
        {
            //DataProcessor1 Method defined in dbclass
            return Json(ObjClass.DataProcessor1(data, colms, Details, action), new Newtonsoft.Json.JsonSerializerSettings());

        }
        //Single List Method working for returning single datatable and  called from DataManager/Ajax handler through ajax call
        public JsonResult SingleList(DataKeeper[] data, string action)
        {
            //DataSelectorLess Method defined in dbclass
            return Json(ObjClass.DataSelectorLess(data, action), new Newtonsoft.Json.JsonSerializerSettings());
        }

        //Logout Method destroy the current session and  called from DataManager/Ajax handler through ajax call
        //public JsonResult Logout(DataKeeper[] data, string action)
        //{
        //    //Logout Method defined in dbclass
        //    return Json(ObjClass.Logout(), new Newtonsoft.Json.JsonSerializerSettings());
        //}
        public JsonResult MultiListNoSession(DataKeeper[] data, string action)
        {

    return Json(ObjClass.DataSelectorNoSession(data, action), new Newtonsoft.Json.JsonSerializerSettings());
        }
    }
}