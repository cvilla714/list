const project = document.querySelector(".btn-success");
const place = document.querySelector(".projectos");
const projectform = document.querySelector(".addproject");

export { place };
// get the correct content from the button
project.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList.contains("btn-success")) {
    console.log("you are here");
  }
});

const data = document.querySelector(".addproject");

const including = document.querySelector(".include");
including.addEventListener("click", (e) => {
  // console.log(e);
  document.querySelector(".btn-close").click();
});

const addtheproject = (item, id) => {
  // const when = dateFns.distanceInWordsToNow(item.created_at.toDate(), { addSuffix: true });
  // let time = item.created_at.toDate();
  const html = `
  <li data-id="${id}" class="list-group-item d-flex justify-content-between align-items-center">
  <div>${item.title}</div>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add Your Event
  </button>
  <i class="far fa-trash-alt delete"></i>
  </li>
  <div class="">
  <table class="table bg-light">
  <thead>
    <tr>
      <th scope="col">Title Name</th>
      <th scope="col">Description</th>
      <th scope="col">Date</th>
      <th scope="col">Priority</th>
    </tr>
  </thead>
  <tbody class="${id}">
  </tbody>
</table>
  </div>
  `;
  // console.log(html);
  // lista.innerHTML += html;
  place.innerHTML += html;
};

// real time event listners to the databse
// to add and delete elements from the webbrowser
db.collection("default-projects").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    // console.log(change);
    const { doc } = change;
    // console.log(doc);
    if (change.type === "added") {
      addtheproject(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteitem(doc.id);
    }
  });
});

// delete document from the browser
const deleteitem = (id) => {
  const totalitems = document.querySelectorAll("li");
  totalitems.forEach((itm) => {
    if (itm.getAttribute("data-id") === id) {
      itm.remove();
    }
  });
};

// add documents to the database
projectform.addEventListener("submit", (e) => {
  e.preventDefault();

  const now = new Date();
  const addtheproject = {
    title: projectform.addtheproject.value.trim(),
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };
  if (addtheproject.title.length == "") {
    console.log("no projects added");
  } else {
    db.collection("default-projects")
      .add(addtheproject)
      .then(() => {
        console.log("item added");
      })
      .catch((err) => {
        console.log(err);
      });
    projectform.reset();
    document.querySelector(".btn-close").click();
  }
});

// deleting data from the database
place.addEventListener("click", (e) => {
  console.log(e);

  if (e.target.classList.contains("delete")) {
    const id = e.target.parentElement.getAttribute("data-id");

    console.log(id);
    db.collection("default-projects")
      .doc(id)
      .delete()
      .then(() => {
        console.log("item deleted");
      });
  }
});
