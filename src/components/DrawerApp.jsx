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
} from "antd";
import UploadFileInput from "./ui/UploadFile";
import UploadImage from "./ui/UploadImage";

const { Option } = Select;
const DrawerApp = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row>
            <Col span={12}>
              <Form.Item
                name="Nomclt"
                label="Nom client"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir ce champs",
                  },
                ]}
              >
                <Input placeholder="Nom client" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <UploadImage />
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir ce champs",
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="numClt"
                label="Numero Fixe"
                rules={[
                  {
                    required: true,
                    message: "Veuillez remplir ce champs",
                  },
                ]}
              >
                <Input type="tel" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Registre Commerce"
                name="registreComm"
                rules={[
                  {
                    required: true,
                    message: "Veuillez choisir un fichier",
                  },
                ]}
              >
                <UploadFileInput />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Contrat de locatio"
                name="contratLoc"
                rules={[
                  {
                    required: true,
                    message: "Veuillez choisir un fichier",
                  },
                ]}
              >
                <UploadFileInput />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="NIF"
                name="NIF"
                rules={[
                  {
                    required: true,
                    message: "Veuillez choisir un fichier",
                  },
                ]}
              >
                <UploadFileInput />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="NIS"
                name="NIS"
                rules={[
                  {
                    required: true,
                    message: "Veuillez choisir un fichier",
                  },
                ]}
              >
                <UploadFileInput />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                name="statut"
                label="Statut"
                rules={[
                  {
                    required: true,
                    message: "Veuillez choisir un fichier",
                  },
                ]}
              >
                <UploadFileInput />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="DeclarationExist"
                label="Declaration d'existance"
                rules={[
                  {
                    required: true,
                    message: "Veuillez choisir un fichier",
                  },
                ]}
              >
                <UploadFileInput />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Form.Item
              label="Mot de passe CNAS"
              name="mdpCnas"
              rules={[
                {
                  required: true,
                  message: "Veuillez choisir un fichier",
                },
              ]}
            >
              <UploadFileInput />
            </Form.Item>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default DrawerApp;
