import React, { useState } from "react";
import { Checkbox, Col, Divider, Form, Row, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getChecklist } from "../features/checkList/checklistSlice";
import "./component.css";
import UploadFileInput from "./ui/UploadFile";
import { updateG50 } from "../features/checkList/checklistSlice";
import { addArchive } from "../features/archive/archiveSlice";

const CheckboxGroup = Checkbox.Group;
const Checklist = ({ ...props }) => {
  const { title } = props;

  const allCheckList = useSelector(getChecklist);
  let initialCheckList = allCheckList[title];
  const checkListOptions = initialCheckList.map((c) => c.tache);
  const initialCheckedOptions = initialCheckList
    .filter((c) => c.done)
    .map((c) => c.tache);

  console.log(initialCheckedOptions);
  const [checkedList, setCheckedList] = useState(initialCheckedOptions);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const checkAll = checkListOptions.length === checkedList.length;

  const indeterminate =
    checkedList.length > 0 && checkedList.length < checkListOptions.length;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? checkListOptions : []);
  };

  const onFinish = (values) => {
    console.log(checkedList);
    const newcChList = initialCheckList.map((task) => {
      if (checkedList.includes(task.tache)) {
        return { tache: task.tache, done: true };
      }
      return { tache: task.tache, done: false };
    });

    dispatch(updateG50(newcChList));
    dispatch(
      addArchive({
        fichier: "TacheFichier/Tache1.xlsx",
        comptable: "Ec_Selma",
        client: "Biopharma",
        date: "23/03/2024",
        numeroComptable: "C002",
      })
    );
  };

  return (
    <Form layout="vertical" form={form} name="form" onFinish={onFinish}>
      <Form.Item name="checboxGroup">
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Row>
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            >
              Check all
            </Checkbox>
          </Row>
          <Button type="primary" htmlType="submit">
            Enregistrer
          </Button>
        </Row>

        <CheckboxGroup
          options={checkListOptions}
          value={checkedList}
          onChange={onChange}
          style={{ display: "flex", flexDirection: "column" }}
        />
      </Form.Item>
      <Form.Item>
        <UploadFileInput enabled={checkAll} />
      </Form.Item>
      <Form.Item>
        <Row style={{ display: "flex" }}></Row>
      </Form.Item>
    </Form>
  );
};
export default Checklist;
