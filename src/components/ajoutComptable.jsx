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
} from "antd";

import { useSelector, useDispatch } from "react-redux";
import { AddComptable } from "../features/comptables/comptableSlice";
import { selectUser } from "../features/user/userSlice";

import UploadFileInput from "./ui/UploadFile";
import UploadImage from "./ui/UploadImage";
import { useParams } from "react-router-dom";

const { Option } = Select;
const AjoutComptable = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onChangeDate = () => {};

  const onFinish = (values) => {
    console.log("values");
    console.log(values);

    const randomNumber = Math.floor(100 + Math.random() * 900);
    const generatedId = `C${randomNumber}`;

    const newComptable = {
      idCmp: generatedId,
      NomCmp: values.NomCmp,
      imageCmp: values.imageCmp,
      email: values.email,
      numCmp: values.numCmp,
      adresse: values.adresse,
      dateNais:
        values.dateNais.$D +
        "/" +
        (values.dateNais.$M + 1) +
        "/" +
        values.dateNais.$y,
      dateRuc:
        values.dateRuc.$D +
        "/" +
        (values.dateRuc.$M + 1) +
        "/" +
        values.dateRuc.$y,
      carteId: values.carteId,
      etxraitNais: values.etxraitNais,
      ficheFam: values.ficheFam,
      residence: values.residence,
      chifa: values.chifa,
      groupage: values.groupage,
      contrat: values.contrat,
      rip: values.rip,
      cv: values.cv,
      listTaches: [],
    };
    dispatch(AddComptable(newComptable));
    setOpen(false);
  };
  return (
    <>
      <div className="add-button">
        <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
          Nouveau Comptable
        </Button>
      </div>
      <Drawer
        title="Ajouter un nouveau comptable"
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
              <Form.Item name="NomCmp" label="Nom comptable">
                <Input placeholder="Nom comptable" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="imageCmp">
                <UploadImage field="imageCmp" form={form} />
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
              <Form.Item name="numCmp" label="Numero Fixe">
                <Input type="tel" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="adresse" label="Adresse">
                <Input.TextArea
                  rows={4}
                  placeholder="veillez saisir l'adresse du comptable"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="dateNais" label="Date de naissance">
                <DatePicker onChange={onChangeDate} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="dateRuc" label="Date de recrutement">
                <DatePicker onChange={onChangeDate} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Carte d'identité" name="carteId">
                <UploadFileInput enabled="true" field={"carteId"} form={form} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Extrait de naissance" name="etxraitNais">
                <UploadFileInput
                  enabled="true"
                  field={"etxraitNais"}
                  form={form}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Fiche Familiale" name="ficheFam">
                <UploadFileInput
                  enabled="true"
                  field={"ficheFam"}
                  form={form}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Residence" name="residence">
                <UploadFileInput
                  enabled="true"
                  field={"residence"}
                  form={form}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="carte CHIFA" name="chifa">
                <UploadFileInput enabled="true" field={"chifa"} form={form} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="carte de groupage" name="groupage">
                <UploadFileInput
                  enabled="true"
                  field={"groupage"}
                  form={form}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Contrat de travail" name="contrat">
                <UploadFileInput enabled="true" field={"contrat"} form={form} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="RIP" name="rip">
                <UploadFileInput enabled="true" field={"rip"} form={form} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="CV" name="cv">
                <UploadFileInput enabled="true" field={"cv"} form={form} />
              </Form.Item>
            </Col>
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
export default AjoutComptable;
