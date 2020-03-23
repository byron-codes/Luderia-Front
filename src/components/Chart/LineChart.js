import React, { Component } from "react";
import $ from "jquery";
import jQuery from "jquery";
import Chart from "admin-lte/plugins/chart.js/Chart.min.js";

export default class LineChart extends Component {
  componentDidMount() {
    var areaChartData = {
      labels: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ],
      datasets: [
        {
          label: "Jogos",
          backgroundColor: "rgba(87,12,67,0.8)",
          borderColor: "rgba(87,12,67,0.8)",
          fill: false,
          data: [32, 16, 34, 65, 34, 64, 90, 100, 45, 14, 65, 45],
          yAxisID: "y-axis-1"
        },
        {
          label: "Expansões",
          backgroundColor: "rgba(45,38,145,0.8)",
          borderColor: "rgba(45,38,145,0.8)",
          fill: false,
          data: [4, 11, 47, 32, 68, 99, 70, 16, 63, 26, 65, 13]
        },
        {
          label: "Acessórios",
          backgroundColor: "rgba(54,181,61,0.8)",
          borderColor: "rgba(54,181,61,0.8)",
          fill: false,
          data: [47, 74, 6, 92, 48, 60, 18, 75, 23, 26, 17, 86],
          yAxisID: "y-axis-2"
        }
      ]
    };

    var areaChartOptions = {
      responsive: true,
      hoverMode: "index",
      stacked: false,
      title: {
        display: true,
        text: "Venda anual"
      },
      scales: {
        yAxes: [
          {
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1"
          },
          {
            type: "linear",
            display: true,
            position: "right",
            id: "y-axis-2"
          }
        ]
      }
    };

    var lineChartCanvas = $("#lineChart")
      .get(0)
      .getContext("2d");
    var lineChartOptions = jQuery.extend(true, {}, areaChartOptions);
    var lineChartData = jQuery.extend(true, {}, areaChartData);
    lineChartData.datasets[0].fill = false;
    lineChartData.datasets[1].fill = false;
    lineChartData.datasets[2].fill = false;
    lineChartOptions.datasetFill = false;

    // var lineChart = new Chart(lineChartCanvas, {
    //   type: "line",
    //   data: lineChartData,
    //   options: lineChartOptions
    // });
  }
  render() {
    return (
      <div className="chart">
        <canvas
          id="lineChart"
          style={{
            minHeight: "500px",
            height: "500px",
            maxHeight: "500px",
            maxWidth: "100%"
          }}
          className="chartjs-render-monitor"
        ></canvas>
      </div>
    );
  }
}
