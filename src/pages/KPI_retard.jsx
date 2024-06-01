import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import Chart from "chart.js/auto";
import { getArchive } from "../features/archive/archiveSlice";
import { selectAllComptables } from "../features/comptables/comptableSlice";
import { users } from "../../Data";

export default function KPI_retard() {
  const archives = useSelector(getArchive);
  const comptables = useSelector(selectAllComptables);
  const tempComp = users.filter((c) => c.role === "C");
  const retardCounts = {};

  tempComp.forEach((user) => {
    retardCounts[user.code] = 0;
  });
  archives.forEach((archive) => {
    if (retardCounts[archive.comptable] !== undefined) {
      archive.jour > 20 && retardCounts[archive.comptable]++;
    }
  });

  //console.log(retardCounts);

  const labels = tempComp.map((c) => c.nom);
  const values = Object.values(retardCounts);

  //console.log(labels);
  //console.log(values);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Nombre de Retard",
        data: values,
        backgroundColor: ["#6A7B76", "#F67E7D"],
        borderColor: ["#6A7B76", "#F67E7D"],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Nombre de retard par comptable",
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
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, config);
    return () => {
      myChart.destroy();
    };
  }, [users]);

  return (
    <Col span={8}>
      <canvas id="myChart" width="150" height="150"></canvas>
    </Col>
  );
}
