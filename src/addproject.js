const lista = document.querySelector(".projects");
const project = document.querySelector(".btn-success");
const place = document.querySelector(".addingproject");

//get the correct content from the button
project.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList.contains("btn-success")) {
    console.log("you are here");
  }
});

const data = document.querySelector(".addproject");

//adding the projects to the dom
//and getting the input values from the form
data.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  console.log(addtheproject.value);
  const place = document.querySelector(".addingproject");
  let glass = addtheproject.value;
  const mas = document.createElement("h2");
  mas.textContent = glass;
  place.append(mas);
  document.querySelector(".btn-close").click(); //this one automatically closes the modal
});

//get the button action to close
const close = document.querySelector(".btn-close");
close.addEventListener("click", (e) => {
  console.log(e);
});

const including = document.querySelector(".include");
including.addEventListener("click", (e) => {
  console.log(e);
  document.querySelector(".btn-close").click();
});

const addtheproject = (item, id) => {
  const when = dateFns.distanceInWordsToNow(item.created_at.toDate(), { addSuffix: true });
  // let time = item.created_at.toDate();
  let html = `
  <li data-id="${id}" class="list-group-item d-flex justify-content-between align-items-center">
  <div>${item.title}</div>
  
  <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  // console.log(html);
  // lista.innerHTML += html;
  place.innerHTML += html;
};

db.collection("default-projects")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((item) => {
      console.log(item.id);
      console.log(item.data());

      addtheproject(item.data(), item.id);
    });
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("default-projects").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    // console.log(change);
    const doc = change.doc;
    // console.log(doc);
    if (change.type === "added") {
      addtheproject(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteitem(doc.id);
    }
  });
});

//deleting data from the database
// lista.addEventListener("click", (e) => {
// console.log(e);
// if (e.target.classList.contains("delete")) {
// const id = e.target.parentElement.getAttribute("data-id");
// console.log(id);
// db.collection("default-projects")
// .doc(id)
// .delete()
// .then(() => {
// console.log("item deleted");
// });
// }
// });
