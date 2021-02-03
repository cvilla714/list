const project = document.querySelector(".btn-success");

project.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList.contains("btn-success")) {
    console.log("you are here");
  }
});

const data = document.querySelector(".addproject");

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

const close = document.querySelector(".btn-close");
close.addEventListener("click", (e) => {
  console.log(e);
});
