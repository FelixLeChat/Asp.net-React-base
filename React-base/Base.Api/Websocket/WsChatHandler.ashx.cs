using System;
using System.Web;

using Microsoft.Web.WebSockets;

namespace Base.Api.Websocket
{
    public class TodoHandler : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            if (context.IsWebSocketRequest)
                context.AcceptWebSocketRequest(new TodoWebsocket());
        }

        public bool IsReusable => false;
    }
}