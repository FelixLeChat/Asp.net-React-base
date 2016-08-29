using System;
using System.Globalization;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Base.Web.Controller.Localized
{
    public class LocalizedRouteHandler : MvcRouteHandler
    {
        #region Methods

        protected override IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            var language = CultureInfo.InvariantCulture.TwoLetterISOLanguageName;

            if (requestContext.RouteData.Values.ContainsKey("language"))
            {
                language = requestContext.RouteData.Values["language"].ToString();
            }

            var culture = CultureInfo.GetCultureInfo(language);

            Thread.CurrentThread.CurrentCulture = culture;
            Thread.CurrentThread.CurrentUICulture = culture;

            return base.GetHttpHandler(requestContext);
        }

        #endregion
    }
}