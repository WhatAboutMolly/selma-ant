import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  DatePicker,
} from "antd/dist/antd";
import UploadFacture from "./ui/uploadFacture";
import { useSelector, useDispatch } from "react-redux";
import { addFacture } from "../features/facture/factureSlice";

const AddFacture = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChangeDate = () => {};

  const onFinish = (values) => {
    console.log(values.dateFac.$y);
    dispatch(
      addFacture({
        NumFac: values.numFac,
        clFr: values.frCL,
        date:
          values.dateFac.$D +
          "/" +
          (values.dateFac.$M + 1) +
          "/" +
          values.dateFac.$y,
        journaux: values.journaux,
        fichier: values.facture,
      })
    );
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Nouvelle facture
      </Button>
      <Drawer
        title="Ajouter une nouvelle facture"
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
          <Row>
            <Col span={24}>
              <Form.Item label="Facture" name="facture">
                <UploadFacture enabled="true" field={"facture"} form={form} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item name="numFac" label="N° Facture">
                <Input placeholder="N° Facture" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="journaux" label="Journaux">
                <Select
                  defaultValue="Achat"
                  options={[
                    {
                      value: "Achat",
                      label: "Achat",
                    },
                    {
                      value: "Vente",
                      label: "Vente",
                    },
                    {
                      value: "Banque",
                      label: "Banque",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item name="dateFac" label="Date facturation">
                <DatePicker onChange={onChangeDate} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="frCL" label="Fournisseur/Client">
                <Input placeholder="Fournisseur/Client" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Enregistrer
              </Button>
              <Button onClick={onClose}>Annuler</Button>
            </Form.Item>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default AddFacture;
