import { createSlice } from "@reduxjs/toolkit";

// Initial state for Auth
const initialAuthState = {
  isAuth: false,
};

// New slice for Auth
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

// Actions creators will create action objects that have already a type property with an unique id per action
export const authActions = authSlice.actions;

export default authSlice.reducer;
