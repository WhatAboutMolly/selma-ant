import React from "react";
import "./pages.css";
import TableFacture from "../components/TableFacture";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Link to="/clients">clients</Link>
      <Link to="/comptables">Comptables</Link>
    </div>
  );
}
