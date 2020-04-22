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
import { baseURL } from "../endpoints";
import { convertDate, doubleToReal } from "../util/converters";

export default class Devolutions extends Component {
  state = { rows: "" };
  componentDidMount() {
    axios.get(`${baseURL}/sale-change`).then((result) => {
      this.setState({
        rows: result.data.map((item) => {
          let total = 0;
          let totalItems = 0;
          item.items.forEach((itemIn) => {
            total += itemIn.product.value * itemIn.quantity;
            totalItems += itemIn.quantity;
          });
          return (
            <tr key={item.id}>
              <td className="font-weight-bold">{`#${item.id}`}</td>
              <td>{`${totalItems} Items`}</td>
              <td>{doubleToReal(total)}</td>
              <td>{convertDate(item.creationDate, true)}</td>
              <td style={{ width: "150px" }}>
                {this.returnButton(item.changeStatus, item.id)}
              </td>
            </tr>
          );
        }),
      });
      configDatabase();
    });
  }

  returnButton(status, id) {
    switch (status) {
      case "PROCESSING":
        return (
          <Button
            variant="outline-success"
            href={`/admin/devolutions/actions/${id}`}
          >
            Vizualizar
          </Button>
        );
      case "SHIPMENT":
        return (
          <Button
            variant="outline-info"
            onClick={() =>
              axios
                .put(
                  `${baseURL}/sale-change/receive/${id}`
                )
                .then((result) =>
                  swal(
                    "Sucesso",
                    "Produto recebido e cupom gerado ao usuário",
                    "success"
                  ).then((value) => {
                    window.location = "/admin/devolutions";
                  })
                )
            }
          >
            Receber
          </Button>
        );
      case "FINISHED":
        return <Button variant="secondary">Finalizado</Button>;
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper mt-3">
          <Container>
            <Row className="d-flex justify-content-center">
              <Grid cols="12 12 12 12">
                <Table
                  head={["Código", "Quantidade", "Valor", "Data", "Ações"]}
                  rows={this.state.rows}
                  name="Trocas"
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
