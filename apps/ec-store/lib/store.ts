import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import shop from './features/ShopSlice';
import cart from 'cart/cart-slice';
import member from 'member/member-slice';

export const shopStore = () => {
  return configureStore({
    reducer: combineReducers({ shop, cart, member }),
  });
};

// infer the type of store
export type AppStore = ReturnType<typeof shopStore>;
// infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
