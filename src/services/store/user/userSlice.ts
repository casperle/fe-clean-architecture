import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: [
    {
      id: null,
      name: null,
      email: null,
      isLoggedIn: false,
    },
  ],
  reducers: {
    setUser: (state, action) => {
      return { ...action.payload.user, isLoggedIn: true };
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
