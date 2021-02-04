import { list } from "./index.js";

const mainform = document.querySelector(".ControlInput1");
const inputone = document.querySelector("#ControlInputone");
const textarea = document.querySelector("#ControlTextareaone");
const date = document.querySelector("#thedate");
const selection = document.querySelector(".form-select");
const info = document.querySelector(".info");
// const maintable = document.querySelector(".tableitem")
const tablebody = document.querySelector("tbody");

mainform.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputone.value);
  const titles = document.createElement("li");
  titles.textContent = inputone.value;
  titles.style.color = "red";
  titles.setAttribute("style", "list-style: none;");

  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.className = "pl-2";

  console.log(textarea.value);
  console.log(date.value);
  console.log(selection.value);

  list.appendChild(titles);
  titles.appendChild(check);

  const maintablerow = document.createElement("tr");

  const tabletitle = document.createElement("td");
  tabletitle.textContent = inputone.value;
  tabletitle.style.color = "red";
  tabletitle.setAttribute("style", "list-style: none;");

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
  console.log(maintablerow);
  tablebody.append(maintablerow);

  document.querySelector(".btn-close").click();
});
