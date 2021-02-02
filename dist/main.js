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
  <li data-id="${id}">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGtCQUFrQjtBQUN6RjtBQUNBO0FBQ0EsaUJBQWlCLEdBQUc7QUFDcEIsU0FBUyxXQUFXO0FBQ3BCLFNBQVMsS0FBSzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBSztBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xuY29uc3QgYWRkaXRlbSA9IChpdGVtLCBpZCkgPT4ge1xuICBjb25zdCB3aGVuID0gZGF0ZUZucy5kaXN0YW5jZUluV29yZHNUb05vdyhpdGVtLmNyZWF0ZWRfYXQudG9EYXRlKCksIHsgYWRkU3VmZml4OiB0cnVlIH0pO1xuICAvLyBsZXQgdGltZSA9IGl0ZW0uY3JlYXRlZF9hdC50b0RhdGUoKTtcbiAgbGV0IGh0bWwgPSBgXG4gIDxsaSBkYXRhLWlkPVwiJHtpZH1cIj5cbiAgPGRpdj4ke2l0ZW0udGl0bGV9PC9kaXY+XG4gIDxkaXY+JHt3aGVufTwvZGl2PlxuICBcbiAgPGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGRlbGV0ZVwiPjwvaT5cbiAgPC9saT5cbiAgYDtcbiAgLy8gY29uc29sZS5sb2coaHRtbCk7XG4gIGxpc3RhLmlubmVySFRNTCArPSBodG1sO1xufTtcblxuLy9nZXQgZG9jdW1lbnRzXG4vLyBkYi5jb2xsZWN0aW9uKFwiZGVmYXVsdC1saXN0XCIpXG4vLyAuZ2V0KClcbi8vIC50aGVuKChzbmFwc2hvdCkgPT4ge1xuLy8gc25hcHNob3QuZG9jcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4vLyBjb25zb2xlLmxvZyhpdGVtLmlkKTtcbi8vIGNvbnNvbGUubG9nKGl0ZW0uZGF0YSgpKTtcbi8vXG4vLyBhZGRpdGVtKGl0ZW0uZGF0YSgpLCBpdGVtLmlkKTtcbi8vIH0pO1xuLy8gfSlcbi8vIC5jYXRjaCgoZXJyKSA9PiB7XG4vLyBjb25zb2xlLmxvZyhlcnIpO1xuLy8gfSk7XG5cbi8vcmVhbCB0aW1lIGV2ZW50IGxpc3RuZXJzIHRvIHRoZSBkYXRhYnNlXG4vL3RvIGFkZCBhbmQgZGVsZXRlIGVsZW1lbnRzIGZyb20gdGhlIHdlYmJyb3dzZXJcbmRiLmNvbGxlY3Rpb24oXCJkZWZhdWx0LWxpc3RcIikub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcbiAgc25hcHNob3QuZG9jQ2hhbmdlcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGNoYW5nZSk7XG4gICAgY29uc3QgZG9jID0gY2hhbmdlLmRvYztcbiAgICAvLyBjb25zb2xlLmxvZyhkb2MpO1xuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gXCJhZGRlZFwiKSB7XG4gICAgICBhZGRpdGVtKGRvYy5kYXRhKCksIGRvYy5pZCk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UudHlwZSA9PT0gXCJyZW1vdmVkXCIpIHtcbiAgICAgIGRlbGV0ZWl0ZW0oZG9jLmlkKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vZGVsZXRlIGRvY3VtZW50XG5jb25zdCBkZWxldGVpdGVtID0gKGlkKSA9PiB7XG4gIGNvbnN0IHRvdGFsaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG4gIHRvdGFsaXRlbXMuZm9yRWFjaCgoaXRtKSA9PiB7XG4gICAgaWYgKGl0bS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpID09PSBpZCkge1xuICAgICAgaXRtLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vL2FkZCBkb2N1bWVudHMgdG8gdGhlIGRhdGFiYXNlXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHJlY2lwZSA9IHtcbiAgICB0aXRsZTogZm9ybS5yZWNpcGUudmFsdWUsXG4gICAgY3JlYXRlZF9hdDogZmlyZWJhc2UuZmlyZXN0b3JlLlRpbWVzdGFtcC5mcm9tRGF0ZShub3cpLFxuICB9O1xuICBkYi5jb2xsZWN0aW9uKFwiZGVmYXVsdC1saXN0XCIpXG4gICAgLmFkZChyZWNpcGUpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJpdGVtIGFkZGVkXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG59KTtcblxuLy9kZWxldGluZyBkYXRhIGZyb20gdGhlIGRhdGFiYXNlXG5saXN0YS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZSk7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgZGIuY29sbGVjdGlvbihcImRlZmF1bHQtbGlzdFwiKVxuICAgICAgLmRvYyhpZClcbiAgICAgIC5kZWxldGUoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW0gZGVsZXRlZFwiKTtcbiAgICAgIH0pO1xuICB9XG59KTtcblxuY29uc3QgYWRkZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaCBpbnB1dFwiKTtcbmNvbnN0IGdlbmVyYXRldGVtcGxhdGUgPSAodG9kbykgPT4ge1xuICBjb25zdCBodG1sID0gYFxuPGxpdCBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG48c3Bhbj4ke3RvZG99PC9zcGFuPlxuPGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGRlbGV0ZVwiPjwvaT5cbjwvbGk+YDtcbiAgbGlzdC5pbm5lckhUTUwgKz0gaHRtbDtcbn07XG5cbi8vIGFkZGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbi8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyBjb25zdCB0b2RvID0gYWRkZm9ybS5hZGQudmFsdWUudHJpbSgpO1xuLy8gY29uc29sZS5sb2codG9kbyk7XG4vLyBpZiAodG9kby5sZW5ndGgpIHtcbi8vIGdlbmVyYXRldGVtcGxhdGUodG9kbyk7XG4vLyBhZGRmb3JtLnJlc2V0KCk7XG4vLyB9XG4vLyB9KTtcblxuLy8gbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4vLyBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZVwiKSkge1xuLy8gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4vLyB9XG4vLyB9KTtcblxuY29uc3QgZmlsdGVydGhldG9kb2xpc3QgPSAodGVybSkgPT4ge1xuICBBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4pXG4gICAgLmZpbHRlcigoZWFjaGxpdGFnKSA9PiAhZWFjaGxpdGFnLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybSkpXG4gICAgLmZvckVhY2goKGVhY2hsaXRhZykgPT4gZWFjaGxpdGFnLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJlZFwiKSk7XG4gIEFycmF5LmZyb20obGlzdC5jaGlsZHJlbilcbiAgICAuZmlsdGVyKChlYWNobGl0YWcpID0+IGVhY2hsaXRhZy50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0pKVxuICAgIC5mb3JFYWNoKChlYWNobGl0YWcpID0+IGVhY2hsaXRhZy5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyZWRcIikpO1xufTtcblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiB7XG4gIGNvbnN0IHRlcm0gPSBzZWFyY2gudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIGZpbHRlcnRoZXRvZG9saXN0KHRlcm0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9