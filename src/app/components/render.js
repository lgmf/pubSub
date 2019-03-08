const render = (template, selector, afterRendered) => {
  const node = document.querySelector(selector);
  if (!node) return;

  node.innerHTML = template;

  if (!!afterRendered && typeof afterRendered === 'function') {
    afterRendered();
  }
};

export default render;
