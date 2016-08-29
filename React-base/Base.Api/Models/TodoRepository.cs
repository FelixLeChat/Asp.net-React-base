using System;
using System.Collections.Generic;
using System.Linq;

namespace Base.Api.Models
{
    public class TodoRepository
    {
        public static List<Todo> Todos = new List<Todo>();
        public static int MaxId = 0;

        public IEnumerable<Todo> GetAll()
        {
            return Todos.OrderByDescending(t => t.Order);
        }

        public Todo Get(int id)
        {
            return Todos.Where(t => t.Id == id).FirstOrDefault();
        }

        public Todo Save(Todo item)
        {
            if (item.Id == 0)
            {
                item.Id = ++MaxId;
                if (!item.Order.HasValue)
                {
                    item.Order = item.Id;
                }
            }

            int index = Todos.IndexOf(item);
            if (index != -1)
            {
                Todos[index] = item;
            }
            else
            {
                Todos.Add(item);
            }

            return item;
        }

        public void Delete()
        {
            Todos.Clear();
        }

        public void Delete(int id)
        {
            Todos.RemoveAll(t => t.Id == id);
        }
    }
}