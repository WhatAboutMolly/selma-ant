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

export default function InfoClients() {
  const clients = useSelector(selectAllClients);

  const { idClt } = useParams();
  const myClient = clients.filter((c) => c.idClt == idClt && c)[0];
  return (
    <Flex justify="space-between">
      <Descriptions title="Information Client" column={2}>
        <Descriptions.Item label="Nom Client">
          {myClient?.Nomclt}
        </Descriptions.Item>
        <Descriptions.Item label="Addresse">
          {myClient?.description}
        </Descriptions.Item>
        <Descriptions.Item label={"Email"}>
          {<a href={`mailto:${myClient?.email}`}>{myClient?.email}</a>}
        </Descriptions.Item>
        <Descriptions.Item label="Numero Telephone">
          {myClient?.numTlp}
        </Descriptions.Item>
        <Descriptions.Item label="Registre commerce">
          {
            <a href={`http://localhost:8080/${myClient?.registreComm}`}>
              <FileWordOutlined /> {myClient?.registreComm}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="Declaration d'existance">
          {
            <a href={`http://localhost:8080/${myClient?.DeclarationExist}`}>
              <FileWordOutlined /> {myClient?.DeclarationExist}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="NIF">
          {
            <a href={`http://localhost:8080/${myClient?.NIF}`}>
              <FileWordOutlined /> {myClient?.NIF}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="NIS">
          {
            <a href={`http://localhost:8080/${myClient?.NIS}`}>
              <FileWordOutlined /> {myClient?.NIS}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="Contrat location">
          {
            <a href={`http://localhost:8080/${myClient?.contratLoc}`}>
              <FileWordOutlined /> {myClient?.contratLoc}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="Statut">
          {
            <a href={`http://localhost:8080/${myClient?.statut}`}>
              <FileWordOutlined /> {myClient?.statut}
            </a>
          }
        </Descriptions.Item>

        <Descriptions.Item label="Mot de passe CNAS">
          {
            <a href={`http://localhost:8080/${myClient?.mdpCnas}`}>
              <FileWordOutlined /> {myClient?.mdpCnas}
            </a>
          }
        </Descriptions.Item>
      </Descriptions>

      <img
        alt="logo"
        src={"/src/assets/Client-info/images/" + myClient?.imageClient}
      />
    </Flex>
  );
}
