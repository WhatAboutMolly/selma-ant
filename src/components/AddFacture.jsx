import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import UploadFile from "./ui/UploadFile";

const AddFacture = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [file, setFile] = useState({});

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    //console.log(file);
    handleFileUpload(jsonData);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <input type="file" onChange={handleFileChange} />
      </Modal>
    </>
  );
};
export default AddFacture;
