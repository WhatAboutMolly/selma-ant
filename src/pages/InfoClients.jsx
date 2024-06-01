import React from "react";
import DrawerApp from "../components/DrawerApp";
import { Flex } from "antd/dist/antd";
import { useSelector } from "react-redux";
import { selectAllClients } from "../features/clients/clientsSlice";
import "./pages.css";
import { useParams } from "react-router-dom";
import { Typography } from "antd/dist/antd";
const { Title } = Typography;
import { Checkbox, Col, Divider, Form, Row, Button } from "antd/dist/antd";
import { Avatar, List } from "antd/dist/antd";
import { Descriptions } from "antd/dist/antd";
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
            <a href={`/src/assets/${myClient?.registreComm}`}>
              <FileWordOutlined /> {myClient?.registreComm}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="Declaration d'existance">
          {
            <a href={`/src/assets/${myClient?.DeclarationExist}`}>
              <FileWordOutlined /> {myClient?.DeclarationExist}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="NIF">
          {
            <a href={`/src/assets/${myClient?.NIF}`}>
              <FileWordOutlined /> {myClient?.NIF}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="NIS">
          {
            <a href={`/src/assets/${myClient?.NIS}`}>
              <FileWordOutlined /> {myClient?.NIS}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="Contrat location">
          {
            <a href={`/src/assets/${myClient?.contratLoc}`}>
              <FileWordOutlined /> {myClient?.contratLoc}
            </a>
          }
        </Descriptions.Item>
        <Descriptions.Item label="Statut">
          {
            <a href={`/src/assets/${myClient?.statut}`}>
              <FileWordOutlined /> {myClient?.statut}
            </a>
          }
        </Descriptions.Item>

        <Descriptions.Item label="Mot de passe CNAS">
          {
            <a href={`/src/assets/${myClient?.mdpCnas}`}>
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
