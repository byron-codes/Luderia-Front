import React, { Component } from "react";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import Grid from "../components/Layout/Grid";
import { Row, Pagination, Card, Button } from "react-bootstrap";
import Table from "../components/Table/Table";
import Container from "../components/Layout/Container";
import Select from "react-select";
import LineChart, { generateChart } from "../components/Chart/LineChart";
import axios from "axios";
import { baseURL } from "../endpoints";

const labels = [
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
  "Dezembro",
];

const datasetsItems = [
  {
    label: "Jogos",
    backgroundColor: "rgba(87,12,67,0.8)",
    borderColor: "rgba(87,12,67,0.8)",
    fill: false,
    data: [],
  },
  {
    label: "Expansões",
    backgroundColor: "rgba(45,38,145,0.8)",
    borderColor: "rgba(45,38,145,0.8)",
    fill: false,
    data: [],
  },
  {
    label: "Acessórios",
    backgroundColor: "rgba(54,181,61,0.8)",
    borderColor: "rgba(54,181,61,0.8)",
    fill: false,
    data: [],
  },
];

const datasetsSalesChange = [
  {
    label: "Vendas",
    backgroundColor: "rgba(87,12,67,0.8)",
    borderColor: "rgba(87,12,67,0.8)",
    fill: false,
    data: [],
  },
  {
    label: "Trocas",
    backgroundColor: "rgba(45,38,145,0.8)",
    borderColor: "rgba(45,38,145,0.8)",
    fill: false,
    data: [],
  },
];
export default class Reports extends Component {
  state = {
    years: [],
    selected: {
      value: new Date().getFullYear().toString(),
      label: new Date().getFullYear().toString(),
    },
  };

  constructor(props) {
    super(props);
    this.getChart = this.getChart.bind(this);
  }

  componentWillMount() {
    for (let i = 2020; i < 2100; i++) {
      let years = this.state.years;
      years.push({ value: i.toString(), label: i.toString() });
      this.setState({ ...this.state, years });
    }
    this.getChart(new Date().getFullYear().toString());
  }

  forList(item) {
    let list = [];
    for (let i in item) {
      list.push(item[i]);
    }
    return list;
  }

  getChart(year) {
    axios.get(`${baseURL}/report/item-type?year=${year}`).then((result) => {
      for (let item in result.data) {
        switch (result.data[item].name) {
          case "GAME":
            datasetsItems[0].data = this.forList(result.data[item].values);
          case "EXPANSION":
            datasetsItems[1].data = this.forList(result.data[item].values);
          case "ACCESSORIES":
            datasetsItems[2].data = this.forList(result.data[item].values);
        }
      }

      generateChart("salesType", "Tipo de venda anuais", labels, datasetsItems);
    });

    axios.get(`${baseURL}/report/sale-change?year=${year}`).then((result) => {
      for (let item in result.data) {
        switch (result.data[item].name) {
          case "SALE":
            datasetsSalesChange[0].data = this.forList(
              result.data[item].values
            );
          case "CHANGE":
            datasetsSalesChange[1].data = this.forList(
              result.data[item].values
            );
        }
      }

      generateChart(
        "salesChange",
        "Vendas e trocas anuais",
        labels,
        datasetsSalesChange
      );
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper">
          <Container>
            <Row className="d-flex justify-content-center">
              <Grid cols="4 4 4 4">
                <Grid cols="12 12 12 12" class="text-center">
                  <label>Ano do realtório</label>
                </Grid>
                <Select
                  options={this.state.years}
                  placeholder="Selecione..."
                  value={this.state.selected}
                  isSearchable
                  onChange={(item) => {
                    this.setState({ ...this.state, selected: item });
                    this.getChart(item.value);
                  }}
                />
              </Grid>
              <Grid cols="12 12 12 12">
                <LineChart id="salesType"></LineChart>
                <LineChart id="salesChange"></LineChart>
              </Grid>
            </Row>
          </Container>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
