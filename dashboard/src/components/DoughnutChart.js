import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";


// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

export default function DoughnutChart({ data }) {
  return <Doughnut data={data} />;
}

