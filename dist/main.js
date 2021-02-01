/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const addform = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const generatetemplate = (todo) => {
  const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        	<span>${todo}</span>
        	<i class="far fa-trash-alt delete"></i>
        </li>`;
  list.innerHTML += html;
};

addform.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = addform.add.value.trim();
  console.log(todo);
  if (todo.length) {
    generatetemplate(todo);
    addform.reset();
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEtBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaCBpbnB1dFwiKTtcbmNvbnN0IGdlbmVyYXRldGVtcGxhdGUgPSAodG9kbykgPT4ge1xuICBjb25zdCBodG1sID0gYFxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICBcdDxzcGFuPiR7dG9kb308L3NwYW4+XG4gICAgICAgIFx0PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGRlbGV0ZVwiPjwvaT5cbiAgICAgICAgPC9saT5gO1xuICBsaXN0LmlubmVySFRNTCArPSBodG1sO1xufTtcblxuYWRkZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0b2RvID0gYWRkZm9ybS5hZGQudmFsdWUudHJpbSgpO1xuICBjb25zb2xlLmxvZyh0b2RvKTtcbiAgaWYgKHRvZG8ubGVuZ3RoKSB7XG4gICAgZ2VuZXJhdGV0ZW1wbGF0ZSh0b2RvKTtcbiAgICBhZGRmb3JtLnJlc2V0KCk7XG4gIH1cbn0pO1xuXG5saXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikpIHtcbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufSk7XG5cbmNvbnN0IGZpbHRlcnRoZXRvZG9saXN0ID0gKHRlcm0pID0+IHtcbiAgQXJyYXkuZnJvbShsaXN0LmNoaWxkcmVuKVxuICAgIC5maWx0ZXIoKGVhY2hsaXRhZykgPT4gIWVhY2hsaXRhZy50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0pKVxuICAgIC5mb3JFYWNoKChlYWNobGl0YWcpID0+IGVhY2hsaXRhZy5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyZWRcIikpO1xuICBBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4pXG4gICAgLmZpbHRlcigoZWFjaGxpdGFnKSA9PiBlYWNobGl0YWcudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtKSlcbiAgICAuZm9yRWFjaCgoZWFjaGxpdGFnKSA9PiBlYWNobGl0YWcuY2xhc3NMaXN0LnJlbW92ZShcImZpbHRlcmVkXCIpKTtcbn07XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xuICBjb25zdCB0ZXJtID0gc2VhcmNoLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICBmaWx0ZXJ0aGV0b2RvbGlzdCh0ZXJtKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==