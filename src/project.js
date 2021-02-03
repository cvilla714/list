class Project {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
  }
}

module.exports = Project;

function projectCard(title) {
  const column = document.createElement('div');
  column.className = 'col-12 mt-2';
  const card = document.createElement('div');
  const cardHeader = document.createElement('div');
  const cardTitle = document.createElement('h6');
  const todoList = document.createElement('ul');

  card.className = 'card';
  card.style.width = '18rem';

  cardHeader.className = 'card-header';

  todoList.className = 'todos';
  const todoId = `${title.replace(/ |\/|_|'/g, '-')}Todo`;
  todoList.setAttribute('id', todoId);

  cardTitle.textContent = title;
  cardHeader.appendChild(cardTitle);

  card.append(cardHeader, todoList);
  column.appendChild(card);

  return column;
}

module.exports = projectCard;

function projectForm() {
  const modalBg = document.createElement('div');
  const modalMain = document.createElement('div');
  const form = document.createElement('form');
  const name = document.createElement('input');
  const heading = document.createElement('h5');
  const button = document.createElement('button');
  const close = document.createElement('i');
  const div = document.createElement('div');

  heading.textContent = 'New Project';
  heading.className = 'w-50 mx-auto d-block';

  name.className = 'form-control mb-3 w-50 mx-auto d-block b-light';
  name.setAttribute('id', 'projectName');
  name.setAttribute('type', 'text');

  button.textContent = 'Create Project';
  button.className = 'btn btn-primary mx-auto d-block';
  button.setAttribute('id', 'createProjectBtn');
  button.setAttribute('type', 'submit');

  form.append(heading, name, button);

  // Modal
  modalBg.className = 'modal-bg project-modal';
  modalMain.className = 'modal-main';

  close.className = 'fas fa-times';
  div.className = 'close';
  div.setAttribute('id', 'closeProj');
  div.appendChild(close);

  modalMain.append(div, form);
  modalBg.appendChild(modalMain);

  return modalBg;
}

module.exports = projectForm();