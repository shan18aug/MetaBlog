import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  loading: false,
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
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutSuccess } =
  authSlice.actions;

export default authSlice.reducer;
