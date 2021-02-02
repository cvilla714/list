/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const lista = document.querySelector("ul");
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
  lista.innerHTML += html;
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

//delete document
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

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };
  db.collection("default-list")
    .add(recipe)
    .then(() => {
      console.log("item added");
    })
    .catch((err) => {
      console.log(err);
    });
  form.reset();
});

//deleting data from the database
lista.addEventListener("click", (e) => {
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

const addform = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const generatetemplate = (todo) => {
  const html = `
<lit class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i>
</li>`;
  list.innerHTML += html;
};

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGtCQUFrQjtBQUN6RjtBQUNBO0FBQ0EsaUJBQWlCLEdBQUc7QUFDcEIsU0FBUyxXQUFXO0FBQ3BCLFNBQVMsS0FBSzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIik7XG5jb25zdCBhZGRpdGVtID0gKGl0ZW0sIGlkKSA9PiB7XG4gIGNvbnN0IHdoZW4gPSBkYXRlRm5zLmRpc3RhbmNlSW5Xb3Jkc1RvTm93KGl0ZW0uY3JlYXRlZF9hdC50b0RhdGUoKSwgeyBhZGRTdWZmaXg6IHRydWUgfSk7XG4gIC8vIGxldCB0aW1lID0gaXRlbS5jcmVhdGVkX2F0LnRvRGF0ZSgpO1xuICBsZXQgaHRtbCA9IGBcbiAgPGxpIGRhdGEtaWQ9XCIke2lkfVwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgPGRpdj4ke2l0ZW0udGl0bGV9PC9kaXY+XG4gIDxkaXY+JHt3aGVufTwvZGl2PlxuICBcbiAgPGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGRlbGV0ZVwiPjwvaT5cbiAgPC9saT5cbiAgYDtcbiAgLy8gY29uc29sZS5sb2coaHRtbCk7XG4gIGxpc3RhLmlubmVySFRNTCArPSBodG1sO1xufTtcblxuLy9nZXQgZG9jdW1lbnRzXG4vLyBkYi5jb2xsZWN0aW9uKFwiZGVmYXVsdC1saXN0XCIpXG4vLyAuZ2V0KClcbi8vIC50aGVuKChzbmFwc2hvdCkgPT4ge1xuLy8gc25hcHNob3QuZG9jcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4vLyBjb25zb2xlLmxvZyhpdGVtLmlkKTtcbi8vIGNvbnNvbGUubG9nKGl0ZW0uZGF0YSgpKTtcbi8vXG4vLyBhZGRpdGVtKGl0ZW0uZGF0YSgpLCBpdGVtLmlkKTtcbi8vIH0pO1xuLy8gfSlcbi8vIC5jYXRjaCgoZXJyKSA9PiB7XG4vLyBjb25zb2xlLmxvZyhlcnIpO1xuLy8gfSk7XG5cbi8vcmVhbCB0aW1lIGV2ZW50IGxpc3RuZXJzIHRvIHRoZSBkYXRhYnNlXG4vL3RvIGFkZCBhbmQgZGVsZXRlIGVsZW1lbnRzIGZyb20gdGhlIHdlYmJyb3dzZXJcbmRiLmNvbGxlY3Rpb24oXCJkZWZhdWx0LWxpc3RcIikub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcbiAgc25hcHNob3QuZG9jQ2hhbmdlcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGNoYW5nZSk7XG4gICAgY29uc3QgZG9jID0gY2hhbmdlLmRvYztcbiAgICAvLyBjb25zb2xlLmxvZyhkb2MpO1xuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gXCJhZGRlZFwiKSB7XG4gICAgICBhZGRpdGVtKGRvYy5kYXRhKCksIGRvYy5pZCk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UudHlwZSA9PT0gXCJyZW1vdmVkXCIpIHtcbiAgICAgIGRlbGV0ZWl0ZW0oZG9jLmlkKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vZGVsZXRlIGRvY3VtZW50XG5jb25zdCBkZWxldGVpdGVtID0gKGlkKSA9PiB7XG4gIGNvbnN0IHRvdGFsaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG4gIHRvdGFsaXRlbXMuZm9yRWFjaCgoaXRtKSA9PiB7XG4gICAgaWYgKGl0bS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpID09PSBpZCkge1xuICAgICAgaXRtLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vL2FkZCBkb2N1bWVudHMgdG8gdGhlIGRhdGFiYXNlXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHJlY2lwZSA9IHtcbiAgICB0aXRsZTogZm9ybS5yZWNpcGUudmFsdWUsXG4gICAgY3JlYXRlZF9hdDogZmlyZWJhc2UuZmlyZXN0b3JlLlRpbWVzdGFtcC5mcm9tRGF0ZShub3cpLFxuICB9O1xuICBkYi5jb2xsZWN0aW9uKFwiZGVmYXVsdC1saXN0XCIpXG4gICAgLmFkZChyZWNpcGUpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJpdGVtIGFkZGVkXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG4gIGZvcm0ucmVzZXQoKTtcbn0pO1xuXG4vL2RlbGV0aW5nIGRhdGEgZnJvbSB0aGUgZGF0YWJhc2Vcbmxpc3RhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlKTtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZVwiKSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICBkYi5jb2xsZWN0aW9uKFwiZGVmYXVsdC1saXN0XCIpXG4gICAgICAuZG9jKGlkKVxuICAgICAgLmRlbGV0ZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbSBkZWxldGVkXCIpO1xuICAgICAgfSk7XG4gIH1cbn0pO1xuXG5jb25zdCBhZGRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIik7XG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoIGlucHV0XCIpO1xuY29uc3QgZ2VuZXJhdGV0ZW1wbGF0ZSA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGh0bWwgPSBgXG48bGl0IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbjxzcGFuPiR7dG9kb308L3NwYW4+XG48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgZGVsZXRlXCI+PC9pPlxuPC9saT5gO1xuICBsaXN0LmlubmVySFRNTCArPSBodG1sO1xufTtcblxuLy8gYWRkZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vIGNvbnN0IHRvZG8gPSBhZGRmb3JtLmFkZC52YWx1ZS50cmltKCk7XG4vLyBjb25zb2xlLmxvZyh0b2RvKTtcbi8vIGlmICh0b2RvLmxlbmd0aCkge1xuLy8gZ2VuZXJhdGV0ZW1wbGF0ZSh0b2RvKTtcbi8vIGFkZGZvcm0ucmVzZXQoKTtcbi8vIH1cbi8vIH0pO1xuXG4vLyBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbi8vIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlXCIpKSB7XG4vLyBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbi8vIH1cbi8vIH0pO1xuXG5jb25zdCBmaWx0ZXJ0aGV0b2RvbGlzdCA9ICh0ZXJtKSA9PiB7XG4gIEFycmF5LmZyb20obGlzdC5jaGlsZHJlbilcbiAgICAuZmlsdGVyKChlYWNobGl0YWcpID0+ICFlYWNobGl0YWcudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtKSlcbiAgICAuZm9yRWFjaCgoZWFjaGxpdGFnKSA9PiBlYWNobGl0YWcuY2xhc3NMaXN0LmFkZChcImZpbHRlcmVkXCIpKTtcbiAgQXJyYXkuZnJvbShsaXN0LmNoaWxkcmVuKVxuICAgIC5maWx0ZXIoKGVhY2hsaXRhZykgPT4gZWFjaGxpdGFnLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybSkpXG4gICAgLmZvckVhY2goKGVhY2hsaXRhZykgPT4gZWFjaGxpdGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJmaWx0ZXJlZFwiKSk7XG59O1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHtcbiAgY29uc3QgdGVybSA9IHNlYXJjaC52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgZmlsdGVydGhldG9kb2xpc3QodGVybSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=