import { API_PREFIX } from '../constants';
import axiosClient from './axios-client';
const url = API_PREFIX.PRODUCT;

const productApi = {
  getProductsByCategoryId(categoryId: number): Promise<any> {
    return axiosClient.get(`${url}`, { params: { categoryId } });
  },
};

export default productApi;
