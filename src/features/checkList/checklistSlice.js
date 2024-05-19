import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  G50: [
    {
      tache: "Calculer TVA, TAP, IBS, IRG avec les reductions concernées",
      done: true,
    },
    { tache: "Declarer la G50 sur le site JIBAYATIC", done: false },
    { tache: "Enregistrement comptable de la G50", done: false },
    { tache: "Enregistrement comptable du reglement de la G50", done: false },
  ],
};

export const checklistState = createSlice({
  name: "checklist",
  initialState,
  reducers: {
    updateG50: {
      reducer(state, action) {
        console.log(action.payload);
        state.G50 = action.payload;
        console.log(state.G50);
      },
    },
  },
});

export const { updateG50 } = checklistState.actions;
export default checklistState.reducer;
export const getChecklist = (state) => state.checklist;
