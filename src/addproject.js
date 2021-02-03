const project = document.querySelector(".btn-success");

project.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList.contains("btn-success")) {
    console.log("you are here");
  }
});
