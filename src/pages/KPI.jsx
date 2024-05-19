import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import Chart from "chart.js/auto";

import { selectAllComptables } from "../features/comptables/comptableSlice";

function KPI() {
  const comptables = useSelector(selectAllComptables);

  const labels = comptables.map((c) => c.nom + " " + c.prenom);
  const values = comptables.map((c) => c.nbClients);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Nombre de client par comptable",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
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
  }, [comptables]);

  return (
    <div>
      <Col span={8}>
        <canvas id="myChart" width="150" height="150"></canvas>
      </Col>
    </div>
  );
}

export default KPI;
