import React from "react";
import { comptables } from "../../Data";
import ComptableCrad from "../components/ui/comptableCard";

export default function Comptables() {
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
