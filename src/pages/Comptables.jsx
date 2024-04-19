import React from "react";
import { useSelector } from "react-redux";
import { selectAllComptables } from "../features/comptables/comptableSlice";
import ComptableCrad from "../components/ui/comptableCard";

export default function Comptables() {
  const comptables = useSelector(selectAllComptables);
  console.log(comptables);
  return (
    <div className="comptables-container">
      {comptables.map((c) => (
        <ComptableCrad
          nom={c.nom}
          prenom={c.prenom}
          age={c.age}
          nombreAnneesExperience={c.nombreAnneesExperience}
          nbClients={c.nbClients}
          image={c.image}
          numeroComptable={c.numeroComptable}
        />
      ))}
    </div>
  );
}
