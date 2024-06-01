import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd/dist/antd";
import { useSelector, useDispatch } from "react-redux";
import { AddClient } from "../features/clients/clientsSlice";
import { selectUser } from "../features/user/userSlice";

import UploadFileInput from "./ui/UploadFile";
import UploadImage from "./ui/UploadImage";
import { useParams } from "react-router-dom";

const { Option } = Select;
const DrawerApp = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { idCompt } = useParams();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log("values");
    console.log(values);
    let myComptable;

    if (user.role == "EC") {
      myComptable = idCompt;
    } else {
      myComptable = user.code;
    }
    const randomNumber = Math.floor(100 + Math.random() * 900);
    const generatedId = `CLT${randomNumber}`;
    const newClient = {
      DeclarationExist: values.DeclarationExist,
      NIF: values.NIF,
      NIS: values.NIS,
      Nomclt: values.Nomclt,
      contratLoc: values.contratLoc,
      description: values.description,
      email: values.email,
      mdpCnas: values.mdpCnas,
      numTlp: values.numClt,
      registreComm: values.registreComm,
      statut: values.statut,
      imageClient: values.imageClient,
      numeroComptable: myComptable,
      idClt: generatedId,
    };
    dispatch(AddClient(newClient));
    setOpen(false);
  };
  return (
    <>
      <div className="add-button">
        <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
          Nouveau client
        </Button>
      </div>
      <Drawer
        title="Ajouter un nouveau client"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="Nomclt" label="Nom client">
                <Input placeholder="Nom client" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="imageClient">
                <UploadImage field="imageClient" form={form} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="email" label="Email">
                <Input type="email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="numClt" label="Numero Fixe">
                <Input type="tel" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="description" label="Adresse">
                <Input.TextArea
                  rows={4}
                  placeholder="veillez saisir l'adresse du client"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Registre Commerce" name="registreComm">
                <UploadFileInput
                  enabled="true"
                  field={"registreComm"}
                  form={form}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Contrat de location" name="contratLoc">
                <UploadFileInput
                  enabled="true"
                  field={"contratLoc"}
                  form={form}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="NIF" name="NIF">
                <UploadFileInput enabled="true" field={"NIF"} form={form} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="NIS" name="NIS">
                <UploadFileInput enabled="true" field={"NIS"} form={form} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item name="statut" label="Statut">
                <UploadFileInput enabled="true" field={"statut"} form={form} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="DeclarationExist"
                label="Declaration d'existance"
              >
                <UploadFileInput
                  enabled="true"
                  field={"DeclarationExist"}
                  form={form}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Form.Item label="Mot de passe CNAS" name="mdpCnas">
              <UploadFileInput enabled="true" field={"mdpCnas"} form={form} />
            </Form.Item>
          </Row>
          <Row gutter={16} justify={"end"}>
            <Col>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
            <Col>
              <Button onClick={onClose}>Annuler</Button>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default DrawerApp;
