import { createSlice } from '@reduxjs/toolkit';
import {
  registerNewUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from './usersOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: null,
    isLoggedIn: false,
    error: false,
  },
  extraReducers: {
    [registerNewUser.pending](state, _) {
      return { ...state, error: false };
    },

    [registerNewUser.fulfilled](state, action) {
      console.log(action.payload);
      if (action.payload === 400) {
        state.error = true;
        return;
      } else {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }
    },
    [loginUser.pending](state, _) {
      return { ...state, error: false };
    },

    [loginUser.fulfilled](state, action) {
      if (action.payload === 400) {
        state.error = true;
        return;
      }
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled](state, _) {
      state.user = {};
      state.token = '';
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      if (!action.payload) {
        return;
      }
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLoggedIn = true;
    },
  },
});
