import axiosInstance from '@/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
const namespace = 'product';
export const fetchProduct = createAsyncThunk(`${namespace}/fetchProduct`, async (categoryId: number) => {
  const { data } = await axiosInstance.get('/product', { params: { categoryId } });
  return data;
});
