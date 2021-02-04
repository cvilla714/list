import { list } from './index.js';

const mainform = document.querySelector('.ControlInput1');
const inputone = document.querySelector('#ControlInputone');
const textarea = document.querySelector('#ControlTextareaone');
const date = document.querySelector('#thedate');
const selection = document.querySelector('.form-select');

mainform.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(inputone.value);
  const titles = document.createElement('li');
  titles.textContent = inputone.value;
  titles.style.color = 'red';
  titles.setAttribute('style', 'list-style: none;');

  const check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  check.className = 'pl-2';

  console.log(textarea.value);
  console.log(date.value);
  console.log(selection.value);

  list.appendChild(titles);
  titles.appendChild(check);
});
