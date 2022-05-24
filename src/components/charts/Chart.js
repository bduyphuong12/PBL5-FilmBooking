import React from 'react';
import "./chart.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'

  const data = {
    labels: [
      "04/04/2022",
      "05/04/2022",
      "06/04/2022",
      "07/04/2022",
      "08/04/2022",
      "09/04/2022",
      "Hôm nay"],
    datasets: [
      {
        xAxes: [{
          type: 'time',
          position: 'bottom',
          time: {
            displayFormats: {'day': 'MM/YY'},
            tooltipFormat: 'DD/MM/YY',
            unit: 'month',
           }
        }],
        label: "Số tiền (nghìn Đồng)",
        data: [22000, 40000, 31000, 16000, 11000, 21000, 25000],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Trung bình (nghìn Đồng)",
        data: [22000, 22000, 22000, 22000, 22000, 22000, 22000],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  export default function Chart() {
  return (
    <div className="App">
      <Line data={data}/>
    </div>
  );
}