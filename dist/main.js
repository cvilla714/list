/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "foo": () => (/* binding */ foo)
/* harmony export */ });
function foo() {
  $(function () {
    $("#datepicker").datepicker();
  });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/date.js");
// import "../dist/css/style.css";
// import "./style.scss";

(0,_date__WEBPACK_IMPORTED_MODULE_0__.foo)();
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
    console.log(change);
    const doc = change.doc;
    console.log(doc);
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUM2QjtBQUM3QiwwQ0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsa0JBQWtCO0FBQ3pGO0FBQ0E7QUFDQSxpQkFBaUIsR0FBRztBQUNwQixTQUFTLFdBQVc7QUFDcEIsU0FBUyxLQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7VUM3SEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZm9vKCkge1xuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiI2RhdGVwaWNrZXJcIikuZGF0ZXBpY2tlcigpO1xuICB9KTtcbn1cbiIsIi8vIGltcG9ydCBcIi4uL2Rpc3QvY3NzL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBmb28gfSBmcm9tIFwiLi9kYXRlXCI7XG5mb28oKTtcbmNvbnN0IGxpc3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaCBpbnB1dFwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcbmNvbnN0IGFkZGl0ZW0gPSAoaXRlbSwgaWQpID0+IHtcbiAgY29uc3Qgd2hlbiA9IGRhdGVGbnMuZGlzdGFuY2VJbldvcmRzVG9Ob3coaXRlbS5jcmVhdGVkX2F0LnRvRGF0ZSgpLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KTtcbiAgLy8gbGV0IHRpbWUgPSBpdGVtLmNyZWF0ZWRfYXQudG9EYXRlKCk7XG4gIGxldCBodG1sID0gYFxuICA8bGkgZGF0YS1pZD1cIiR7aWR9XCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICA8ZGl2PiR7aXRlbS50aXRsZX08L2Rpdj5cbiAgPGRpdj4ke3doZW59PC9kaXY+ICBcbiAgPGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0IGRlbGV0ZVwiPjwvaT5cbiAgPC9saT5cbiAgYDtcbiAgLy8gY29uc29sZS5sb2coaHRtbCk7XG4gIGxpc3RhLmlubmVySFRNTCArPSBodG1sO1xufTtcblxuLy9nZXQgZG9jdW1lbnRzXG4vLyBkYi5jb2xsZWN0aW9uKFwiZGVmYXVsdC1saXN0XCIpXG4vLyAuZ2V0KClcbi8vIC50aGVuKChzbmFwc2hvdCkgPT4ge1xuLy8gc25hcHNob3QuZG9jcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4vLyBjb25zb2xlLmxvZyhpdGVtLmlkKTtcbi8vIGNvbnNvbGUubG9nKGl0ZW0uZGF0YSgpKTtcbi8vXG4vLyBhZGRpdGVtKGl0ZW0uZGF0YSgpLCBpdGVtLmlkKTtcbi8vIH0pO1xuLy8gfSlcbi8vIC5jYXRjaCgoZXJyKSA9PiB7XG4vLyBjb25zb2xlLmxvZyhlcnIpO1xuLy8gfSk7XG5cbi8vcmVhbCB0aW1lIGV2ZW50IGxpc3RuZXJzIHRvIHRoZSBkYXRhYnNlXG4vL3RvIGFkZCBhbmQgZGVsZXRlIGVsZW1lbnRzIGZyb20gdGhlIHdlYmJyb3dzZXJcbmRiLmNvbGxlY3Rpb24oXCJkZWZhdWx0LWxpc3RcIikub25TbmFwc2hvdCgoc25hcHNob3QpID0+IHtcbiAgc25hcHNob3QuZG9jQ2hhbmdlcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNoYW5nZSk7XG4gICAgY29uc3QgZG9jID0gY2hhbmdlLmRvYztcbiAgICBjb25zb2xlLmxvZyhkb2MpO1xuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gXCJhZGRlZFwiKSB7XG4gICAgICBhZGRpdGVtKGRvYy5kYXRhKCksIGRvYy5pZCk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UudHlwZSA9PT0gXCJyZW1vdmVkXCIpIHtcbiAgICAgIGRlbGV0ZWl0ZW0oZG9jLmlkKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vZGVsZXRlIGRvY3VtZW50XG5jb25zdCBkZWxldGVpdGVtID0gKGlkKSA9PiB7XG4gIGNvbnN0IHRvdGFsaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XG4gIHRvdGFsaXRlbXMuZm9yRWFjaCgoaXRtKSA9PiB7XG4gICAgaWYgKGl0bS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpID09PSBpZCkge1xuICAgICAgaXRtLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vL2FkZCBkb2N1bWVudHMgdG8gdGhlIGRhdGFiYXNlXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHJlY2lwZSA9IHtcbiAgICB0aXRsZTogZm9ybS5yZWNpcGUudmFsdWUsXG4gICAgY3JlYXRlZF9hdDogZmlyZWJhc2UuZmlyZXN0b3JlLlRpbWVzdGFtcC5mcm9tRGF0ZShub3cpLFxuICB9O1xuICBkYi5jb2xsZWN0aW9uKFwiZGVmYXVsdC1saXN0XCIpXG4gICAgLmFkZChyZWNpcGUpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJpdGVtIGFkZGVkXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG4gIGZvcm0ucmVzZXQoKTtcbn0pO1xuXG4vL2RlbGV0aW5nIGRhdGEgZnJvbSB0aGUgZGF0YWJhc2Vcbmxpc3RhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhlKTtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZVwiKSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICBkYi5jb2xsZWN0aW9uKFwiZGVmYXVsdC1saXN0XCIpXG4gICAgICAuZG9jKGlkKVxuICAgICAgLmRlbGV0ZSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXRlbSBkZWxldGVkXCIpO1xuICAgICAgfSk7XG4gIH1cbn0pO1xuXG4vLyBhZGRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4vLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gY29uc3QgdG9kbyA9IGFkZGZvcm0uYWRkLnZhbHVlLnRyaW0oKTtcbi8vIGNvbnNvbGUubG9nKHRvZG8pO1xuLy8gaWYgKHRvZG8ubGVuZ3RoKSB7XG4vLyBnZW5lcmF0ZXRlbXBsYXRlKHRvZG8pO1xuLy8gYWRkZm9ybS5yZXNldCgpO1xuLy8gfVxuLy8gfSk7XG5cbi8vIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuLy8gaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikpIHtcbi8vIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuLy8gfVxuLy8gfSk7XG5cbmNvbnN0IGZpbHRlcnRoZXRvZG9saXN0ID0gKHRlcm0pID0+IHtcbiAgQXJyYXkuZnJvbShsaXN0LmNoaWxkcmVuKVxuICAgIC5maWx0ZXIoKGVhY2hsaXRhZykgPT4gIWVhY2hsaXRhZy50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0pKVxuICAgIC5mb3JFYWNoKChlYWNobGl0YWcpID0+IGVhY2hsaXRhZy5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyZWRcIikpO1xuICBBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4pXG4gICAgLmZpbHRlcigoZWFjaGxpdGFnKSA9PiBlYWNobGl0YWcudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtKSlcbiAgICAuZm9yRWFjaCgoZWFjaGxpdGFnKSA9PiBlYWNobGl0YWcuY2xhc3NMaXN0LnJlbW92ZShcImZpbHRlcmVkXCIpKTtcbn07XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCkgPT4ge1xuICBjb25zdCB0ZXJtID0gc2VhcmNoLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICBmaWx0ZXJ0aGV0b2RvbGlzdCh0ZXJtKTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=