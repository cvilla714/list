const { format, formatDistanceToNow } = require("date-fns");

class Todo {
  constructor(title, description, date, priority, project, finished = false) {
    this.title = title;
    this.description = description;
<<<<<<< HEAD
    this.date = format(new Date(date.replace(/-/g, ",")), "dd-MM-yyyy");
    // this.date = formatDistanceToNow(new Date(date), { addSuffix: true });
=======
    this.date = format(new Date(date.replace(/-/g, ',')), 'yyyy-dd-MM');
>>>>>>> fdde6756c35f72d094a46102e5febe07855b3571
    this.priority = priority;
    this.finished = finished;
    this.project = project;
    this.id = Todo.incrementId();
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId += 1;
    return this.latestId;
  }
}

module.exports = Todo;
