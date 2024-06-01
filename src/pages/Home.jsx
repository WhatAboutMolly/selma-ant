import React from "react";
import "./pages.css";
import TableFacture from "../components/TableFacture";
import { Link } from "react-router-dom";
import { Col } from "antd/dist/antd";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

export default function HomePage() {
  const user = useSelector(selectUser);
  const [nextPage, setNextPage] = useState("");
  useEffect(() => {
    if (user.role == "EC") {
      setNextPage(<Navigate to="/comptables"></Navigate>);
    } else setNextPage(<Navigate to="/clients"></Navigate>);
  });
  return nextPage;
  /*return (

    <Col>
      <Link to="/clients">clients</Link>
      <Link to="/comptables">Comptables</Link>
      <Link to="/list-taches">List taches</Link>
      <Link to="/clients/info">Info clients</Link>
      <Link to="/checklist">checkList</Link>
      <Link to="/archives/:idClt">Archive</Link>
    </Col>
  );*/
}
