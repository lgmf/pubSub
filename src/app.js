import './styles/index.scss';

import newsService from './app/services/newsService';
import pubSub from './app/pubSub';

import './app/input/input';

pubSub.subscribe('Input/value', query => newsService.getNews(query));

pubSub.subscribe('News/data', news => {
  const list = document.querySelector('.list');
  list.innerHTML = '';

  for (let { webTitle, webUrl } of news) {
    const link = createLink(webUrl, webTitle, '_blank');
    link.classList.add('item');
    list.appendChild(link);
  }
});

const createLink = (url, label, target = "_self") => {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.textContent = label;
  anchor.target = target;
  return anchor;
}

pubSub.subscribe('News/loading', loading => {
  const clearList = () => document.querySelector('.list').innerHTML = '';
  const showLoader = () => document.querySelector('.loader').classList.add('-shown');
  const hideLoader = () => document.querySelector('.loader').classList.remove('-shown');

  if (!loading) {
    hideLoader();
    return;
  }

  clearList();
  showLoader();
});