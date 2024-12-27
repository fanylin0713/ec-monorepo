import { configureStore } from '@reduxjs/toolkit';
import counter from './features/counterSlice';

export const cartStore = () => {
  return configureStore({
    reducer: {
      counter,
    },
  });
};

// infer the type of cartStore
export type AppStore = ReturnType<typeof cartStore>;
// infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
