using System;
using System.Web.Mvc;
using System.Web.Routing;

using Base.Web.Controller.Localized;

namespace Base.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.LowercaseUrls = true;

            var homeLocalizedRoute = routes.MapRoute(
                name: "HomeLocalizedRoute",
                url: "{language}",
                defaults: new { controller = "Application", action = "IndexWithLanguage" },
                constraints: new { language = "^[a-z]{2}$" });

            homeLocalizedRoute.RouteHandler = new LocalizedRouteHandler();

            var defaultLocalizedRoute = routes.MapRoute(
                name: "DefaultLocalized",
                url: "{language}/{controller}/{action}/{id}",
                defaults: new { controller = "Application", action = "IndexWithLanguage", id = UrlParameter.Optional },
                constraints: new { language = "^[a-z]{2}$" });

            defaultLocalizedRoute.RouteHandler = new LocalizedRouteHandler();

            routes.MapRoute(
                name: "DefaultNonLocalized",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Application", action = "IndexWithLanguage", id = UrlParameter.Optional });
        }
    }
}

