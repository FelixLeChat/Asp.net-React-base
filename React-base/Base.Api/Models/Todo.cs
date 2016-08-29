using System;

namespace Base.Api.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public int? Order { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public bool? Completed { get; set; }

        public override bool Equals(object obj)
        {
           var todo = obj as Todo;
           return (todo != null) && (this.Id == todo.Id);
        }

        public override int GetHashCode()
        {
            return this.Id.GetHashCode();
        }
    }
}