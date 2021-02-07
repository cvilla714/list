import { Tooltip, Toast, Popover } from 'bootstrap';
import './addproject';
import './style.scss';

import './addlist';

// const lista = document.querySelector("ul");
export const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
export const form = document.querySelector('.add');
export const additem = (item, id) => {
  const when = dateFns.distanceInWordsToNow(item.created_at.toDate(), { addSuffix: true });
  // let time = item.created_at.toDate();
  const html = `
  <li data-id="${id}" class="list-group-item d-flex justify-content-between align-items-center">
  <div>${item.title}</div>
  <div>${when}</div> 
  <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  // console.log(html);
  list.innerHTML += html;
};

// real time event listners to the databse
// to add and delete elements from the webbrowser
db.collection('default-list').onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    // console.log(change);
    const { doc } = change;
    // console.log(doc);
    if (change.type === 'added') {
      additem(doc.data(), doc.id);
    } else if (change.type === 'removed') {
      deleteitem(doc.id);
    }
  });
});

// delete document from the browser
const deleteitem = (id) => {
  const totalitems = document.querySelectorAll('li');
  totalitems.forEach((itm) => {
    if (itm.getAttribute('data-id') === id) {
      itm.remove();
    }
  });
};

// add documents to the database
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value.trim(),
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };
  if (recipe.title.length == '') {
  } else {
    db.collection('default-list')
      .add(recipe)
      .then(() => {})
      .catch((err) => {});
    form.reset();
  }
});

// deleting data from the database
list.addEventListener('click', (e) => {
  console.log(e);
  if (e.target.classList.contains('delete')) {
    const id = e.target.parentElement.getAttribute('data-id');

    db.collection('default-list')
      .doc(id)
      .delete()
      .then(() => {});
  }
});

const filterthetodolist = (term) => {
  Array.from(list.children)
    .filter((eachlitag) => !eachlitag.textContent.toLowerCase().includes(term))
    .forEach((eachlitag) => eachlitag.classList.add('filtered'));
  Array.from(list.children)
    .filter((eachlitag) => eachlitag.textContent.toLowerCase().includes(term))
    .forEach((eachlitag) => eachlitag.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterthetodolist(term);
});
