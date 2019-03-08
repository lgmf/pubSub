import { get } from 'axios';

import pubSub from '../pubSub';

class NewsService {

  constructor() {
    this.apiKey = 'ba135b7a-d818-45f1-bb77-b00e34378535'
    this.endpoint = `https://content.guardianapis.com/search?api-key=${this.apiKey}`;
  }

  async getNews(query) {
    const url = `${this.endpoint}&page-size=32&q=${query}`;

    pubSub.publish('News/loading', true);

    try {
      const { data } = await get(url);
      const { response } = data;

      pubSub.publish('News/loading', false);
      pubSub.publish('News/data', response.results);

    } catch (error) {
      console.log(error);
      pubSub.publish('News/loading', false);
    }
  }

}

export default new NewsService();
