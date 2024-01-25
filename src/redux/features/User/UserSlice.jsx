import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorized: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.authorized = action.payload;
    },
  },
});

export const { auth } = userSlice.actions;

export default userSlice.reducer;
