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

    if (dec_mois.length > 0) {
      console.log(dec_mois[0].jour);
      if (dec_mois[0].jour > 20)
        return { etat: "retard", jour: dec_mois[0].jour - 20 };
      else return { etat: "realisé" };
    } else return { etat: "non realisé" };
  } else if (value.month() === currentMonth) {
    const dec_mois = G50.filter((dec) => dec.mois === value.month());

    if (dec_mois.length > 0) return { etat: "realisé" };
    else {
      const currentDay = currentDate.getDate();
      console.log(currentDay);
      if (currentDay > 20) return { etat: "retard", jour: currentDay - 20 };
      else if (currentDay > 15 && currentDay <= 20)
        return { etat: "almost", jour: 20 - currentDay };
      else return { etat: "realisé" };
    }
  } else return { etat: "" };
};
const DFCalendar = () => {
  const archive = useSelector(getArchive);
  const G50 = archive.filter((a) => a.declaration == "G50");
  console.log(G50);

  const monthCellRender = (value) => {
    const result = getMonthData(value, G50);
    console.log(value.month(), result);
    if (result.etat === "non realisé")
      return (
        <div className="notes-month">
          <span>Non Realisé</span>
        </div>
      );
    if (result.etat === "realisé")
      return (
        <div className="notes-month realise">
          <span>Realisé à temps</span>
        </div>
      );
    if (result.etat === "retard")
      return (
        <div className="notes-month retard">
          <span>Realisé avec retard - {result.jour} jours</span>
        </div>
      );
    if (result.etat === "almost")
      return (
        <div className="notes-month almost">
          <span>{result.jour} jours avant le deadline</span>
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
      mode="year"
      onSelect={(date, { source }) => {
        if (source === "month") {
          console.log("Panel Select:", date);
        }
      }}
    />
  );
};
export default DFCalendar;
