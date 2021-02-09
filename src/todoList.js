const { format } = require('date-fns');

function todoForm() {
  const projectTitle = document.createElement('h4')
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

  projectTitle.textContent = 'Select a project to attach the task';
  projectTitle.className = 'w-75 mx-auto d-block pl-5';

  heading.textContent = 'New To Do';
  heading.className = 'w-75 mx-auto d-block';

  title.className = 'form-control mb-3 w-75 mx-auto d-block';
  title.setAttribute('id', 'tTitle');
  title.setAttribute('type', 'text');
  title.setAttribute('placeholder', 'Title of the to-do');

  desc.className = 'form-control mb-3 w-75 mx-auto d-block';
  desc.setAttribute('id', 'tDesc');
  desc.setAttribute('type', 'text');
  desc.setAttribute('placeholder', 'Description');

  date.className = 'form-control mb-3 w-75 mx-auto d-block';
  date.setAttribute('type', 'date');
  date.setAttribute('id', 'tDate');
  date.setAttribute('min', format(new Date(), 'yyyy-MM-dd'));

  const options = ['Low', 'Normal', 'High'];
  options.forEach((option, index) => {
    const op = document.createElement('option');

    op.classList = options[index].toLowerCase();
    op.text = option;
    priority.add(op);
  });
  priority.className = 'form-select mb-3 w-75 mx-auto d-block rounded';
  priority.setAttribute('id', 'tPriority');

  button.textContent = 'Create Todo';
  button.className = 'btn btn-secondary mx-auto d-block';
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
  projectSelection.className = 'form-select mb-3 w-75 mx-auto d-block rounded';
  projectSelection.setAttribute('id', 'tProjectSelection');

  form.append(
    heading,
    projectTitle,
    projectSelection,
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
