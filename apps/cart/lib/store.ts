import { configureStore } from '@reduxjs/toolkit';
import cart from './features/CartSlice';

export const cartStore = () => {
  return configureStore({
    reducer: {
      cart,
    },
  });
};

// infer the type of cartStore
export type AppStore = ReturnType<typeof cartStore>;
// infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
