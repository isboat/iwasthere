﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IWasThere.Web.Controllers
{
    using IWasThere.BAL.Interfaces;
    using IWasThere.Configuration;
    using IWasThere.ViewModels;

    public class HomeController : Controller
    {
        private readonly IEventService eventService;

        public HomeController()
        {
            eventService = IoC.Instance.Resolve<IEventService>();
        }

        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        [HttpPost]
        public JsonResult SearchEvent(EventRequestViewModel viewModel)
        {
            if (viewModel == null || string.IsNullOrEmpty(viewModel.SearchTerm))
            {
                return this.Json(new BaseResponseViewModel { IsError = true });
            }

            return this.Json(eventService.SearchEvent(viewModel), JsonRequestBehavior.AllowGet);
        }
    }
}
