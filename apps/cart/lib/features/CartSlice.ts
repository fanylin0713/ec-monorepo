import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  productId: number;
  quantity: number;
};

export interface CounterState {
  cartList: CartItem[];
}

const initialState: CounterState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<object | undefined>) => {
      const incrementBy = action.payload !== undefined ? action.payload : 1;
      state.cartList.push(action.payload as CartItem);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
