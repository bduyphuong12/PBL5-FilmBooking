import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'

const Chart1 = () =>{
    return (
        <Bar height={250} width={430}
            data={{
              labels: [
                "Kimetsu No Yaiba",
                "Batman",
                "Jujutsu Kaisen",
                "Your Name",
                "Ironman",
                "The Flash",
                "Superman"
              ],
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
                  label: "Số vé bán ra",
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                  ],
                  data: [5000, 4700, 4200, 3700, 3000, 2800, 2100],
                  borderWidth: 1
                }
              ]
            }}
            options={{
              legend: { display: false },
              title: {
                display: true,
                text: "BIỂU ĐỒ PHIM BÁN CHẠY"
              }
            }}
          />
    )}
export default Chart1;