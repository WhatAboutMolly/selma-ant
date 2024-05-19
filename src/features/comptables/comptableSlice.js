import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    NomCmp: "Jean Dupont",
    dateRuc: "1998-05-22",
    email: "JeanDupon@gmail.com",
    idCmp: "C001",
    numCmp: "0550559056",
    image:
      "https://yt3.googleusercontent.com/Q5PUjPzQ1-xtUCDaNgDo06CBrVTuIdzG-P3UaWWtn8MoScXAcsW89-TYBLjuhTyAXpIgFZRPmg=s900-c-k-c0x00ffffff-no-rj",
    listTaches: [
      {
        fichier: "D:download/fact.xlsx",
        par: "EC_Farah",
        date: "20/03/2024",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta vitae nunc sit amet viverra. Vivamus porta, mi lobortis semper rhoncus, magna justo pellentesque tortor",
      },
      {
        fichier: "D:download/fact.xlsx",
        par: "EC_Farah",
        date: "10/03/2024",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta vitae nunc sit amet viverra. Vivamus porta, mi lobortis semper rhoncus, magna justo pellentesque tortor",
      },
      {
        fichier: "D:download/fact.xlsx",
        par: "EC_Farah",
        date: "06/03/2024",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta vitae nunc sit amet viverra. Vivamus porta, mi lobortis semper rhoncus, magna justo pellentesque tortor",
      },
    ],
  },
  {
    NomCmp: "Marie Leblanc",
    dateRuc: "2006-05-22",
    email: "MarieLeb@gmail.com",
    numCmp: "0557884251",
    idCmp: "C002",
    image:
      "https://yt3.googleusercontent.com/Q5PUjPzQ1-xtUCDaNgDo06CBrVTuIdzG-P3UaWWtn8MoScXAcsW89-TYBLjuhTyAXpIgFZRPmg=s900-c-k-c0x00ffffff-no-rj",
  },
];

export const comptableSlice = createSlice({
  name: "comptable",
  initialState,
  reducers: {
    AddTache: {
      reducer(state, action) {
        const index = state.findIndex(
          (comptable) =>
            comptable.numeroComptable === action.payload.numeroComptable
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
