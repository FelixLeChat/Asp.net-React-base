using System;
using System.Linq;
using System.Web.Mvc;

using Base.Web.Controller.Localized;

namespace Base.Web.Controller
{
    public class ApplicationController : LocalizedController
    {
        public ActionResult Index()
        {
            // get the page in english by default
            return this.RedirectToAction("IndexWithLanguage", "Application", new { language = "en" });
        }

        public ActionResult IndexWithLanguage(string language)
        {
            if (SupportedLanguage.FirstOrDefault(x => x == language) == null)
            {
                return this.Index();
            }

            return this.View("ApplicationIndex");
        }
    }
}