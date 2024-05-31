import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    comptable: "C001",
    client: "Belkacemi",
    declaration: "G50",
    jour: 22,
    mois: 0,
    annee: 2024,
    fichier: "G50-Belkacemi-JAN2024.jpg",
  },
  {
    comptable: "C001",
    client: "Belkacemi",
    declaration: "G50",
    jour: 15,
    mois: 1,
    annee: 2024,
    fichier: "G50-Belkacemi-FEV2024.jpg",
  },
  {
    comptable: "C001",
    client: "Belkacemi",
    declaration: "G50",
    jour: 25,
    mois: 2,
    annee: 2024,
    fichier: "G50-Belkacemi-MAR2024.jpg",
  },
  {
    comptable: "C001",
    client: "Belkacemi",
    declaration: "G50",
    jour: 23,
    mois: 3,
    annee: 2024,
    fichier: "G50-Belkacemi-AVR2024.jpg",
  },
  {
    comptable: "C002",
    client: "Beciri",
    declaration: "G50",
    jour: 22,
    mois: 3,
    annee: 2024,
    fichier: "G50-Beciri-Mar2024.jpg",
  },
  {
    comptable: "C002",
    client: "Beciri",
    declaration: "G50",
    jour: 15,
    mois: 4,
    annee: 2024,
    fichier: "G50-Beciri-AVR2024.jpg",
  },
];

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {
    addArchive: {
      reducer(state, action) {
        console.log(action.payload);
        state.push({ ...action.payload });
      },
    },
  },
});

export const { addArchive } = archiveSlice.actions;
export default archiveSlice.reducer;
export const getArchive = (state) => state.archive;
