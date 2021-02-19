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
      <div class="row">
      <div>
        <div class="">
          <form class="editControlInput1 text-center my-4">
            <div class='row'>
              <label class="text-primary">Add the title </label>
              <input class="editform-control m-auto" type="text" name="add" id="editControlInputone" />${inputone.value}
              <div class="mb-3">
                <label for="ControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" id="ControlTextareaone" rows="3">${textarea.value}</textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label for="ControlInput2" class="form-label">Due Date</label>
                  <input type="date" class="form-control" id="thedate" paceholder="choose a date">${date.value}
                </div>
                <div class="mb-3">
                  <label for="ControlTextarea3" class="form-label">Priority</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Chose the priority for the event</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                    ${selection.value}
                  </select>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary out" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary include">Save changes</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
  </div>
</div>

    `;

  maintablerow.append(tabletitle, tabledescription, gettime, tableselection, editbutton);
  tome.append(maintablerow);
  console.log(tome);
  mainform.reset();
  document.querySelector(".cierre").click();
};
function addlist() {
  mainform.removeEventListener("submit", addListListener);
  mainform.addEventListener("submit", addListListener);
}
