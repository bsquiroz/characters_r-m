import axios from 'axios';

export const httpClient = {
  get: async (url: string) => await axios.get(url),
};
