import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Radio } from "antd";
import UploadFileInput from "./ui/UploadFile";
const { TextArea } = Input;
import { useSelector, useDispatch } from "react-redux";
import { AddTache } from "../features/comptables/comptableSlice";
import { getUsername } from "../features/user/userSlice";
import moment from "moment";

const CollectionCreateForm = ({ onFormInstanceReady }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    onFormInstanceReady(form);
  }, []);

  return (
    <Form layout="vertical" form={form} name="form_in_modal">
      <Form.Item
        name="fichier"
        label="fichier"
        rules={[
          {
            required: true,
            message: "Veuillez choisir un fichier",
          },
        ]}
      >
        <UploadFileInput form={form} enabled={true} field="fichier" />
      </Form.Item>
      <Form.Item name="remarque" label="Remarque">
        <TextArea rows={3} placeholder="Remarque ..." />
      </Form.Item>
    </Form>
  );
};
const CollectionCreateFormModal = ({
  open,
  onCreate,
  onCancel,
  confirmLoading,
}) => {
  const [formInstance, setFormInstance] = useState();
  return (
    <Modal
      open={open}
      title="Ajouter une nouvelle tache"
      okText="Ajouter"
      cancelText="Annuler"
      confirmLoading={confirmLoading}
      okButtonProps={{
        autoFocus: true,
      }}
      onCancel={onCancel}
      destroyOnClose
      onOk={async () => {
        try {
          const values = await formInstance?.validateFields();
          console.log(values);
          formInstance?.resetFields();
          onCreate(values);
        } catch (error) {
          console.log("Failed:", error);
        }
      }}
    >
      <CollectionCreateForm
        onFormInstanceReady={(instance) => {
          setFormInstance(instance);
        }}
      />
    </Modal>
  );
};
const FormModal = ({ ...props }) => {
  const { numeroComptable } = props;

  const user = useSelector(getUsername);
  console.log(user);

  const currentDate = moment().format("DD/MM/YYYY");

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setConfirmLoading(true);
    dispatch(
      AddTache({
        numeroComptable,
        fichier: values.fichier,
        par: user,
        description: values.remarque,
        date: currentDate,
      })
    );
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Nouvelle Tache
      </Button>
      <CollectionCreateFormModal
        open={open}
        onCreate={onCreate}
        onCancel={() => setOpen(false)}
        confirmLoading={confirmLoading}
      />
    </>
  );
};
export default FormModal;
