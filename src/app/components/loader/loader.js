import pubSub from '../../pubSub';

pubSub.subscribe('News/loading', isLoading => {
  const loaderElement = document.querySelector('.loader');
  const show = () => loaderElement.classList.add('-shown');
  const hide = () => loaderElement.classList.remove('-shown');

  isLoading ? show() : hide();
});
