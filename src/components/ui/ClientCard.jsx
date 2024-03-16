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

const { Meta } = Card;

const ClientCard = ({ ...props }) => {
  const { title, description, image, email, telephone } = props;
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={image} />}
    >
      <Meta
        title={title}
        description={
          <div className="card-info">
            <div>{description}</div>
            <a href={`mailto:${email}`}>
              <MailOutlined key="mail" /> {email}
            </a>
            <a href={`tel:${telephone}`}>
              <PhoneOutlined key="edit" /> {telephone}
            </a>
          </div>
        }
      />
    </Card>
  );
};
export default ClientCard;
