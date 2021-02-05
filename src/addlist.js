import { list } from "./index.js";
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
// const proej = document.querySelector(`[data-id="${id}"]`);

// const maintable = document.querySelector(".tableitem")
const tablebody = document.querySelector("tbody");
// const when = dateFns.distanceInWordsToNow(item.created_at.toDate(), { addSuffix: true });

place.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e);
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    console.log(id);
    const projecttable = document.createElement("section");
    projecttable.className = id;
    // projecttable.className = e.target.parentElement.getAttribute("data-id");

    console.log(projecttable);
    // return projecttable;

    mainform.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(inputone.value);

      const titles = document.createElement("li");
      titles.className = "list-group-item d-flex justify-content-between align-items-center";
      // const wrap = document.createElement("div");
      titles.textContent = inputone.value;
      const can = document.createElement("i");
      can.className = "far fa-trash-alt delete";
      // titles.style.color = "red";
      // titles.setAttribute("style", "list-style: none;");
      //
      const check = document.createElement("input");
      check.setAttribute("type", "checkbox");
      check.className = "pl-2";

      console.log(textarea.value);
      console.log(date.value);
      console.log(selection.value);

      // function submitform() {
      // document.getElementById("addthis").submit();
      // }

      // document.querySelector("#recipe").onchange((e) => {
      // console.log(e.target.value);
      // });
      forma.value = inputone.value;
      // dele.submit();

      // list.appendChild(titles);
      // titles.appendChild(can);

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
      // tablebody.append(maintablerow);
      projecttable.append(maintablerow);
      // place.append(projecttable);

      document.querySelector(".btn-close").click();
    });
  }
});
