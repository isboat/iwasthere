using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IWasThere.ViewModels
{
    [Serializable]
    public class EventPostsViewModel : BaseResponseViewModel
    {
        public List<EventPostViewModel> Items { get; set; }
    }

    public class EventPostViewModel
    {
        public int PostId { get; set; }

        public string PicUrl { get; set; }

        public string Caption { get; set; }
    }
}
