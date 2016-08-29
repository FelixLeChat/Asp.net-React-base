using System;

using Microsoft.Web.WebSockets;

namespace Base.Api.Websocket
{
    public class TodoWebsocket : WebSocketHandler
    {
        // list of all clients connected
        public static readonly WebSocketCollection Clients = new WebSocketCollection();

        public override void OnOpen()
        {
            Clients.Add(this);
        }

        public override void OnMessage(string message)
        {
        }

        public override void OnClose()
        {
            Clients.Remove(this);
        }
    }
}