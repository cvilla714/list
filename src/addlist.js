import { list } from "./index.js";
import { addproject } from "./addproject";
const dele = document.querySelector(".add");
const forma = document.querySelector("#recipe");
const mainform = document.querySelector(".ControlInput1");
const inputone = document.querySelector("#ControlInputone");
const textarea = document.querySelector("#ControlTextareaone");
const date = document.querySelector("#thedate");
const selection = document.querySelector(".form-select");
const info = document.querySelector(".info");
const listado = document.querySelector(".eventlist");
const place = document.querySelector(".projectos");
let id = null;

place.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "BUTTON") {
    id = e.target.parentElement.getAttribute("data-id");
    addlist(e, id);
  }
});
const addListListener = (e) => {
  e.preventDefault();
  const tome = document.querySelector(`.${id}`);
  console.log(tome);
  const titles = document.createElement("li");
  titles.className = "list-group-item d-flex justify-content-between align-items-center";

  titles.textContent = inputone.value;
  const can = document.createElement("i");
  can.className = "far fa-trash-alt delete";
  const maintablerow = document.createElement("tr");
  const tabletitle = document.createElement("td");
  tabletitle.textContent = inputone.value;
  tabletitle.style.color = "red";
  // tabletitle.setAttribute("style","list-style: none;");​
  const tabledescription = document.createElement("td");
  tabledescription.textContent = textarea.value;
  tabledescription.style.color = "red";
  tabledescription.setAttribute("style", "list-style: none;");
  const tabledate = document.createElement("td");
  tabledate.textContent = date.value;
  tabledate.style.color = "red";
  tabledate.setAttribute("style", "list-style: none;");
  const tableselection = document.createElement("td");
  tableselection.textContent = selection.value;
  tableselection.style.color = "red";
  tableselection.setAttribute("style", "list-style: none;");
  maintablerow.append(tabletitle, tabledescription, tabledate, tableselection);
  //console.log(maintablerow);
  //console.log(tome);
  tome.append(maintablerow);
  //console.log(tome);
  mainform.reset();
  // proej.append(projecttable);
  document.querySelector(".cierre").click();
};
function addlist() {
  mainform.removeEventListener("submit", addListListener);
  mainform.addEventListener("submit", addListListener);
}
