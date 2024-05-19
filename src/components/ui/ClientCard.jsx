import React from "react";
import { Avatar, Card, Skeleton, Switch } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "../ui.css";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ClientCard = ({ ...props }) => {
  const {
    DeclarationExist,
    NIF,
    NIS,
    Nomclt,
    contratLoc,
    description,
    email,
    mdpCnas,
    numTlp,
    registreComm,
    statut,
    imageClient,
    numeroComptable,
    idClt,
  } = props;
  return (
    <Link to={`/clients/info/${idClt}`}>
      <Card
        hoverable
        style={{
          width: 240,
          color: "#000",
        }}
        cover={
          <img
            alt="example"
            src={"/src/assets/Client-info/images/" + imageClient}
          />
        }
      >
        <Meta
          title={Nomclt}
          description={
            <div className="card-info">
              <div>{description}</div>
              <a href={`mailto:${email}`}>
                <MailOutlined key="mail" /> {email}
              </a>
              <a href={`tel:${numTlp}`}>
                <PhoneOutlined key="phone" /> {numTlp}
              </a>
            </div>
          }
        />
      </Card>
    </Link>
  );
};
export default ClientCard;
