using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IWasThere.ViewModels
{
    public class BaseResponseViewModel
    {
        public string Message { get; set; }

        public bool IsError { get; set; }
    }
}
