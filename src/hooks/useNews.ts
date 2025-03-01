import {useState, useEffect, useCallback} from 'react';
import {NewsItem} from '../types/news';
import {newsService} from '../services/api/news';

export const useNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await newsService.getNews();
      setNews(response);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load news. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return {news, loading, error, refetch: fetchNews};
};
