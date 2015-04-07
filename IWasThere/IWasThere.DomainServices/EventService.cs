﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IWasThere.BAL
{
    using IWasThere.BAL.Interfaces;
    using IWasThere.Configuration;
    using IWasThere.ViewModels;

    public class EventService: IEventService
    {
        public EventSearchResponseViewModel SearchEvent(EventRequestViewModel viewModel)
        {
            return new EventSearchResponseViewModel
                   {
                       Items = new List<EventSearchItem>
                           {
                               new EventSearchItem {
                                   Title = "Title " + viewModel.SearchTerm,
                                   Url = UrlHelper.CreateEventUrl(1)
                               },
                               new EventSearchItem {
                                   Title = "Titre Deuxieme " + viewModel.SearchTerm,
                                   Url = UrlHelper.CreateEventUrl(2)
                               },
                               new EventSearchItem {
                                   Title = "Title Troisieme " + viewModel.SearchTerm,
                                   Url = UrlHelper.CreateEventUrl(3)
                               },
                               new EventSearchItem {
                                   Title = "Title Fourth " + viewModel.SearchTerm,
                                   Url = UrlHelper.CreateEventUrl(41)
                               },
                           }
                   };
        }

        public EventPostsViewModel GetEventPosts(EventPostRequest request)
        {
            return new EventPostsViewModel
                   {
                       Items =
                           new List<EventPostViewModel>
                           {
                               new EventPostViewModel
                               {
                                   Caption =
                                       "caption test",
                                   PicUrl =
                                       "/pciurl"
                               }
                           }
                   };
        }
    }
}
