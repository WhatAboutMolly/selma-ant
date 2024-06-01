import React, { useState, useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import dayjs from "dayjs";

const dateFormatList = ["DD/MM/YYYY"];
const UploadFacture = ({ ...props }) => {
  const { form, field, enabled } = props;
  const [status, setStatus] = useState(false);
  const [file, setFile] = useState("");
  useEffect(() => {
    if (status) {
      message.success(`${file} file uploaded successfully`);
    }
  }, [status]);

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
      form.setFieldValue(field, info.file.name);
      info.file.status = "done";
      setFile(info.file.name);
      setStatus(true);

      let parts = info.file.name.split("-");
      let tempdate = parts[parts.length - 1].split(".");
      let formattedDate = tempdate[2] + "-" + tempdate[1] + "-" + tempdate[0];

      form.setFieldValue("numFac", parts[0].substring(1));
      form.setFieldValue("frCL", parts[1]);

      console.log(formattedDate);

      form.setFieldValue("dateFac", dayjs(formattedDate));

      let str = parts[0];

      if (str.charAt(0) === "A") {
        form.setFieldValue("journaux", "Achat");
      } else if (str.charAt(0) === "V") {
        form.setFieldValue("journaux", "Vente");
      } else if (str.charAt(0) === "B") {
        form.setFieldValue("journaux", "Banque");
      }
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
export default UploadFacture;
