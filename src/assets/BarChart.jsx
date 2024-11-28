import React from 'react'
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
import { color } from 'framer-motion';

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const ComparitiveAnalysis = [
    {
      "10 Yr Treasury Return": 1306.45,
      "20 Yr Investment in Housing": 6003.34448160535,
      "TSX 20 Yr Returns": 2934.8409993986616,
    },
  ];

  const BarChart = () => {
    // Prepare labels and data
    const labels = Object.keys(ComparitiveAnalysis[0]);
    const dataValues = Object.values(ComparitiveAnalysis[0]);
  
    // Chart data configuration
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Comparative Analysis (Returns in %)",
          data: dataValues,
          backgroundColor: ["#4CAF50", "#FFC107", "#2196F3"],
          borderColor: ["#388E3C", "#FFA000", "#1976D2"],
          borderWidth: 1,
        },
      ],
    };
  
    // Chart options
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Comparative Analysis of Returns",
          color: 'white'
        },
      },
    };
  
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <Bar data={data} options={options} />
      </div>
    );
  };
  
  export default BarChart;
