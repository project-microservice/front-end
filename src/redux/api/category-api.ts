import { API_PREFIX } from '../constants';
import axiosClient from './axios-client';

const url = API_PREFIX.CATEGORY;
const categoryApi = {
  getCategory(): Promise<any> {
    return axiosClient.get(`${url}`);
  },
};

export default categoryApi;
