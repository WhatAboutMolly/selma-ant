import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    NomCmp: "Ould Ahmed Islam",
    dateRuc: "2022-12-23",
    email: "OuldAhmd@gmail.com",
    idCmp: "C001",
    numCmp: "0550 55 90 56",
    imageCmp: "islam.jpg",
    listTaches: [],
    adresse: "Cité 1500 Log, Batiment 115, Plateau sud- Ouled Fayet",
    etxraitNais: "extr-Naiss.jpg",
    residence: "residence-1.jpg",
  },
  {
    NomCmp: "Medjaled Hind",
    dateRuc: "2023-02-12",
    email: "HindMedjd@gmail.com",
    numCmp: "0557 88 42 51",
    idCmp: "C002",
    imageCmp: "hind.jpg",
    listTaches: [],
    adresse: "Rue 27 Bouchaoui Oumar, Batiment 35- Ouled Fayet",
    etxraitNais: "extr-Naiss-2.jpg",
    contrat: "contrat-1.jpg",
  },
];

export const comptableSlice = createSlice({
  name: "comptable",
  initialState,
  reducers: {
    AddTache: {
      reducer(state, action) {
        const index = state.findIndex(
          (comptable) => comptable.idCmp === action.payload.numeroComptable
        );
        if (index !== -1) {
          console.log(action.payload);
          const newTask = {
            fichier: action.payload.fichier,
            par: action.payload.par,
            date: action.payload.date,
            description: action.payload.description,
          };
          state[index].listTaches.unshift({ ...newTask });
        }
      },
    },
    AddComptable: {
      reducer(state, action) {
        state.push({ ...action.payload });
        console.log(state);
      },
    },
  },
});

export const { AddTache, AddComptable } = comptableSlice.actions;
export default comptableSlice.reducer;
export const selectAllComptables = (state) => state.comptable;
