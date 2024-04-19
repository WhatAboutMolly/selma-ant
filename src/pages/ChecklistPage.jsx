import React, { useEffect } from "react";
import Checklist from "../components/Checklist";
import { Col, Row } from "antd";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { getChecklist } from "../features/checkList/checklistSlice";

export default function ChecklistPage() {
  const AllcheckList = useSelector(getChecklist);
  const G50 = AllcheckList["G50"];
  const nbDoneTasks = G50.filter((task) => task.done).length;
  const nbNotDoneTasks = G50.length - nbDoneTasks;

  const data = {
    labels: ["Réalisé", "Non Réalisé"],
    datasets: [
      {
        label: "Dataset 1",
        data: [nbDoneTasks, nbNotDoneTasks],
      },
    ],
  };
  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Pie Chart",
        },
      },
    },
  };

  useEffect(() => {
    // Get the canvas element
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, config);
    return () => {
      myChart.destroy();
    };
  }, [G50]);

  return (
    <Row>
      <Col span={12} style={{ display: "flex", flexDirection: "column" }}>
        <Checklist title="G50" />
      </Col>
      <Col span={8}>
        <canvas id="myChart" width="150" height="150"></canvas>
      </Col>
    </Row>
  );
}
