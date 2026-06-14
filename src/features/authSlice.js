import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  loading: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.status = true;
      state.userData = action.payload;
      state.loading = false;
    },

    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    logoutSuccess: (state) => {
      state.status = false;
      state.userData = null;
      state.loading = false;
      state.error = null;
    },
    authChecked: (state) => {
      state.loading = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  authChecked,
} = authSlice.actions;

export default authSlice.reducer;
