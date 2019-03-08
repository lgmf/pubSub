const render = (template, selector) => {
  var node = document.querySelector(selector);
  if (!node) return;
  node.innerHTML = template;
};

export default render;
