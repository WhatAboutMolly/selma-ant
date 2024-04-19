import React from "react";
import ClientCard from "../components/ui/ClientCard";
import { clients } from "../../Data";
import "./pages.css";
import { useParams } from "react-router-dom";

export default function Clients() {
  const { idCompt } = useParams();
  const selectedClients = idCompt
    ? clients.filter((c) => c.numeroComptable == idCompt && c)
    : clients;
  return (
    <div className="clients-container">
      {selectedClients.map((c) => (
        <ClientCard
          title={c.title}
          description={c.description}
          image={c.image}
          email={c.email}
          telephone={c.telephone}
          numeroClient={c.numeroClient}
        />
      ))}
    </div>
  );
}
