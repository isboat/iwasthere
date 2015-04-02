using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IWasThere.ViewModels
{
    [Serializable]
    public class EventSearchResponseViewModel : BaseResponseViewModel
    {
        public List<EventSearchItem> Items { get; set; }
    }

    [Serializable]
    public class EventSearchItem
    {
        public string Title { get; set; }

        public string Url { get; set; }
    }
}
