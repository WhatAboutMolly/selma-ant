import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import Chart from "chart.js/auto";
import { getArchive } from "../features/archive/archiveSlice";
import { selectAllComptables } from "../features/comptables/comptableSlice";
import { users } from "../../Data";

export default function KPI_Profit() {
  const archives = useSelector(getArchive);
  var HP = 0;
  var BioPharma = 0;
  archives.forEach((a) => {
    if (a.client == "HP" && a.annee == "2024") HP++;
    if (a.client == "BioPharma" && a.annee == "2024") BioPharma++;
  });
  var data = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "HP",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [25, 30, 32, 35, HP],
        fill: false,
      },
      {
        label: "Biopharma",
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgb(54, 162, 235)",
        data: [10, 15, 11, 13, BioPharma],
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
          text: "Nombre de client par comptable",
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
