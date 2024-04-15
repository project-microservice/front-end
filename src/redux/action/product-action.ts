import { handleGetImageFromFirebase } from '@/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACTIONS } from '../constants';
import { productApi } from '../api';
import { ProductCardInterface } from '@/interfaces/product.interface';

export const fetchProduct = createAsyncThunk<ProductCardInterface[], { categoryId: number }>(
  ACTIONS.GET_PRODUCT_BY_CATEGORY_ID,
  async ({ categoryId }) => {
    const { data } = await productApi.getProductsByCategoryId(categoryId);
    const response = await Promise.all(
      data.map(async (product: ProductCardInterface) => {
        const thumbnailPath = await handleGetImageFromFirebase(product.thumbnailPath);
        return { ...product, thumbnailPath };
      }),
    );
    return response;
  },
);
