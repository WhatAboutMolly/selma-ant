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

const { Meta } = Card;

const ComptableCrad = ({ ...props }) => {
  const {
    nom,
    prenom,
    age,
    nombreAnneesExperience,
    numeroComptable,
    image,
    nbClients,
  } = props;
  return (
    <Link to={`/clients/${numeroComptable}`}>
      <Card
        hoverable
        style={{
          width: 240,
        }}
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          }
          title={nom + " " + prenom}
          description={
            <div className="card-info">
              <div>
                {nombreAnneesExperience > 10
                  ? "Comptable Senior"
                  : "Comptable Junior"}
              </div>
              <div>
                <p>{age} ans</p>
                <p>{nbClients} clients</p>
              </div>
            </div>
          }
        />
      </Card>
    </Link>
  );
};
export default ComptableCrad;
