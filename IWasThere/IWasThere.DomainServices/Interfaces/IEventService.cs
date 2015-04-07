using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IWasThere.BAL.Interfaces
{
    using IWasThere.ViewModels;

    public interface IEventService
    {
        EventSearchResponseViewModel SearchEvent(EventRequestViewModel viewModel);

        EventPostsViewModel GetEventPosts(EventPostRequest request);
    }
}
