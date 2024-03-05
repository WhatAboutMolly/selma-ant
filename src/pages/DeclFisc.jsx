import React from "react";
import DFCalendar from "../components/DFCalendar";

export default function DeclFisc() {
  return (
    <div className="home-container">
      <div className="header-container">
        <div className="header-container-img">
          <img src="/src/assets/header/decFisc2.svg" />
        </div>
      </div>
      <div>
        <DFCalendar />
      </div>
    </div>
  );
}
