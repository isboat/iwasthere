using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IWasThere.Configuration
{
    public static class UrlHelper
    {
        public static string CreateEventUrl(int id)
        {
            return "/event/get/" + id;
        }
    }
}
