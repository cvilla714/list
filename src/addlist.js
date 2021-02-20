import formatDistanceToNow from "date-fns/formatDistanceToNow";

const mainform = document.querySelector(".ControlInput1");
const inputone = document.querySelector("#ControlInputone");
const textarea = document.querySelector("#ControlTextareaone");
const date = document.querySelector("#thedate");
const selection = document.querySelector(".form-select");
const place = document.querySelector(".projectos");
// const info = document.querySelector(`table${alltodos}`);
let id = null;
let alltodos = 1;
place.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e);
  if (e.target.tagName === "BUTTON") {
    id = e.target.parentElement.getAttribute("data-id");
    addlist(e, id);
  }
});
const addListListener = (e) => {
  e.preventDefault();
  console.log(e);
  const tome = document.querySelector(`.${id}`);
  const titles = document.createElement("li");
  titles.className = "list-group-item d-flex justify-content-between align-items-center";

  titles.textContent = inputone.value;
  const can = document.createElement("i");
  can.className = "far fa-trash-alt delete";
  // can.className.add(`${alltodos}`)

  const maintablerow = document.createElement("tr");
  const tabletitle = document.createElement("td");
  tabletitle.textContent = inputone.value;
  maintablerow.classList.add(`table${alltodos}`);
  // tabletitle.classList.add(`table${alltodos}`);

  const tabledescription = document.createElement("td");
  tabledescription.textContent = textarea.value;
  // tabledescription.classList.add(`table${alltodos}`);

  const tabledate = document.createElement("td");
  tabledate.textContent = date.value;
  // tabledate.classList.add(`table${alltodos}`);
  const gettime = formatDistanceToNow(new Date(tabledate.textContent), { addSuffix: true });

  const tableselection = document.createElement("td");
  tableselection.textContent = selection.value;

  const editbutton = document.createElement("button");
  editbutton.innerHTML = `
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary editbtn table${alltodos}" data-bs-toggle="modal" data-bs-target="#editModal">
  <i class="fas fa-edit"></i>
  </button>
  <!-- Modal -->
  <div class="modal fade" id="editmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Edit Todo List</h5>
        <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form class="editControlInput1 text-center my-4">
      <div class="modal-body">
      <div class="row">
      <div>
        <div class="">
         
            <div class='row'>
              <label class="text-primary">Add the title </label>
              <input class="editform-control m-auto" type="text" name="add" id="update_title" placeholder=""/>
              
          
              <div class="mb-3">
                <label for="ControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" id="update_description" rows="3"></textarea>
               </div>
              </div>
            
              <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label for="ControlInput2" class="form-label">Due Date</label>
                  <input type="date" class="form-control" id="update_date" placeholder="">
                  
                </div>
                
                <div class="mb-3">
                  <label for="ControlTextarea3" class="form-label">Priority</label>
                  <select class="form-select" aria-label="Default id="update_priority" select example">
                    <option selected></option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                    
                  </select>
                </div>
              </div>
              
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary out" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary include">Save changes</button>
              </div>
            </div>

        </div>
      </div>
      </form>
    </div>
      </div>
  </div>
</div>

    `;
  alltodos++;

  maintablerow.append(tabletitle, tabledescription, gettime, tableselection, editbutton);
  tome.append(maintablerow);
  console.log(tome);
  mainform.reset();
  document.querySelector(".cierre").click();
  editInfo();
};
function addlist() {
  mainform.removeEventListener("submit", addListListener);
  mainform.addEventListener("submit", addListListener);
}

// function editInfo() {
// let edit = document.querySelector(`.table${alltodos}`);
// edit.addEventListener("click", (e) => {
// console.log(e.target);
// });
// console.log(edit);
// }

function editInfo() {
  const edit = document.querySelectorAll(".editbtn");
  edit.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e.target);
    });
  });
  console.log(edit);
}
