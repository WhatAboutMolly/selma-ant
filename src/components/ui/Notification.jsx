import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import { AlertFilled, BellFilled } from "@ant-design/icons";

const Notification = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message:
        "Alerte de Retard de soumission de la G50 du client Superette frere Belkacemi",
      description:
        "Bonjour Oueld ahmed Islam, Nous vous informons que votre déclaration fiscale est en retard. Si elle n'est pas soumise immédiatement, des pénalités supplémentaires seront appliquées. Date limite de soumission : 20 juin 2024  Pénalités actuelles : 15% du montant global de G50.",
      icon: (
        <AlertFilled
          style={{
            color: "#c50202",
          }}
        />
      ),
    });
  };
  return (
    <div>
      {contextHolder}
      <Button onClick={openNotification}>
        <BellFilled />
      </Button>
    </div>
  );
};
export default Notification;
