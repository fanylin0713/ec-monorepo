import { configureStore } from '@reduxjs/toolkit';
import member from './features/MemberSlice';

export const memberStore = () => {
  return configureStore({
    reducer: { member },
  });
};

// infer the type of store
export type AppStore = ReturnType<typeof memberStore>;
// infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
