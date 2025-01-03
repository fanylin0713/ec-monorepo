import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import shop from './features/ShopSlice';
import counter from 'cart/counter-slice';

export const shopStore = () => {
  return configureStore({
    reducer: combineReducers({ shop, counter }),
  });
};

// infer the type of store
export type AppStore = ReturnType<typeof shopStore>;
// infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
