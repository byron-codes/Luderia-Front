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
import ReactDatePicker from "react-datepicker";
import LabelAndInput from "../components/Field/LabelAndInput";

const type = [
  { value: "DAILY", label: "Diário" },
  { value: "MONTHLY", label: "Mensal" },
  { value: "YEARLY", label: "Anual" },
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
    items: {
      startDate: "2020-01-01",
      endDate: "2020-01-01",
      type: { value: "DAILY", label: "Diário" },
    },
    errors: {
      startDate: [],
      endDate: [],
    },
  };

  labels = [];

  constructor(props) {
    super(props);
    this.getChart = this.getChart.bind(this);
    this.setAttr = this.setAttr.bind(this);
  }

  componentWillMount() {
    for (let i = 2020; i < 2100; i++) {
      let years = this.state.years;
      years.push({ value: i.toString(), label: i.toString() });
      this.setState({ ...this.state, years });
    }
    this.getChart(
      this.state.items.startDate,
      this.state.items.endDate,
      this.state.items.type.value
    );
  }

  forList(item) {
    let list = [];
    this.labels = [];
    for (let i in item) {
      this.labels.push(i);
      list.push(item[i]);
    }
    return list;
  }

  setAttr(target, value) {
    const temp = this.state;
    temp.items[target] = value;
    this.setState({
      ...temp,
    });
  }

  getChart(startDate, endDate, type) {
    console.log(startDate, endDate, type);
    axios
      .get(
        `${baseURL}/report/item-type/period?startDate=${startDate}&endDate=${endDate}&type=${type}`
      )
      .then(
        (result) => {
          for (let item in result.data) {
            switch (result.data[item].name) {
              case "GAME":
                datasetsItems[0].data = this.forList(result.data[item].values);
                break;
              case "EXPANSION":
                datasetsItems[1].data = this.forList(result.data[item].values);
                break;
              case "ACCESSORIES":
                datasetsItems[2].data = this.forList(result.data[item].values);
                break;
            }
          }

          generateChart(
            "salesType",
            "Tipo de venda anuais",
            this.labels,
            datasetsItems
          );
        },
        (error) => {
          error.response.data.errors.map((error) => {
            this.state.errors[error.field].push(error.defaultMessage);
            this.setState({
              ...this.state,
            });
          });
        }
      );

    axios
      .get(
        `${baseURL}/report/sale-change/period?startDate=${startDate}&endDate=${endDate}&type=${type}`
      )
      .then(
        (result) => {
          for (let item in result.data) {
            switch (result.data[item].name) {
              case "SALE":
                datasetsSalesChange[0].data = this.forList(
                  result.data[item].values
                );
                break;
              case "CHANGE":
                datasetsSalesChange[1].data = this.forList(
                  result.data[item].values
                );
                break;
            }
          }

          generateChart(
            "salesChange",
            "Vendas e trocas anuais",
            this.labels,
            datasetsSalesChange
          );
        },
        (error) => {
          error.response.data.errors.map((error) => {
            this.state.errors[error.field].push(error.defaultMessage);
            this.setState({
              ...this.state,
            });
          });
        }
      );
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
                  <label>Período do realtório</label>
                </Grid>
              </Grid>
              <Grid cols="12 12 12 12">
                <Row>
                  <Grid cols="6 6 6 6" class="d-flex justify-content-center">
                    <LabelAndInput
                      name="startDate"
                      dataCy="startDate"
                      cols="12 6"
                      label="Data inicial"
                      type="date"
                      value={this.state.items.startDate}
                      errors={this.state.errors.startDate}
                      onChange={this.setAttr}
                    ></LabelAndInput>
                    <LabelAndInput
                      name="endDate"
                      dataCy="endDate"
                      cols="12 6"
                      label="Data inicial"
                      type="date"
                      value={this.state.items.endDate}
                      errors={this.state.errors.startDate}
                      onChange={this.setAttr}
                    ></LabelAndInput>
                  </Grid>
                  <Grid cols="6 6 6 6" class="d-flex justify-content-center">
                    <Grid cols="6 6 6 6">
                      <label>Tipo do relatório</label>
                      <div data-cy="reportType">
                        <Select
                          options={type}
                          placeholder="Selecione..."
                          value={this.state.items.type}
                          onChange={(item) => {
                            this.state.items.type = item;
                            this.setState({
                              ...this.state,
                            });
                          }}
                        />
                      </div>
                    </Grid>
                    <Grid cols="6 6 6 6">
                      <div className="pt-2-rem">
                        <Button
                          onClick={() => {
                            this.getChart(
                              this.state.items.startDate,
                              this.state.items.endDate,
                              this.state.items.type.value
                            );
                          }}
                          data-cy="btn-report"
                        >
                          Pesquisar
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Row>
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
