import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCategory } from '../action';
import { REDUCER_NAME } from '../constants';
const initialState: any = {
  loading: true,
  category: null,
  error: '',
};
export const CategorySlices = createSlice({
  name: REDUCER_NAME.CATEGORY,
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
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

export const {} = CategorySlices.actions;
export default CategorySlices.reducer;
