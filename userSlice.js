import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUser(state, action) {
      state.data = action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
