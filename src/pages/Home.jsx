import React from "react";
import "./pages.css";
import TableFacture from "../components/TableFacture";
import { Link } from "react-router-dom";
import { Col } from "antd";

export default function HomePage() {
  return (
    <Col>
      <Link to="/clients">clients</Link>
      <Link to="/comptables">Comptables</Link>
      <Link to="/list-taches">List taches</Link>
      <Link to="/clients/info">Info clients</Link>
      <Link to="/checklist">checkList</Link>
      <Link to="/archives/:idClt">Archive</Link>
    </Col>
  );
}
