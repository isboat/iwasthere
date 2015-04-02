using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IWasThere.BAL
{
    using IWasThere.BAL.Interfaces;
    using IWasThere.ViewModels;

    public class EventService: IEventService
    {
        public EventSearchResponseViewModel SearchEvent(EventRequestViewModel viewModel)
        {
            return new EventSearchResponseViewModel();
        }
    }
}
