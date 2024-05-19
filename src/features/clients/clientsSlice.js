import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    AddClient: {
      reducer(state, action) {
        state.push({ ...action.payload });
        console.log(state);
      },
    },
  },
});

export const { AddClient } = clientSlice.actions;
export default clientSlice.reducer;
export const selectAllClients = (state) => state.client;
