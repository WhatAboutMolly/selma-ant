import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import Chart from "chart.js/auto";
import { getArchive } from "../features/archive/archiveSlice";
import { selectAllComptables } from "../features/comptables/comptableSlice";
import { users } from "../../Data";

export default function KPI_Profit() {
  const archives = useSelector(getArchive);
  var Belkacemi = 0;
  var Beciri = 0;
  archives.forEach((a) => {
    if (a.client == "Belkacemi" && a.annee == "2024") Belkacemi++;
    if (a.client == "Beciri" && a.annee == "2024") Beciri++;
  });
  var data = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Belkacemi",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [25, 30, 32, 35, Belkacemi],
        fill: false,
      },
      {
        label: "Beciri",
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgb(54, 162, 235)",
        data: [10, 15, 11, 13, Beciri],
        fill: false,
      },
    ],
  };
  const config = {
    type: "line",
    data: data,
    options: {
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: "Répartition des clients par fréquence de collaboration",
          position: "bottom",
        },
      },
      scales: {
        y: {
          ticks: {
            callback: function (value, index, values) {
              if (Number.isInteger(value) && value > 0) {
                return value;
              }
              return null;
            },
          },
          beginAtZero: true,
        },
      },
    },
  };

  useEffect(() => {
    // Get the canvas element
    const ctx = document.getElementById("myChart3").getContext("2d");
    const myChart = new Chart(ctx, config);
    return () => {
      myChart.destroy();
    };
  }, [users]);
  return (
    <Col span={8}>
      <canvas id="myChart3" width="150" height="150"></canvas>
    </Col>
  );
}
