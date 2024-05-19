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
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          }
          title={NomCmp}
          description={
            <div className="card-info">
              <div>{adresse}</div>
              <a href={`mailto:${email}`}>
                <MailOutlined key="mail" /> {email}
              </a>
              <a href={`tel:${numCmp}`}>
                <PhoneOutlined key="phone" /> {numCmp}
              </a>
            </div>
          }
        />
      </Card>
    </Link>
  );
};
export default ComptableCrad;
