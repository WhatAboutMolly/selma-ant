import React from "react";
import ClientCard from "../components/ui/ClientCard";
import { useSelector } from "react-redux";
import { selectAllClients } from "../features/clients/clientsSlice";
import "./pages.css";
import { useParams } from "react-router-dom";
import DrawerApp from "../components/DrawerApp";

export default function Clients() {
  const clients = useSelector(selectAllClients);
  const { idCompt } = useParams();
  const selectedClients = idCompt
    ? clients.filter((c) => c.numeroComptable == idCompt && c)
    : clients;

  console.log(clients);
  return (
    <div>
      <DrawerApp />
      <div className="clients-container">
        {selectedClients.map((c) => (
          <ClientCard
            DeclarationExist={c.DeclarationExist}
            NIF={c.NIF}
            NIS={c.NIS}
            Nomclt={c.Nomclt}
            contratLoc={c.contratLoc}
            description={c.description}
            email={c.email}
            mdpCnas={c.mdpCnas}
            numTlp={c.numTlp}
            registreComm={c.registreComm}
            statut={c.statut}
            imageClient={c.imageClient}
            numeroComptable={c.numeroComptable}
            idClt={c.idClt}
          />
        ))}
      </div>
    </div>
  );
}
