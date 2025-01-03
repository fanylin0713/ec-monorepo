import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ShopState {
  list: number[];
}

const initialState: ShopState = {
  list: [],
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number | undefined>) => {
      const addedItem = action.payload !== undefined ? action.payload : 1;
      state.list = [...state.list, addedItem];
    },
  },
});

export const { addItem } = shopSlice.actions;
export default shopSlice.reducer;
