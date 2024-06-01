import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd/dist/antd";
import Chart from "chart.js/auto";
import { getArchive } from "../features/archive/archiveSlice";
import { selectAllComptables } from "../features/comptables/comptableSlice";
import { users } from "../../Data";

export default function KPI_NbClient() {
  const comptables = useSelector(selectAllComptables);
  const archives = useSelector(getArchive);

  const tempComp = users.filter((c) => c.role === "C");

  const clientCounts = {};
  archives.forEach(({ comptable, client }) => {
    if (!clientCounts[comptable]) {
      clientCounts[comptable] = new Set();
    }
    clientCounts[comptable].add(client);
  });

  console.log(clientCounts);

  const labels = tempComp.map((c) => c.nom);
  const tempvalues = Object.values(clientCounts);
  const values = tempvalues.map((v) => v.size);

  console.log(values);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Nombre de client par comptable",
        data: values,
        backgroundColor: [
          "#094074",
          "#772F1A",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
        borderColor: [
          "#094074",
          "#772F1A",
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
    type: "doughnut",
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
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
    const ctx = document.getElementById("myChart2").getContext("2d");
    const myChart = new Chart(ctx, config);
    return () => {
      myChart.destroy();
    };
  }, [users]);

  return (
    <Col span={8}>
      <canvas id="myChart2" width="150" height="150"></canvas>
    </Col>
  );
}
