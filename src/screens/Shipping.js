import React, { Component } from "react";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import Grid from "../components/Layout/Grid";
import { Row, Pagination, Card, Button } from "react-bootstrap";
import Table, { configDatabase } from "../components/Table/Table";
import Container from "../components/Layout/Container";
import swal from "sweetalert";
import axios from "axios";
import { doubleToReal, convertDate } from "../util/converters";
import { baseURL } from "../endpoints";

export default class Shipping extends Component {
  state = { rows: "" };
  componentDidMount() {
    axios.get(`${baseURL}/sale`).then((result) => {
      this.setState({
        rows: result.data.map((item) => (
          <tr key={item.id}>
            <td className="font-weight-bold">{`#${item.id}`}</td>
            <td>{`${item.items.length} Itens`}</td>
            <td>{doubleToReal(item.total)}</td>
            <td>{convertDate(item.creationDate, true)}</td>
            <td style={{ width: "150px" }}>
              <Button
                variant={this.generateOutline(item.saleStatus)}
                onClick={(e) =>
                  item.saleStatus !== "FINISHED" ||
                  item.saleStatus !== "EXCHANGE"
                    ? axios
                        .put(`${baseURL}/sale/status/${item.id}`, {
                          saleStatus: this.nextStatus(item.saleStatus),
                        })
                        .then((result) => {
                          swal(
                            "Compra categorizada",
                            `O status da compra foi atualizado para "${this.translate(
                              item.saleStatus
                            )}"`,
                            "success"
                          ).then((result) => window.location.reload());
                        })
                    : undefined
                }
                data-cy="btn-status"
              >
                {this.translate(item.saleStatus)}
              </Button>
            </td>
          </tr>
        )),
      });
      configDatabase();
    });
  }

  generateOutline(status) {
    switch (status) {
      case "PROCESSING":
        return "outline-success";
      case "SHIPMENT":
        return "outline-primary";
      case "FINISHED":
        return "secondary";
      case "EXCHANGE":
        return "warning";
      case "EXCHANGEFINISHED":
        return "secondary";
    }
  }

  translate(status) {
    switch (status) {
      case "PROCESSING":
        return "Despachado";
      case "SHIPMENT":
        return "Entregue";
      case "FINISHED":
        return "Finalizada";
      case "EXCHANGE":
        return "Em troca";
      case "EXCHANGEFINISHED":
        return "Troca finalizada";
    }
  }

  nextStatus(status) {
    switch (status) {
      case "PROCESSING":
        return "SHIPMENT";
      case "SHIPMENT":
        return "FINISHED";
      case "FINISHED":
        return "FINISHED";
      case "EXCHANGE":
        return "EXCHANGE";
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper mt-3">
          <Container>
            <Row>
              <Grid cols="12 12 12 12">
                <Table
                  name="Lista de compras"
                  head={[
                    "Código",
                    "Quantidade de itens",
                    "Total",
                    "Data",
                    "Status",
                  ]}
                  rows={this.state.rows}
                ></Table>
              </Grid>
            </Row>
          </Container>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
