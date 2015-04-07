using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IWasThere.ViewModels
{
    [Serializable]
    public class EventPostRequest
    {
        public int EventId { get; set; }

        public int Take { get; set; }
    }
}
