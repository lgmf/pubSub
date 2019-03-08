import pubSub from '../../pubSub';
import render from '../render';

pubSub.subscribe('News/loading', loading => {
  if (!loading) return;
  render('', '.list');
});

pubSub.subscribe('News/data', news => {
  const template = news.map(({ webTitle, webUrl }) => `
    <a 
      class="item" 
      href="${webUrl}"
      target="_blank"
    >${webTitle}</a>
  `).join('');

  render(template, '.list');
});
