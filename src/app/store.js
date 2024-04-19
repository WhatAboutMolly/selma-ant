import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import decFiscReducer from "../features/declaration fisc/decFiscSlice";
import comptablereReducer from "../features/comptables/comptableSlice";
import checklistReducer from "../features/checkList/checklistSlice";
import archiveReducer from "../features/archive/archiveSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    decFisc: decFiscReducer,
    comptable: comptablereReducer,
    checklist: checklistReducer,
    archive: archiveReducer,
  },
});
