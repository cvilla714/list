/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const lista = document.querySelector("ul");
const form = document.querySelector(".add");
const additem = (item) => {
  let time = item.created_at.toDate();
  let html = `
  <li>
  <div>${item.title}</div>
  <div>${time}</div>
  <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  // console.log(html);
  lista.innerHTML += html;
};

db.collection("default-list")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((item) => {
      console.log(item.data());
      // console.log(item.data());
      additem(item.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });

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

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXO0FBQ3BCLFNBQVMsS0FBSztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBSztBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xuY29uc3QgYWRkaXRlbSA9IChpdGVtKSA9PiB7XG4gIGxldCB0aW1lID0gaXRlbS5jcmVhdGVkX2F0LnRvRGF0ZSgpO1xuICBsZXQgaHRtbCA9IGBcbiAgPGxpPlxuICA8ZGl2PiR7aXRlbS50aXRsZX08L2Rpdj5cbiAgPGRpdj4ke3RpbWV9PC9kaXY+XG4gIDxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdCBkZWxldGVcIj48L2k+XG4gIDwvbGk+XG4gIGA7XG4gIC8vIGNvbnNvbGUubG9nKGh0bWwpO1xuICBsaXN0YS5pbm5lckhUTUwgKz0gaHRtbDtcbn07XG5cbmRiLmNvbGxlY3Rpb24oXCJkZWZhdWx0LWxpc3RcIilcbiAgLmdldCgpXG4gIC50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgIHNuYXBzaG90LmRvY3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coaXRlbS5kYXRhKCkpO1xuICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5kYXRhKCkpO1xuICAgICAgYWRkaXRlbShpdGVtLmRhdGEoKSk7XG4gICAgfSk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgcmVjaXBlID0ge1xuICAgIHRpdGxlOiBmb3JtLnJlY2lwZS52YWx1ZSxcbiAgICBjcmVhdGVkX2F0OiBmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLmZyb21EYXRlKG5vdyksXG4gIH07XG4gIGRiLmNvbGxlY3Rpb24oXCJkZWZhdWx0LWxpc3RcIilcbiAgICAuYWRkKHJlY2lwZSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIml0ZW0gYWRkZWRcIik7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbn0pO1xuXG5jb25zdCBhZGRmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIik7XG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoIGlucHV0XCIpO1xuY29uc3QgZ2VuZXJhdGV0ZW1wbGF0ZSA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGh0bWwgPSBgXG48bGl0IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbjxzcGFuPiR7dG9kb308L3NwYW4+XG48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHQgZGVsZXRlXCI+PC9pPlxuPC9saT5gO1xuICBsaXN0LmlubmVySFRNTCArPSBodG1sO1xufTtcblxuLy8gYWRkZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vIGNvbnN0IHRvZG8gPSBhZGRmb3JtLmFkZC52YWx1ZS50cmltKCk7XG4vLyBjb25zb2xlLmxvZyh0b2RvKTtcbi8vIGlmICh0b2RvLmxlbmd0aCkge1xuLy8gZ2VuZXJhdGV0ZW1wbGF0ZSh0b2RvKTtcbi8vIGFkZGZvcm0ucmVzZXQoKTtcbi8vIH1cbi8vIH0pO1xuXG5saXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikpIHtcbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufSk7XG5cbmNvbnN0IGZpbHRlcnRoZXRvZG9saXN0ID0gKHRlcm0pID0+IHtcbiAgQXJyYXkuZnJvbShsaXN0LmNoaWxkcmVuKVxuICAgIC5maWx0ZXIoKGVhY2hsaXRhZykgPT4gIWVhY2hsaXRhZy50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0pKVxuICAgIC5mb3JFYWNoKChlYWNobGl0YWcpID0+IGVhY2hsaXRhZy5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyZWRcIikpO1xuICBBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4pXG4gICAgLmZpbHRlcigoZWFjaGxpdGFnKSA9PiBlYWNobGl0YWcudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtKSlcbiAgICAuZm9yRWFjaCgoZWFjaGxpdGFnKSA9PiBlYWNobGl0YWcuY2xhc3NMaXN0LnJlbW92ZShcImZpbHRlcmVkXCIpKTtcbn07XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xuICBjb25zdCB0ZXJtID0gc2VhcmNoLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICBmaWx0ZXJ0aGV0b2RvbGlzdCh0ZXJtKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==