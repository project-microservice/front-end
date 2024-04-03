import { configureStore } from '@reduxjs/toolkit';
import toggleSlices from './slices/toggleSlices';

export const store = configureStore({
  reducer: {
    toggleSlices,
    // cartSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
