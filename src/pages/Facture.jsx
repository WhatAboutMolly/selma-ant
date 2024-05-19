import React from "react";
import "./pages.css";
import TableFacture from "../components/TableFacture";
import AddFacture from "../components/AddFacture";
import { useSelector } from "react-redux";

export default function Facture() {
  return (
    <div className="home-container">
      <div>
        <AddFacture />
      </div>
      <div className="facture-table">
        <TableFacture />
      </div>
    </div>
  );
}
