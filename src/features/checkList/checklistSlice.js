import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  G50: [
    { tache: "tache 1", done: true },
    { tache: "tache 2", done: false },
    { tache: "tache 3", done: false },
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
