import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    comptable: "C001",
    client: "HP",
    declaration: "G50",
    jour: 22,
    mois: 0,
    annee: 2024,
    fichier: "G50/HP JAN2022.xls",
  },
  {
    comptable: "C001",
    client: "HP",
    declaration: "G50",
    jour: 15,
    mois: 1,
    annee: 2024,
    fichier: "G50/HP FEV2022.xls",
  },
  {
    comptable: "C001",
    client: "HP",
    declaration: "G50",
    jour: 25,
    mois: 2,
    annee: 2024,
    fichier: "G50/HP MARS2022.xlsx",
  },
  {
    comptable: "C001",
    client: "HP",
    declaration: "G50",
    jour: 23,
    mois: 3,
    annee: 2024,
    fichier: "G50/BioPharma AVR2022.xls",
  },
  {
    comptable: "C002",
    client: "BioPharma",
    declaration: "G50",
    jour: 22,
    mois: 0,
    annee: 2024,
    fichier: "G50/BioPharma JAN2022.xls",
  },
  {
    comptable: "C002",
    client: "BioPharma",
    declaration: "G50",
    jour: 15,
    mois: 1,
    annee: 2024,
    fichier: "G50/BioPharma JAN2022.xls",
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
