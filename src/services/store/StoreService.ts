import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './user/userSlice';

const reduxStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const getStore = () => {
  return reduxStore;
};
