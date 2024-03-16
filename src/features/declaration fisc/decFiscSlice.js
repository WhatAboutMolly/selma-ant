import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  g50: Array(12).fill(false),
};
export const descFiscSlice = createSlice({
  name: "decFisc",
  initialState,
  reducers: {},
});

export const {} = descFiscSlice.actions;
export default descFiscSlice.reducer;
export const selectG50 = (state) => state.decFisc.g50;
