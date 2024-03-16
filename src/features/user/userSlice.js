import { createSlice } from "@reduxjs/toolkit";

const initialState = { logged: false, role: "", username: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    UpdateUser: {
      reducer(state, action) {
        console.log(state);
        state.logged = action.payload.logged;
        state.username = action.payload.username;
        state.role = "EC";
      },
    },
  },
});

export const { UpdateUser } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state) => state.user;
