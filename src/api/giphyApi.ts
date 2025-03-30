import axios, { AxiosInstance } from 'axios';
import { environment } from '../global';

export const giphyApi: AxiosInstance = axios.create({
  baseURL: `${environment.GIPHY_API_URL}?api_key=${environment.GIPHY_API_KEY}&limit=12`
});