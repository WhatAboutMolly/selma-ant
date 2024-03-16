import React from "react";
import { Badge, Calendar } from "antd";
import "./ui.css";
import { useSelector } from "react-redux";
import { selectG50 } from "../features/declaration fisc/decFiscSlice";

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const DFCalendar = () => {
  const G50 = useSelector(selectG50);
  console.log(G50);

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const cellRender = (current, info) => {
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return (
    <Calendar
      cellRender={cellRender}
      onSelect={(date, { source }) => {
        if (source === "month") {
          console.log("Panel Select:", date);
        }
      }}
    />
  );
};
export default DFCalendar;
