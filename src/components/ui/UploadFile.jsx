import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";

const UploadFileInput = ({ ...props }) => {
  const { form, enabled } = props;

  const uploadProps = {
    name: "file",
    maxCount: 1,
    /*action: "https://6606ae89be53febb857e6b30.mockapi.io/photo",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file.type, info.fileList[0].type);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        form.setFieldValue("fichier", info.file.name);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },*/
    onChange(info) {
      info.file.status = "done";
      message.success(`${info.file.name} file uploaded successfully`);
      form.setFieldValue("fichier", info.file.name);
    },
  };

  return (
    <Upload {...uploadProps}>
      <Button disabled={!enabled} icon={<UploadOutlined />}>
        Click to Upload
      </Button>
    </Upload>
  );
};
export default UploadFileInput;
