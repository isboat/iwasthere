using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IWasThere.Web.Controllers
{
    using IWasThere.BAL.Interfaces;
    using IWasThere.Configuration;
    using IWasThere.ViewModels;

    public class EventController : Controller
    {
        private readonly IEventService eventService;
        
        #region Constructors

        public EventController()
        {
            this.eventService = IoC.Instance.Resolve<IEventService>();
        }
        #endregion
        //
        // GET: /Event/
        public ActionResult Get(int id)
        {
            var model = new EventViewModel { Title = "Event Title", EventId = 1};
            return this.View("Event", model);
        }

        [HttpPost]
        public JsonResult Search(EventRequestViewModel viewModel)
        {
            if (viewModel == null || string.IsNullOrEmpty(viewModel.SearchTerm))
            {
                return this.Json(new BaseResponseViewModel { IsError = true });
            }

            return this.Json(this.eventService.SearchEvent(viewModel), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult GetEventPosts(EventPostRequest request)
        {
            if (request == null || request.EventId == 0)
            {
                return this.Json(new BaseResponseViewModel { IsError = true });
            }

            if (request.Take < 1)
            {
                request.Take = 10;
            }

            return this.Json(this.eventService.GetEventPosts(request), JsonRequestBehavior.DenyGet);
        }

    }
}
