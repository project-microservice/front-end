import { ProductCardInterface } from './../../interfaces/product.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from '../action';
import { REDUCER_NAME } from '../constants';
interface ProductStateInterface {
  loading: Boolean;
  products: ProductCardInterface[];
  error: string;
}
const initialState: ProductStateInterface = {
  loading: true,
  products: [],
  error: '',
};

export const ProductSlices = createSlice({
  name: REDUCER_NAME.PRODUCT,
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addMatcher(
        action => action.type.endsWith('pending'),
        (state, action) => {
          state.loading = true;
        },
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        },
      );
  },
  reducers: {},
});

export const {} = ProductSlices.actions;

export default ProductSlices.reducer;
