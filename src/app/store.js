import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import decFiscSlice from "../features/declaration fisc/decFiscSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    decFisc: decFiscSlice,
  },
});
