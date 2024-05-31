import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    NumFac: "008",
    clFr: "Viver",
    date: "08/01/2023",
    journaux: "ACHAT",
    fichier: "A008-Viver-08.01.2023.jpg",
  },
  {
    NumFac: "059",
    clFr: "Belkacemi",
    date: "09/11/2023",
    journaux: "VENTE",
    fichier: "V059-Belkacemi-09.11.2023.jpg",
  },
  {
    NumFac: "230193",
    clFr: "Life",
    date: "22/01/2023",
    journaux: "ACHAT",
    fichier: "A230193-Life-22.01.2023.jpg",
  },
  {
    NumFac: "23000034",
    clFr: "Life",
    date: "08/01/2023",
    journaux: "ACHAT",
    fichier: "A23000034-Life-08.01.2023.jpg",
  },
  {
    NumFac: "071",
    clFr: "Belkacemi",
    date: "16/12/2023",
    journaux: "VENTE",
    fichier: "V071-Belkacemi-16.12.2023.jpg",
  },
  {
    NumFac: "070",
    clFr: "Belkacemi",
    date: "16/12/2023",
    journaux: "VENTE",
    fichier: "V070-Belkacemi-16.12.2023.jpg",
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
