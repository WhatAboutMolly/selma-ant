import React from "react";
import { Avatar, Card, Skeleton, Switch } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PhoneOutlined,
  MailOutlined,
  PushpinOutlined,
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
  console.log(idClt);
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
            src={"/src/assets/Client-info/" + imageClient}
            height={200}
            style={{ objectFit: "cover" }}
          />
        }
      >
        <Meta
          title={Nomclt}
          description={
            <div className="card-info">
              <div className="info-compt">
                <PushpinOutlined /> {description}
              </div>
              <span className="info-compt">
                <MailOutlined key="mail" /> {email}
              </span>
              <span className="info-compt">
                <PhoneOutlined key="phone" /> {numTlp}
              </span>
            </div>
          }
        />
      </Card>
    </Link>
  );
};
export default ClientCard;
