import React from "react";
import "./pages.css";
import TableFacture from "../components/TableFacture";
import AddFacture from "../components/AddFacture";

export default function Facture() {
  return (
    <div className="home-container">
      <div className="header-container">
        <div className="header-container-img">
          <img src="/src/assets/header/facture.svg" />
        </div>
      </div>
      <div className="facture-table">
        <TableFacture />
      </div>
    </div>
  );
}
