import React from "react";
import { Badge, Calendar } from "antd";
import "./ui.css";
import { useSelector } from "react-redux";
import { getArchive } from "../features/archive/archiveSlice";

const getMonthData = (value, G50) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  if (value.month() < currentMonth) {
    const dec_mois = G50.filter((dec) => dec.mois === value.month());

    if (dec_mois.length > 0) return 0;
    else return -1;
  } else if (value.month() === currentMonth) {
    const dec_mois = G50.filter((dec) => dec.mois === value.month());

    if (dec_mois.length > 0) return 0;
    else {
      const currentDay = currentDate.getDate();
      console.log(currentDay);
      if (currentDay > 20) return -1;
      else return 20 - currentDay;
    }
  }
};
const DFCalendar = () => {
  const archive = useSelector(getArchive);
  const G50 = archive.filter((a) => a.declaration == "G50");
  console.log(G50);

  const monthCellRender = (value) => {
    const num = getMonthData(value, G50);
    if (num === -1)
      return (
        <div className="notes-month">
          <span>Late</span>
        </div>
      );
    if (num === 0)
      return (
        <div className="notes-month">
          <span>Done</span>
        </div>
      );
    if (num > 0)
      return (
        <div className="notes-month">
          <span>{num} Days</span>
        </div>
      );
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
