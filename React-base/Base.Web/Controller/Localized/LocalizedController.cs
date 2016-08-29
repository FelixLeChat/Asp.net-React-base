using System;
using System.Collections.Generic;

namespace Base.Web.Controller.Localized
{
    public class LocalizedController : System.Web.Mvc.Controller
    {
        protected static readonly List<string> SupportedLanguage = new List<string>() { "en", "fr" };

    }
}