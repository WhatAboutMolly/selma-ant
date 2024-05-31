import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
  role: "",
  username: "",
  code: "",
  nom: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    UpdateUser: {
      reducer(state, action) {
        console.log(state);
        state.logged = action.payload.logged;
        state.username = action.payload.username;
        state.role = action.payload.role;
        state.code = action.payload.code;
        state.nom = action.payload.nom;
      },
    },
  },
});

export const { UpdateUser } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state) => state.user;
export const getUsername = (state) => state.user.username;
