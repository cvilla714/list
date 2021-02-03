const project = document.querySelector(".btn-success");

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
});
