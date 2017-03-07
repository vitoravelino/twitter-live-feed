import axios from 'axios';

const options = {
  baseURL: process.env.API_BASE_URL,
};

export const createHttpClient = () => axios.create(options);

export default createHttpClient();
