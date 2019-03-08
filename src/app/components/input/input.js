import newsService from '../../services/newsService';

const input = document.querySelector('.input');
const searchBtn = document.querySelector('.btn.search');

export default searchBtn.addEventListener('click', () => newsService.getNews(input.value));
