import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACTIONS } from '../constants';
import { categoryApi } from '../api';

export const getCategory = createAsyncThunk<any>(ACTIONS.GET_CATEGORY, async () => {
  const { data } = await categoryApi.getCategory();
  return data;
});
