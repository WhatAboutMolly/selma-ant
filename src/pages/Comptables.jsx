import React from "react";
import { useSelector } from "react-redux";
import { selectAllComptables } from "../features/comptables/comptableSlice";
import ComptableCrad from "../components/ui/comptableCard";
import AjoutComptable from "../components/ajoutComptable";

export default function Comptables() {
  const comptables = useSelector(selectAllComptables);
  console.log(comptables);
  return (
    <div>
      <AjoutComptable />
      <div className="comptables-container">
        {comptables.map((c) => (
          <ComptableCrad
            idCmp={c.idCmp}
            NomCmp={c.NomCmp}
            imageCmp={c.imageCmp}
            email={c.email}
            numCmp={c.numCmp}
            adresse={c.adresse}
            dateNais={c.dateNais}
            dateRuc={c.dateRuc}
            carteId={c.carteId}
            etxraitNais={c.etxraitNais}
            ficheFam={c.ficheFam}
            residence={c.residence}
            chifa={c.chifa}
            groupage={c.groupage}
            contrat={c.contrat}
            rip={c.rip}
            cv={c.cv}
          />
        ))}
      </div>
    </div>
  );
}
