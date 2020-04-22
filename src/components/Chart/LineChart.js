import React, { Component } from "react";
import $ from "jquery";
import jQuery from "jquery";
import Chart from "admin-lte/plugins/chart.js/Chart.min.js";
import axios from "axios";
import { baseURL } from "../../endpoints";

export default class LineChart extends Component {
  render() {
    return (
      <div className="chart">
        <canvas
          id={this.props.id}
          style={{
            minHeight: "500px",
            height: "500px",
            maxHeight: "500px",
            maxWidth: "100%",
          }}
          className="chartjs-render-monitor"
        ></canvas>
      </div>
    );
  }
}

export function generateChart(id, name, labels, datasets) {
  var areaChartData = {
    labels: labels,
    datasets: datasets,
  };

  var areaChartOptions = {
    responsive: true,
    hoverMode: "index",
    stacked: false,
    title: {
      display: true,
      text: name,
    },
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
        },
      ],
    },
  };

  // axios.get(`${baseURL}/report/item-type?year=${year}`).then((result) => {
    // let dataGames = []
    // let dataExpansion = []
    // let dataAccessories = []
    // for (let i = 1; i <= 12; i++) {
    //   dataGames.push(result.data.games.values[i])
    //   dataExpansion.push(result.data.expansions.values[i])
    //   dataAccessories.push(result.data.accessories.values[i])
    // }
    // areaChartData.datasets[0].data = dataGames;
    // areaChartData.datasets[1].data = dataExpansion;
    // areaChartData.datasets[2].data = dataAccessories;

    var lineChartCanvas = $(`#${id}`).get(0).getContext("2d");
    var lineChartOptions = jQuery.extend(true, {}, areaChartOptions);
    var lineChartData = jQuery.extend(true, {}, areaChartData);
    lineChartOptions.datasetFill = false;

    new Chart(lineChartCanvas, {
      type: "line",
      data: lineChartData,
      options: lineChartOptions,
    });
  // });
}