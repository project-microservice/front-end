import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './slices/toggleSlices';
import productReducer from './slices/productSlices';
export const store = configureStore({
  reducer: {
    toggleReducer,
    productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
