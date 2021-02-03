const { format } = require('date-fns');

class Todo {
  constructor(
    title,
    description,
    date,
    priority,
    project,
    finished = false,
  ) {
    this.title = title;
    this.description = description;
    this.date = format(new Date(date.replace(/-/g, ',')), 'yyyy-MM-dd');
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

function todoForm() {
  const projectSelection = document.createElement('select');
  const form = document.createElement('form');
  const title = document.createElement('input');
  const desc = document.createElement('input');
  const date = document.createElement('input');
  const priority = document.createElement('select');
  const heading = document.createElement('h4');
  const button = document.createElement('button');
  const modalBg = document.createElement('div');
  const modalMain = document.createElement('div');
  const close = document.createElement('i');
  const div = document.createElement('div');

  heading.textContent = 'New To Do';
  heading.className = 'w-75 mx-auto d-block';

  title.className = 'form-control mb-3 w-50 mx-auto d-block';
  title.setAttribute('id', 'todoTitle');
  title.setAttribute('type', 'text');
  title.setAttribute('placeholder', 'Title');

  desc.className = 'form-control mb-3 w-50 mx-auto d-block';
  desc.setAttribute('id', 'todoDesc');
  desc.setAttribute('type', 'text');
  desc.setAttribute('placeholder', 'Description');

  date.className = 'form-control mb-3 w-50 mx-auto d-block';
  date.setAttribute('type', 'date');
  date.setAttribute('id', 'todoDate');
  date.setAttribute('min', format(new Date(), 'yyyy-MM-dd'));

  const options = ['Low', 'Medium', 'High'];
  options.forEach((option, index) => {
    const op = document.createElement('option');

    op.classList = options[index].toLowerCase();
    op.text = option;
    priority.add(op);
  });
  priority.className = 'form-select mb-3 w-50 mx-auto d-block';
  priority.setAttribute('id', 'todoPriority');

  button.textContent = 'Create Todo';
  button.className = 'btn btn-primary mx-auto d-block';
  button.setAttribute('id', 'createTodoBtn');
  button.setAttribute('type', 'button');

  const projects = JSON.parse(localStorage.getItem('projects'));
  if (projects != null) {
    projects.forEach((project) => {
      const proj = document.createElement('option');
      proj.text = project.name;
      projectSelection.add(proj);
    });
  }
  projectSelection.className = 'form-select mb-3 w-50 mx-auto d-block';
  projectSelection.setAttribute('id', 'todoProjectSelection');

  form.append(
    projectSelection,
    heading,
    title,
    desc,
    date,
    priority,
    button,
  );

  // Modal
  modalBg.className = 'modal-bg todo-modal';
  modalMain.className = 'modal-main';

  close.className = 'fas fa-times';
  div.className = 'close';
  div.setAttribute('id', 'closeTodo');
  div.appendChild(close);

  modalMain.append(div, form);
  modalBg.appendChild(modalMain);

  return modalBg;
}

module.exports = todoForm();
