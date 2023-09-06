import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: ({ loading, currentUser, token }, { payload }) => {
      loading: false;
      currentUser: payload?.user?.username;
      token: payload?.key;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state;
      currentUser = null;
      state.token = null;
    },
    registerSuccess: ({ loading, currentUser, token }, { payload }) => {
      loading: false;
      currentUser: payload?.user?.username;
      token: payload?.token;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} = authSlice.actions;
export default authSlice.reducer;
