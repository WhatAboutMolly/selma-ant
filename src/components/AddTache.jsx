import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input } from "antd/dist/antd";
import UploadFile from "./ui/UploadFile";
import UploadFileInput from "./ui/UploadFile";
const { TextArea } = Input;
import { useSelector, useDispatch } from "react-redux";
import { AddTache } from "../features/comptables/comptableSlice";
import { selectUser } from "../features/user/userSlice";
import moment from "moment";

const AddTacheForm = ({ ...props }) => {
  console.log(props);
  const { numeroComptable } = props;

  const user = useSelector(selectUser).username;
  console.log(user);

  const currentDate = moment().format("DD/MM/YYYY");

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    dispatch(
      AddTache({
        numeroComptable,
        fichier: values.fichier,
        par: user,
        description: values.description,
        date: currentDate,
      })
    );
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Ajouter une nouvelle tache
      </Button>
      <Modal
        title="Ajout nouvelle tache "
        open={open}
        confirmLoading={confirmLoading}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            name="fichier"
            rules={[
              {
                required: true,
                message: "Veuillez choisir un fichier",
              },
            ]}
          >
            <UploadFileInput setFile={setFile} />
          </Form.Item>
          <Form.Item name="description">
            <TextArea rows={3} placeholder="Remarque ..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              OK
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default AddTacheForm;
