using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PresentationLayer.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PresentationLayer.Controllers
{
    public class AdminController : Controller
    {
        private readonly SignInManager<IdentityUser> signInManager;
        public AdminController(UserManager<IdentityUser> userManager,
                SignInManager<IdentityUser> signInManager,
                RoleManager<IdentityRole> roleManager)
        {
            this.signInManager = signInManager;
        }

        //Database Access Layer class in modal
        AdminClass ObjClass = new AdminClass();
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
       
        //hotel registration form
        public ActionResult Hotel_Registration()
        {
            return View();

        }
        //restaurants registration form
        public ActionResult Restaurant_Registration()
        {
            return View();

        }
        //hotel registration show
        public ActionResult Hotel_Registration_Show()
        {
            return View();


        }
        //restsurants registration show
        public ActionResult Restaurant_Registration_Show()
        {
            return View();

        }
        //add hotels
        public ActionResult Add_Hotel()

        {
            return View();
        }
        //add restaurants
        public ActionResult Add_Restaurant()

        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult Home()
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
        public ActionResult Add_Advertisement()
        {
            return View();
        }
        public ActionResult Downloads()
        {
            return View();
        }
        public ActionResult Add_Downloads()
        {
            return View();
        }
        public ActionResult ContactUs()
        {
            return View();

        }
        public ActionResult Gallary()
        {
            return View();
        }
        public ActionResult Add_Gallary()
        {
            return View();
        }
        public ActionResult Edit_Page()
        {
            return View();

        }
        public ActionResult Add_Page()
        {
            return View();
        }
        public ActionResult Add_News()
        {
            return View();
        }
        public ActionResult Add_Widget()
        {
            return View();
        }
        public ActionResult Slider()
        {
            return View();

        }
        public ActionResult Slider_Add()
        {
            return View();
        }
        public ActionResult Slider_Edit()
        {
            return View();
        }
        public ActionResult News()
        {
            return View();

        }
        public ActionResult Widget()
        {
            return View();

        }
        public ActionResult Introduction_Add()
        {

            return View();
        }
        public ActionResult Show_Page()
        {

            return View();
        }
        public ActionResult DefineCountries()
        {
            return View();
        }
        public ActionResult DefineProvince()
        {
            return View();
        }
        public ActionResult DefineDistricts()
        {
            return View();
        }
        //Sign in Method which starts Session and this method is called from DataManager/Ajax handler through ajax call
        public JsonResult SigInAction(DataKeeper[] data, string action)
        {
            //LoginSelector Method defined in dbclass
            return Json(ObjClass.LoginSelector(data, action), new Newtonsoft.Json.JsonSerializerSettings());
        }
        //Login
        [AllowAnonymous]
        public async Task<JsonResult> LoginAction(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await signInManager.PasswordSignInAsync(
                    model.Email, model.Password, model.RememberMe, false);


                if (result.Succeeded)
                {
                    RedirectToAction("Login", "Login");
                    return Json(result);
                }
                else
                {
                    return Json(result);
                    ///
                }
            }

            return Json(model);
        }

    }
}
