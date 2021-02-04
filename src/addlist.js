const mainform = document.querySelector(".ControlInput1");
const inputone = document.querySelector("#ControlInputone");
const textarea = document.querySelector("#ControlTextareaone");
const date = document.querySelector("#thedate");
const selection = document.querySelector(".form-select");

mainform.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputone.value);
  console.log(textarea.value);
  console.log(date.value);
});
