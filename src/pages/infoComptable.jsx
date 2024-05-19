import React from "react";
import DrawerApp from "../components/DrawerApp";
import { Flex } from "antd";
import { useSelector } from "react-redux";
import { selectAllClients } from "../features/clients/clientsSlice";
import "./pages.css";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
const { Title } = Typography;
import { Checkbox, Col, Divider, Form, Row, Button } from "antd";
import { Avatar, List } from "antd";
import { Descriptions } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PhoneOutlined,
  MailOutlined,
  FileWordOutlined,
} from "@ant-design/icons";
import { selectAllComptables } from "../features/comptables/comptableSlice";

export default function InfoComptable() {
  const comptables = useSelector(selectAllComptables);

  const { idCmp } = useParams();
  const myComptable = comptables.filter((c) => c.idCmp == idCmp && c)[0];
  return (
    <Flex justify="space-between">
      <Descriptions title="Information Comptable" column={2}>
        <Descriptions.Item label="Nom Comptable">
          {myComptable.NomCmp}
        </Descriptions.Item>
        <Descriptions.Item label="Addresse">
          {myComptable.adresse}
        </Descriptions.Item>
        <Descriptions.Item label={"Email"}>
          {<a href={`mailto:${myComptable.email}`}>{myComptable.email}</a>}
        </Descriptions.Item>
        <Descriptions.Item label="Numero Telephone">
          {myComptable.numCmp}
        </Descriptions.Item>
        <Descriptions.Item label="Date de naissance">
          {myComptable.dateNais}
        </Descriptions.Item>
        <Descriptions.Item label="Date de recrutement">
          {myComptable.dateRuc}
        </Descriptions.Item>
        <Descriptions.Item label="Carte d'identité">
          {
            <a
              href={`http://localhost:8080/comptable-info/${myComptable.carteId}`}
            >
              <FileWordOutlined /> {myComptable.carteId}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="Extrait de naissance">
          {
            <a
              href={`http://localhost:8080/comptable-info/${myComptable.etxraitNais}`}
            >
              <FileWordOutlined /> {myComptable.etxraitNais}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="Fiche familiale">
          {
            <a
              href={`http://localhost:8080/comptable-info/${myComptable.ficheFam}`}
            >
              <FileWordOutlined /> {myComptable.ficheFam}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="Residence">
          {
            <a
              href={`http://localhost:8080/comptable-info/${myComptable.residence}`}
            >
              <FileWordOutlined /> {myComptable.residence}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="Carte CHIFA">
          {
            <a
              href={`http://localhost:8080/comptable-info/${myComptable.chifa}`}
            >
              <FileWordOutlined /> {myComptable.chifa}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="Carte de groupage">
          {
            <a
              href={`http://localhost:8080/comptable-info/${myComptable.groupage}`}
            >
              <FileWordOutlined /> {myComptable.groupage}
            </a>
          }
        </Descriptions.Item>

        <Descriptions.Item label="Contrat de travail">
          {
            <a
              href={`http://localhost:8080/comptable-info/${myComptable.contrat}`}
            >
              <FileWordOutlined /> {myComptable.contrat}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="RIP">
          {
            <a href={`http://localhost:8080/comptable-info/${myComptable.rip}`}>
              <FileWordOutlined /> {myComptable.rip}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="CV">
          {
            <a href={`http://localhost:8080/comptable-info/${myComptable.cv}`}>
              <FileWordOutlined /> {myComptable.cv}
            </a>
          }
        </Descriptions.Item>
      </Descriptions>

      <img
        alt="logo"
        src={"/src/assets/Client-info/images/" + myComptable.imageClient}
      />
    </Flex>
  );
}
