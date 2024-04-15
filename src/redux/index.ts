import { configureStore } from '@reduxjs/toolkit';
import { toggle, product, category } from './slices';

const rootReducer = {
  category,
  toggle,
  product,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
