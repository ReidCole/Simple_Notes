import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    signIn(state, action) {
      // action.payload.email action.payload.password
      console.log(action.payload.email, action.payload.password);
    },
    signUp(state, action) {},
  },
});

export const { signIn, signUp } = authSlice.actions;
export default authSlice.reducer;
