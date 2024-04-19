import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    comptable: "C001",
    client: "HP",
    declaration: "G50",
    mois: 2,
    annee: 2024,
    fichier: "G50/HP FEV2022.xls",
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
