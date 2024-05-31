import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    idClt: "CLT001",
    Nomclt: "Superette les frères Belkacemi",
    numeroComptable: "C001",
    numTlp: "0773 34 2924",
    description: "Ouled Fayet",
    email: "Belkacemi@gmail.com",
    imageClient: "belkacemi-logo.jpg",
  },
  {
    idClt: "CLT002",
    Nomclt: "Pharmacie Beciri",
    numeroComptable: "C002",
    numTlp: "0549 36 59 75",
    description: "Ouled Fayet",
    email: "Beciri@gmail.com",
    imageClient: "Beciri-logo.jpeg",
  },
];

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
