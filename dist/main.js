/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const lista = document.querySelector("ul");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxrQkFBa0I7QUFDekY7QUFDQTtBQUNBLGlCQUFpQixHQUFHO0FBQ3BCLFNBQVMsV0FBVztBQUNwQixTQUFTLEtBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlzdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoIGlucHV0XCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xuY29uc3QgYWRkaXRlbSA9IChpdGVtLCBpZCkgPT4ge1xuICBjb25zdCB3aGVuID0gZGF0ZUZucy5kaXN0YW5jZUluV29yZHNUb05vdyhpdGVtLmNyZWF0ZWRfYXQudG9EYXRlKCksIHsgYWRkU3VmZml4OiB0cnVlIH0pO1xuICAvLyBsZXQgdGltZSA9IGl0ZW0uY3JlYXRlZF9hdC50b0RhdGUoKTtcbiAgbGV0IGh0bWwgPSBgXG4gIDxsaSBkYXRhLWlkPVwiJHtpZH1cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gIDxkaXY+JHtpdGVtLnRpdGxlfTwvZGl2PlxuICA8ZGl2PiR7d2hlbn08L2Rpdj4gIFxuICA8aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgZGVsZXRlXCI+PC9pPlxuICA8L2xpPlxuICBgO1xuICAvLyBjb25zb2xlLmxvZyhodG1sKTtcbiAgbGlzdGEuaW5uZXJIVE1MICs9IGh0bWw7XG59O1xuXG4vL2dldCBkb2N1bWVudHNcbi8vIGRiLmNvbGxlY3Rpb24oXCJkZWZhdWx0LWxpc3RcIilcbi8vIC5nZXQoKVxuLy8gLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4vLyBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGl0ZW0pID0+IHtcbi8vIGNvbnNvbGUubG9nKGl0ZW0uaWQpO1xuLy8gY29uc29sZS5sb2coaXRlbS5kYXRhKCkpO1xuLy9cbi8vIGFkZGl0ZW0oaXRlbS5kYXRhKCksIGl0ZW0uaWQpO1xuLy8gfSk7XG4vLyB9KVxuLy8gLmNhdGNoKChlcnIpID0+IHtcbi8vIGNvbnNvbGUubG9nKGVycik7XG4vLyB9KTtcblxuLy9yZWFsIHRpbWUgZXZlbnQgbGlzdG5lcnMgdG8gdGhlIGRhdGFic2Vcbi8vdG8gYWRkIGFuZCBkZWxldGUgZWxlbWVudHMgZnJvbSB0aGUgd2ViYnJvd3NlclxuZGIuY29sbGVjdGlvbihcImRlZmF1bHQtbGlzdFwiKS5vblNuYXBzaG90KChzbmFwc2hvdCkgPT4ge1xuICBzbmFwc2hvdC5kb2NDaGFuZ2VzKCkuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coY2hhbmdlKTtcbiAgICBjb25zdCBkb2MgPSBjaGFuZ2UuZG9jO1xuICAgIC8vIGNvbnNvbGUubG9nKGRvYyk7XG4gICAgaWYgKGNoYW5nZS50eXBlID09PSBcImFkZGVkXCIpIHtcbiAgICAgIGFkZGl0ZW0oZG9jLmRhdGEoKSwgZG9jLmlkKTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS50eXBlID09PSBcInJlbW92ZWRcIikge1xuICAgICAgZGVsZXRlaXRlbShkb2MuaWQpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLy9kZWxldGUgZG9jdW1lbnRcbmNvbnN0IGRlbGV0ZWl0ZW0gPSAoaWQpID0+IHtcbiAgY29uc3QgdG90YWxpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcbiAgdG90YWxpdGVtcy5mb3JFYWNoKChpdG0pID0+IHtcbiAgICBpZiAoaXRtLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgPT09IGlkKSB7XG4gICAgICBpdG0ucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vYWRkIGRvY3VtZW50cyB0byB0aGUgZGF0YWJhc2VcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgcmVjaXBlID0ge1xuICAgIHRpdGxlOiBmb3JtLnJlY2lwZS52YWx1ZSxcbiAgICBjcmVhdGVkX2F0OiBmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLmZyb21EYXRlKG5vdyksXG4gIH07XG4gIGRiLmNvbGxlY3Rpb24oXCJkZWZhdWx0LWxpc3RcIilcbiAgICAuYWRkKHJlY2lwZSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIml0ZW0gYWRkZWRcIik7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbiAgZm9ybS5yZXNldCgpO1xufSk7XG5cbi8vZGVsZXRpbmcgZGF0YSBmcm9tIHRoZSBkYXRhYmFzZVxubGlzdGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUpO1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlXCIpKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIGRiLmNvbGxlY3Rpb24oXCJkZWZhdWx0LWxpc3RcIilcbiAgICAgIC5kb2MoaWQpXG4gICAgICAuZGVsZXRlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGVtIGRlbGV0ZWRcIik7XG4gICAgICB9KTtcbiAgfVxufSk7XG5cbi8vIGFkZGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbi8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyBjb25zdCB0b2RvID0gYWRkZm9ybS5hZGQudmFsdWUudHJpbSgpO1xuLy8gY29uc29sZS5sb2codG9kbyk7XG4vLyBpZiAodG9kby5sZW5ndGgpIHtcbi8vIGdlbmVyYXRldGVtcGxhdGUodG9kbyk7XG4vLyBhZGRmb3JtLnJlc2V0KCk7XG4vLyB9XG4vLyB9KTtcblxuLy8gbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4vLyBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZVwiKSkge1xuLy8gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4vLyB9XG4vLyB9KTtcblxuY29uc3QgZmlsdGVydGhldG9kb2xpc3QgPSAodGVybSkgPT4ge1xuICBBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4pXG4gICAgLmZpbHRlcigoZWFjaGxpdGFnKSA9PiAhZWFjaGxpdGFnLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybSkpXG4gICAgLmZvckVhY2goKGVhY2hsaXRhZykgPT4gZWFjaGxpdGFnLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJlZFwiKSk7XG4gIEFycmF5LmZyb20obGlzdC5jaGlsZHJlbilcbiAgICAuZmlsdGVyKChlYWNobGl0YWcpID0+IGVhY2hsaXRhZy50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0pKVxuICAgIC5mb3JFYWNoKChlYWNobGl0YWcpID0+IGVhY2hsaXRhZy5jbGFzc0xpc3QucmVtb3ZlKFwiZmlsdGVyZWRcIikpO1xufTtcblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoKSA9PiB7XG4gIGNvbnN0IHRlcm0gPSBzZWFyY2gudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIGZpbHRlcnRoZXRvZG9saXN0KHRlcm0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9