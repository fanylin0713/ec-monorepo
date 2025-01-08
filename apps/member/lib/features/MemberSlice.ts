import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: number;
  name: string;
  email: string;
};

export interface MemberState {
  userInfo: User;
}

const initialState: MemberState = {
  userInfo: {
    id: 0,
    name: '',
    email: '',
  },
};

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<User>) => {
      console.log(action.payload);
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = memberSlice.actions;
export default memberSlice.reducer;
