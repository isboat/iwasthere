using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IWasThere.Configuration
{
    using System.Configuration;

    using Microsoft.Practices.Unity;
    using Microsoft.Practices.Unity.Configuration;

    public sealed class IoC
    {
        private static IoC instance = null;
        private static readonly object padlock = new object();

        private readonly IUnityContainer container;

        public IoC()
        {
            var section = (UnityConfigurationSection)ConfigurationManager.GetSection("unity");
            container = new UnityContainer().LoadConfiguration(section);
        }

        public static IoC Instance
        {
            get
            {
                lock (padlock)
                {
                    if (instance == null)
                    {
                        instance = new IoC();
                    }
                }
                return instance;
            }
        }

        public T Resolve<T>()
        {
            return container.Resolve<T>();
        }
    }
}
