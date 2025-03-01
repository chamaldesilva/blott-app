export interface NewsItem {
  id: string;
  headline: string;
  image: string;
  source: string;
  dateTime: string;
  url: string;
}

export interface ApiResponse {
  data: NewsItem[];
  status: string;
}
