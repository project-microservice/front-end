import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from '../action/productAction';
interface ProductStateInterface {
  loading: Boolean;
  products: any;
  error: string;
}
const initialState: ProductStateInterface = {
  loading: false,
  products: null,
  error: '',
};

export const ProductSlices = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
  reducers: {},
});

export const {} = ProductSlices.actions;

export default ProductSlices.reducer;
