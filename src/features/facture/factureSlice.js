import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    NumFac: "22/101",
    clFr: "HP",
    date: "22/12/2023",
    journaux: "ACHAT",
    fichier: "A41022-HP-22.12.2023.xlsx",
  },
];

export const factureSlice = createSlice({
  name: "facture",
  initialState,
  reducers: {
    addFacture: {
      reducer(state, action) {
        console.log(action.payload);
        state.push({ ...action.payload });
      },
    },
  },
});

export const { addFacture } = factureSlice.actions;
export default factureSlice.reducer;
export const getFacture = (state) => state.facture;
