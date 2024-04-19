import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    nom: "Jean",
    prenom: "Dupont",
    nombreAnneesExperience: 10,
    age: 35,
    numeroComptable: "C001",
    nbClients: 1,
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
    nom: "Marie",
    prenom: "Leblanc",
    nombreAnneesExperience: 8,
    age: 40,
    numeroComptable: "C002",
    nbClients: 1,
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
  },
});

export const { AddTache } = comptableSlice.actions;
export default comptableSlice.reducer;
export const selectAllComptables = (state) => state.comptable;
