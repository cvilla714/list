import formatDistanceToNow from "date-fns/formatDistanceToNow";

const mainform = document.querySelector(".ControlInput1");
const inputone = document.querySelector("#ControlInputone");
const textarea = document.querySelector("#ControlTextareaone");
const date = document.querySelector("#thedate");
const selection = document.querySelector(".form-select");
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
  const titles = document.createElement("li");
  titles.className = "list-group-item d-flex justify-content-between align-items-center";

  titles.textContent = inputone.value;
  const can = document.createElement("i");
  can.className = "far fa-trash-alt delete";

  const maintablerow = document.createElement("tr");
  const tabletitle = document.createElement("td");
  tabletitle.textContent = inputone.value;

  const tabledescription = document.createElement("td");
  tabledescription.textContent = textarea.value;

  const tabledate = document.createElement("td");
  tabledate.textContent = date.value;
  const gettime = formatDistanceToNow(new Date(tabledate.textContent), { addSuffix: true });

  const tableselection = document.createElement("td");
  tableselection.textContent = selection.value;

  const editbutton = document.createElement("button");
  editbutton.innerHTML = `
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
  <i class="fas fa-edit"></i>
  </button>
  <!-- Modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    `;

  maintablerow.append(tabletitle, tabledescription, gettime, tableselection, editbutton);
  tome.append(maintablerow);

  mainform.reset();
  document.querySelector(".cierre").click();
};
function addlist() {
  mainform.removeEventListener("submit", addListListener);
  mainform.addEventListener("submit", addListListener);
}
