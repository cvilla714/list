/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const lista = document.querySelector("ul");
const form = document.querySelector(".add");
const additem = (item, id) => {
  let time = item.created_at.toDate();
  let html = `
  <li data-id="${id}">
  <div>${item.title}</div>
  <div>${time}</div>
  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixHQUFHO0FBQ3BCLFNBQVMsV0FBVztBQUNwQixTQUFTLEtBQUs7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsaXN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcbmNvbnN0IGFkZGl0ZW0gPSAoaXRlbSwgaWQpID0+IHtcbiAgbGV0IHRpbWUgPSBpdGVtLmNyZWF0ZWRfYXQudG9EYXRlKCk7XG4gIGxldCBodG1sID0gYFxuICA8bGkgZGF0YS1pZD1cIiR7aWR9XCI+XG4gIDxkaXY+JHtpdGVtLnRpdGxlfTwvZGl2PlxuICA8ZGl2PiR7dGltZX08L2Rpdj5cbiAgXG4gIDxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBkZWxldGVcIj48L2k+XG4gIDwvbGk+XG4gIGA7XG4gIC8vIGNvbnNvbGUubG9nKGh0bWwpO1xuICBsaXN0YS5pbm5lckhUTUwgKz0gaHRtbDtcbn07XG5cbi8vZ2V0IGRvY3VtZW50c1xuLy8gZGIuY29sbGVjdGlvbihcImRlZmF1bHQtbGlzdFwiKVxuLy8gLmdldCgpXG4vLyAudGhlbigoc25hcHNob3QpID0+IHtcbi8vIHNuYXBzaG90LmRvY3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuLy8gY29uc29sZS5sb2coaXRlbS5pZCk7XG4vLyBjb25zb2xlLmxvZyhpdGVtLmRhdGEoKSk7XG4vL1xuLy8gYWRkaXRlbShpdGVtLmRhdGEoKSwgaXRlbS5pZCk7XG4vLyB9KTtcbi8vIH0pXG4vLyAuY2F0Y2goKGVycikgPT4ge1xuLy8gY29uc29sZS5sb2coZXJyKTtcbi8vIH0pO1xuXG4vL3JlYWwgdGltZSBldmVudCBsaXN0bmVycyB0byB0aGUgZGF0YWJzZVxuLy90byBhZGQgYW5kIGRlbGV0ZSBlbGVtZW50cyBmcm9tIHRoZSB3ZWJicm93c2VyXG5kYi5jb2xsZWN0aW9uKFwiZGVmYXVsdC1saXN0XCIpLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gIHNuYXBzaG90LmRvY0NoYW5nZXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhjaGFuZ2UpO1xuICAgIGNvbnN0IGRvYyA9IGNoYW5nZS5kb2M7XG4gICAgLy8gY29uc29sZS5sb2coZG9jKTtcbiAgICBpZiAoY2hhbmdlLnR5cGUgPT09IFwiYWRkZWRcIikge1xuICAgICAgYWRkaXRlbShkb2MuZGF0YSgpLCBkb2MuaWQpO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnR5cGUgPT09IFwicmVtb3ZlZFwiKSB7XG4gICAgICBkZWxldGVpdGVtKGRvYy5pZCk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vL2RlbGV0ZSBkb2N1bWVudFxuY29uc3QgZGVsZXRlaXRlbSA9IChpZCkgPT4ge1xuICBjb25zdCB0b3RhbGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuICB0b3RhbGl0ZW1zLmZvckVhY2goKGl0bSkgPT4ge1xuICAgIGlmIChpdG0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSA9PT0gaWQpIHtcbiAgICAgIGl0bS5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy9hZGQgZG9jdW1lbnRzIHRvIHRoZSBkYXRhYmFzZVxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCByZWNpcGUgPSB7XG4gICAgdGl0bGU6IGZvcm0ucmVjaXBlLnZhbHVlLFxuICAgIGNyZWF0ZWRfYXQ6IGZpcmViYXNlLmZpcmVzdG9yZS5UaW1lc3RhbXAuZnJvbURhdGUobm93KSxcbiAgfTtcbiAgZGIuY29sbGVjdGlvbihcImRlZmF1bHQtbGlzdFwiKVxuICAgIC5hZGQocmVjaXBlKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaXRlbSBhZGRlZFwiKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xufSk7XG5cbi8vZGVsZXRpbmcgZGF0YSBmcm9tIHRoZSBkYXRhYmFzZVxubGlzdGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUpO1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlXCIpKSB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIGRiLmNvbGxlY3Rpb24oXCJkZWZhdWx0LWxpc3RcIilcbiAgICAgIC5kb2MoaWQpXG4gICAgICAuZGVsZXRlKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGVtIGRlbGV0ZWRcIik7XG4gICAgICB9KTtcbiAgfVxufSk7XG5cbmNvbnN0IGFkZGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2ggaW5wdXRcIik7XG5jb25zdCBnZW5lcmF0ZXRlbXBsYXRlID0gKHRvZG8pID0+IHtcbiAgY29uc3QgaHRtbCA9IGBcbjxsaXQgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuPHNwYW4+JHt0b2RvfTwvc3Bhbj5cbjxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBkZWxldGVcIj48L2k+XG48L2xpPmA7XG4gIGxpc3QuaW5uZXJIVE1MICs9IGh0bWw7XG59O1xuXG4vLyBhZGRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4vLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gY29uc3QgdG9kbyA9IGFkZGZvcm0uYWRkLnZhbHVlLnRyaW0oKTtcbi8vIGNvbnNvbGUubG9nKHRvZG8pO1xuLy8gaWYgKHRvZG8ubGVuZ3RoKSB7XG4vLyBnZW5lcmF0ZXRlbXBsYXRlKHRvZG8pO1xuLy8gYWRkZm9ybS5yZXNldCgpO1xuLy8gfVxuLy8gfSk7XG5cbi8vIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuLy8gaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikpIHtcbi8vIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuLy8gfVxuLy8gfSk7XG5cbmNvbnN0IGZpbHRlcnRoZXRvZG9saXN0ID0gKHRlcm0pID0+IHtcbiAgQXJyYXkuZnJvbShsaXN0LmNoaWxkcmVuKVxuICAgIC5maWx0ZXIoKGVhY2hsaXRhZykgPT4gIWVhY2hsaXRhZy50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0pKVxuICAgIC5mb3JFYWNoKChlYWNobGl0YWcpID0+IGVhY2hsaXRhZy5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyZWRcIikpO1xuICBBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4pXG4gICAgLmZpbHRlcigoZWFjaGxpdGFnKSA9PiBlYWNobGl0YWcudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtKSlcbiAgICAuZm9yRWFjaCgoZWFjaGxpdGFnKSA9PiBlYWNobGl0YWcuY2xhc3NMaXN0LnJlbW92ZShcImZpbHRlcmVkXCIpKTtcbn07XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xuICBjb25zdCB0ZXJtID0gc2VhcmNoLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICBmaWx0ZXJ0aGV0b2RvbGlzdCh0ZXJtKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==