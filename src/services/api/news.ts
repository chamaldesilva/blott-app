import axios from 'axios';
import Config from 'react-native-config';
import {NewsItem} from '../../types/news';

const apiClient = axios.create({
  baseURL: Config.FINNHUB_BASE_URL,
  headers: {
    'X-Finnhub-Token': Config.FINNHUB_API_KEY,
  },
});

export const newsService = {
  getNews: async (): Promise<NewsItem[]> => {
    try {
      const response = await apiClient.get('/news?category=general');
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
};
