import React, { useEffect, useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import Tsx_price from "./tsx_price";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TsxPrice = () => {
  const [tsxData, setTsxData] = useState([]);

  useEffect(() => {
    setTsxData(Tsx_price);
  }, []);

  const chartData = useMemo(() => {
    if (tsxData.length === 0) return { labels: [], datasets: [] };

    const price = tsxData.map((item) => item["Stock Movement"]);
    const years = Array.from({ length: tsxData.length }, (_, i) => `Month ${i + 1}`);

    return {
      labels: years,
      datasets: [
        {
          label: "Stock Movement",
          data: price,
          borderColor: "lightgreen", // Purple line
          backgroundColor: "rgba(0, 128, 128, 0.2)", // Light purple fill under the line
          tension: 0.4,
        },
      ],
    };
  }, [tsxData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white", // White legend text
        },
      },
      title: {
        display: true,
        text: "Stock Movement Over Time",
        color: "white", // White chart title
      },
    },
    scales: {
      x: {
        type: "category",
        grid: {
          color: "gray", // White grid lines for X-axis
        },
        ticks: {
          color: "white", // White tick labels for X-axis
        },
        title: {
          display: true,
          text: "Years",
          color: "white", // White title for X-axis
        },
      },
      y: {
        grid: {
          color: "white", // White grid lines for Y-axis
        },
        ticks: {
          color: "white", // White tick labels for Y-axis
        },
        title: {
          display: true,
          text: "Stock Movement",
          color: "white", // White title for Y-axis
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default TsxPrice;

