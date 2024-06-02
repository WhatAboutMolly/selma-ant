import React from "react";
import DashBoard from "../../components/ui/DashBoard";
const tousLesMois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const columns = [
  {
    title: "Declaration",
    dataIndex: "declaration",
    key: "declaration",
    width: "20%",
  },
  {
    title: "Client",
    dataIndex: "client",
    key: "client",
    width: "20%",
  },
  {
    title: "Mois",
    dataIndex: "mois",
    key: "mois",
    sorter: (a, b) => tousLesMois.indexOf(a.mois) - tousLesMois.indexOf(b.mois),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Année",
    dataIndex: "annee",
    key: "annee",
    sorter: (a, b) => a.annee - b.annee,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Fichier",
    dataIndex: "fichier",
    key: "fichier",
    render: (text) => <a href={`/files/Dec-fisc/${text}`}>ouvrir {text}</a>,
  },
];
function ArchiveFisc() {
  return <DashBoard columns={columns} />;
}

export default ArchiveFisc;
