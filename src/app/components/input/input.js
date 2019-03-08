import newsService from '../../services/newsService';
import render from '../render';

const fetchNews = () => {
  const query = document.querySelector('.input').value;
  newsService.getNews(query);
};

const afterRendered = () => {
  document.querySelector('.btn.search').addEventListener('click', fetchNews);
}

const template = `
  <input
    type="text" 
    class="input" 
    placeholder="Type what you wanna know">

  <button class="btn search">Search</button>
`;

render(template, '.header', afterRendered);
