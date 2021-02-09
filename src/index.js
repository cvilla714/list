require('../dist/css/style.css');
const { formatDistanceToNow } = require('date-fns');
const Todo = require('./classTodo');
const todoForm = require('./todoList');
const editTodo = require('./todoEdit');
const Project = require('./classProject');
const projectContainer = require('./containerProject');
const projectForm = require('./project');

let projects = [];
const projectNameArray = [];

// Main Container
const container = document.querySelector('.container');
const mainTitle = document.createElement('h1');
const row = document.createElement('div');
const projectModal = document.createElement('button');
const todoModal = document.createElement('button');

mainTitle.textContent = 'To-do List App with JS';
mainTitle.className = 'text-white mx-auto d-block mt-3 ml-3 mb-3';

projectModal.setAttribute('type', 'button');
projectModal.className = 'project-modal-btn btn btn-primary mt-3 ml-3 mb-3';
projectModal.textContent = 'Create Project';

todoModal.setAttribute('type', 'button');
todoModal.className = 'todo-modal-btn btn btn-secondary mt-3 ml-3 mb-3';
todoModal.textContent = 'Create To-do';

container.append(mainTitle);
container.append(projectModal, todoModal);
container.appendChild(projectForm);
container.appendChild(todoForm);
container.appendChild(editTodo);

// Project and Todo Modals
const projModal = document.querySelector('.project-modal');
const todoContModal = document.querySelector('.todo-modal');
const editModalDiv = document.querySelector('.edit-todo-modal');
const modalBg = document.querySelector('.modal-bg');
const allClose = document.querySelectorAll('.close');

projectModal.addEventListener('click', () => {
  projModal.classList.add('modal-bg-active');
});

todoModal.addEventListener('click', () => {
  todoContModal.classList.add('modal-bg-active');
});

const modals = [projModal, todoContModal, editModalDiv];
allClose.forEach((close, index) => {
  close.addEventListener('click', () => {
    modals[index].classList.remove('modal-bg-active');
  });
});

function restoreLocal() {
  projects = JSON.parse(localStorage.getItem('projects'));
  if (projects === null) {
    projects = [];
    createProject('default project');
  } else {
    resetRow();
    projects.forEach((project) => {
      checkboxId = 0;
      const newProject = projectContainer(project.name);
      row.appendChild(newProject);
      renderTodos(project);
    });
  }
}

// Todo Form
const todoTitle = document.querySelector('#tTitle');
const todoDesc = document.querySelector('#tDesc');
const todoDate = document.querySelector('#tDate');
const todoPriority = document.querySelector('#tPriority');
const todoProject = document.querySelector('#tProjectSelection');
const createTodoBtn = document.querySelector('#createTodoBtn');

let checkboxId = 0;

function saveLocal() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

const createProject = (name) => {
  const newProject = new Project(name);
  projects.push(newProject);
  row.appendChild(projectContainer(newProject.name));
  saveLocal();
  modalBg.classList.remove('modal-bg-active');
};

const resetRow = () => {
  const row = document.querySelector('.row');
  row.innerHTML = '';
};

function finishTodo(projectName, todo) {
  for (let i = 1; i <= checkboxId; i += 1) {
    const checkbox = document.querySelector(`#${projectName}${i}`);
    const span = document.querySelector(`#span${projectName}${i}`);
    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        todo.finished = true;
        span.style.textDecoration = 'line-through';
      } else {
        todo.finished = false;
        span.style.textDecoration = 'none';
      }
      saveLocal();
    });
  }
}

// Form to create a Project
const projectName = document.querySelector('#projectName');
const createProjectBtn = document.querySelector('#createProjectBtn');
row.className = 'row';
container.appendChild(row);

createProjectBtn.addEventListener('click', () => {
  createProject(projectName.value);
  restoreLocal();
});

function todoArrayOf(project) {
  return projects[projectNameArray.indexOf(project)];
}

function findCurrentTodo(todos, todoId) {
  const currentTodoIndex = todos.findIndex((obj) => obj.id == todoId);
  return todos[currentTodoIndex];
}

const createTodo = () => {
  const newTodo = new Todo(todoTitle.value, todoDesc.value, todoDate.value, todoPriority.value, todoProject.value);

  if (newTodo.description === '') {
    newTodo.description = 'none';
  }

  todoArrayOf(todoProject.value).todos.push(newTodo);
  saveLocal();
  checkboxId = 0;
  renderTodos(todoArrayOf(todoProject.value));
  todoContModal.classList.remove('modal-bg-active');
};

createTodoBtn.addEventListener('click', createTodo);

const updateTodo = () => {
  const todosArray = todoArrayOf(editElems.projectInput.value).todos;
  const currentTodo = findCurrentTodo(todosArray, editElems.todoIdInput.value);
  console.log(currentTodo);
  currentTodo.date = formatDistanceToNow(new Date(editElems.dateInput.value), { addSuffix: true });
  currentTodo.description = editElems.descInput.value;
  currentTodo.priority = editElems.priorityInput.value;
  currentTodo.title = editElems.titleInput.value;
  editModalDiv.classList.remove('modal-bg-active');
  saveLocal();
};

// Form to edit an existing element

const editTodoTitle = document.querySelector('#editTTitle');
const editTodoDesc = document.querySelector('#editTDesc');
const editTodoDate = document.querySelector('#editTDate');
const editTodoPriority = document.querySelector('#editTPriority');
const editTodoProject = document.querySelector('#projectId');
const todoId = document.querySelector('#todoId');
const editElems = {
  titleInput: editTodoTitle,
  descInput: editTodoDesc,
  dateInput: editTodoDate,
  priorityInput: editTodoPriority,
  projectInput: editTodoProject,
  todoIdInput: todoId,
};

const renderTodos = (project) => {
  const projectName = project.name.replace(/ |\/|_|'/g, '-');
  const todoList = document.querySelector(`#${projectName}Todo`);
  todoList.innerHTML = '';
  const todoArray = project.todos;
  todoArray.forEach((todo) => {
    const li = document.createElement('li');
    checkboxId += 1;

    if (todo.finished) {
      li.innerHTML = `<input type='checkbox' id='${projectName}${checkboxId}' class='mr-2 pl-2 ml-2' checked><span class='${todo.priority.toLowerCase()} ml-1' id='span${projectName}${checkboxId}' style='text-decoration: line-through'>${todo.title} / ${todo.description} / ${todo.date}</span>`;
    } else {
      li.innerHTML = `<input type='checkbox' id='${projectName}${checkboxId}' class='mr-2 pl-2 ml-2'><span class='${todo.priority.toLowerCase()} ml-1' id='span${projectName}${checkboxId}'><strong>Title:</strong>${todo.title} / <strong>Description:</strong> ${
        todo.description
      } / <strong>DueDate:</strong>${todo.date}</span>`;
    }

    todoList.appendChild(li);

    const span = document.querySelector(`#span${projectName}${checkboxId}`);

    span.addEventListener('click', () => {
      editModalDiv.classList.add('modal-bg-active');
      editElems.titleInput.value = todo.title;
      editElems.descInput.value = todo.description;
      editElems.dateInput.value = todo.date;
      editElems.priorityInput.value = todo.priority;
      editElems.projectInput.value = todo.project;
      editElems.todoIdInput.value = todo.id;
    });

    finishTodo(projectName, todo);
  });
  saveLocal();
};

// Edit a To-Do

const editTodoBtn = document.querySelector('#editTodoBtn');

editTodoBtn.addEventListener('click', () => {
  updateTodo();
  restoreLocal();
});

const deleteTodoBtn = document.querySelector('#deleteTodoBtn');

deleteTodoBtn.addEventListener('click', () => {
  const todosArray = todoArrayOf(editElems.projectInput.value).todos;
  const currentTodo = findCurrentTodo(todosArray, editElems.todoIdInput.value);
  todosArray.splice(todosArray.indexOf(currentTodo), 1);
  editModalDiv.classList.remove('modal-bg-active');
  saveLocal();
  restoreLocal();
});

// Restore the local values

restoreLocal();

if (projects != null) {
  projects.forEach((project) => {
    projectNameArray.push(project.name);
  });
}
