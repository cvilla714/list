import { Tooltip, Toast, Popover } from "bootstrap";
import "./addproject";
import "./style.scss";

import { foo } from "./date";
foo();
import "./addlist";
// const lista = document.querySelector("ul");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const form = document.querySelector(".add");
const additem = (item, id) => {
  const when = dateFns.distanceInWordsToNow(item.created_at.toDate(), { addSuffix: true });
  // let time = item.created_at.toDate();
  let html = `
  <li data-id="${id}" class="list-group-item d-flex justify-content-between align-items-center">
  <div>${item.title}</div>
  <div>${when}</div> 
  <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  // console.log(html);
  list.innerHTML += html;
};

//get documents
// db.collection("default-list")
// .get()
// .then((snapshot) => {
// snapshot.docs.forEach((item) => {
// console.log(item.id);
// console.log(item.data());
//
// additem(item.data(), item.id);
// });
// })
// .catch((err) => {
// console.log(err);
// });

//real time event listners to the databse
//to add and delete elements from the webbrowser
db.collection("default-list").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    // console.log(change);
    const doc = change.doc;
    // console.log(doc);
    if (change.type === "added") {
      additem(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteitem(doc.id);
    }
  });
});

//delete document from the browser
const deleteitem = (id) => {
  const totalitems = document.querySelectorAll("li");
  totalitems.forEach((itm) => {
    if (itm.getAttribute("data-id") === id) {
      itm.remove();
    }
  });
};

//add documents to the database
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(recipe.value);
  // const entrada = {
  // title: form.recipe.value.trim(),
  // created_at: firebase.firestore.Timestamp.fromDate(now),
  // };
  // console.log(entrada);
  // if (entrada.title.length == "") {
  // console.log("no item added");
  // } else {
  // additem(entrada);
  // }

  const now = new Date();
  const recipe = {
    title: form.recipe.value.trim(),
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };
  if (recipe.title.length == "") {
    console.log("no item added");
  } else {
    db.collection("default-list")
      .add(recipe)
      .then(() => {
        console.log("item added");
      })
      .catch((err) => {
        console.log(err);
      });
    form.reset();
  }
});

//deleting data from the database
list.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList.contains("delete")) {
    const id = e.target.parentElement.getAttribute("data-id");
    console.log(id);
    db.collection("default-list")
      .doc(id)
      .delete()
      .then(() => {
        console.log("item deleted");
      });
  }
});

// addform.addEventListener("submit", (event) => {
// event.preventDefault();
// const todo = addform.add.value.trim();
// console.log(todo);
// if (todo.length) {
// generatetemplate(todo);
// addform.reset();
// }
// });

// list.addEventListener("click", (event) => {
// if (event.target.classList.contains("delete")) {
// event.target.parentElement.remove();
// }
// });

const filterthetodolist = (term) => {
  Array.from(list.children)
    .filter((eachlitag) => !eachlitag.textContent.toLowerCase().includes(term))
    .forEach((eachlitag) => eachlitag.classList.add("filtered"));
  Array.from(list.children)
    .filter((eachlitag) => eachlitag.textContent.toLowerCase().includes(term))
    .forEach((eachlitag) => eachlitag.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterthetodolist(term);
});
