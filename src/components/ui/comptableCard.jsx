import React from "react";
import { Avatar, Card, Skeleton, Switch } from "antd/dist/antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PhoneOutlined,
  MailOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import "../ui.css";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FilePlus2, BookUser } from "lucide-react";
import { Tooltip } from "react-tooltip";
import dayjs from "dayjs";

const { Meta } = Card;

const ComptableCrad = ({ ...props }) => {
  const {
    idCmp,
    NomCmp,
    imageCmp,
    email,
    numCmp,
    adresse,
    dateNais,
    dateRuc,
    carteId,
    etxraitNais,
    ficheFam,
    residence,
    chifa,
    groupage,
    contrat,
    rip,
    cv,
  } = props;
  const currentDate = dayjs();

  const nombreAnneesExperience = currentDate.diff(dayjs(dateRuc), "year");
  return (
    <Link to={`/clients/${idCmp}`}>
      <Card
        hoverable
        style={{
          width: 240,
          color: "#000 !important",
        }}
        actions={[
          <Link to={`/list-taches/${idCmp}`}>
            <FilePlus2 size="16" id="ajout-icone" />
            <Tooltip
              anchorSelect="#ajout-icone"
              content="Nouvelle tache"
              place="bottom"
            />
          </Link>,
          <Link to={`/comptable/info/${idCmp}`}>
            <BookUser size="16" id="Info-comptable" />
            <Tooltip
              anchorSelect="#Info-comptable"
              content="Information comptable"
              place="bottom"
            />
          </Link>,
        ]}
      >
        <Meta
          avatar={<Avatar src={"/src/assets/Comptable-info/" + imageCmp} />}
          title={NomCmp}
          description={
            <div className="card-info">
              <div>
                Comptable {nombreAnneesExperience > 5 ? "Senior" : "Junior"}
              </div>
              <div className="info-compt">
                <PushpinOutlined /> {adresse}
              </div>
              <span className="info-compt">
                <MailOutlined key="mail" /> {email}
              </span>
              <span className="info-compt">
                <PhoneOutlined key="phone" /> {numCmp}
              </span>
            </div>
          }
        />
      </Card>
    </Link>
  );
};
export default ComptableCrad;
