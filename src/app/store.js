import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import decFiscReducer from "../features/declaration fisc/decFiscSlice";
import comptablereReducer from "../features/comptables/comptableSlice";
import checklistReducer from "../features/checkList/checklistSlice";
import archiveReducer from "../features/archive/archiveSlice";
import clientsReducer from "../features/clients/clientsSlice";
import factureReducer from "../features/facture/factureSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    decFisc: decFiscReducer,
    comptable: comptablereReducer,
    client: clientsReducer,
    checklist: checklistReducer,
    archive: archiveReducer,
    facture: factureReducer,
  },
});
