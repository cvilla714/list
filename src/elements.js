const newElement = (tag, text, classes, id) => {
  const element = document.createElement(tag);
  if (text) element.innerText = text;
  if (classes) {
    classes.forEach((cl) => {
      element.classList.add(cl);
    });
  }
  if (id) element.id = id;
  return element;
};

const div = newElement("div", undefined, ["moon"]);
console.log(div);
