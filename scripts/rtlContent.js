function setRTLAttribute(element) {
  element.setAttribute("dir", "rtl");
  const children = element.children;
  for (let i = 0; i < children.length; i++) {
    setRTLAttribute(children[i]);
  }
}

const elements = document.querySelectorAll(".update-components-text");
elements.forEach((element) => {
  setRTLAttribute(element);
});
