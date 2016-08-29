using System;

using Base.Web;

using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(ReactConfig), "Configure")]

namespace Base.Web
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            // If you want to use server-side rendering of React components, 
            // add all the necessary JavaScript files here. This includes 
            // your components as well as all of their dependencies.
            // See http://reactjs.net/ for more information. Example:
            ReactSiteConfiguration.Configuration
                .AddScript("~/Content/jsx/Header/Header.jsx");
            //	.AddScript("~/Scripts/Second.jsx");

            // If you use an external build too (for example, Babel, Webpack,
            // Browserify or Gulp), you can improve performance by disabling 
            // ReactJS.NET's version of Babel and loading the pre-transpiled 
            // scripts. Example:
            //ReactSiteConfiguration.Configuration
            //    .SetLoadBabel(false)
            //    .AddScriptWithoutTransform("~/Content/js/Bundle/external-bundle.min.js")
            //    .AddScriptWithoutTransform("~/Content/js/Bundle/jquery-bundle.min.js");
        }
	}
}