import React, { Component } from "react";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import Grid from "../components/Layout/Grid";
import { Row, Pagination, Card, Button } from "react-bootstrap";
import Table from "../components/Table/Table";
import Container from "../components/Layout/Container";
import swal from "sweetalert";
import axios from "axios";
import { doubleToReal, convertDate } from "../util/converters";
import { baseURL } from "../endpoints";

export default class Shipping extends Component {
  state = { rows: "" };
  componentDidMount() {
    axios.get("http://localhost:8080/sale").then(result => {
      this.setState({
        rows: result.data.map(item => (
          <tr key={item.id} data-cy={item.id}>
            <td className="font-weight-bold">{`#${item.id}`}</td>
            <td>{`${item.items.length} Itens`}</td>
            <td>{doubleToReal(item.total)}</td>
            <td>{convertDate(item.date, true)}</td>
            <td style={{ width: "150px" }}>
              <Button
                variant={this.generateOutline(item.saleStatus)}
                onClick={e =>
                  item.saleStatus !== "FINISHED" || item.saleStatus !== "EXCHANGE"
                    ? axios
                        .put(`${baseURL}/sale/status/${item.id}`, {
                          saleStatus: this.nextStatus(item.saleStatus)
                        })
                        .then(result => {
                          swal(
                            "Compra categorizada",
                            `O status da compra foi atualizado para "${this.translate(
                              item.saleStatus
                            )}"`,
                            "success"
                          ).then(result => window.location.reload());
                        })
                    : undefined
                }
              >
                {this.translate(item.saleStatus)}
              </Button>
            </td>
          </tr>
        ))
      });
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

  // state = {
  //   rows: [
  //     <tr className="table-light mouse-click">
  //       <td scope="row" className="font-weight-bold">
  //         <a href="/sale" className="link-table color-black">
  //           #241
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           3 Itens
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           R$ 300,00
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           01/12/19
  //         </a>
  //       </td>
  //       <td style={{ width: "150px" }}>
  //         <Button
  //           variant="outline-success"
  //           onClick={e =>
  //             swal(
  //               "Compra categorizada",
  //               'O status da compra foi atualizado para "Despachado"',
  //               "success"
  //             ).then(value => {
  //               window.location = "/admin/shipping";
  //             })
  //           }
  //         >
  //           Despachar
  //         </Button>
  //       </td>
  //     </tr>,
  //     <tr className="table-light mouse-click">
  //       <td scope="row" className="font-weight-bold">
  //         <a href="/sale" className="link-table color-black">
  //           #241
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           3 Itens
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           R$ 300,00
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           13/01/20
  //         </a>
  //       </td>
  //       <td style={{ width: "150px" }}>
  //         <Button
  //           variant="outline-success"
  //           onClick={e =>
  //             swal(
  //               "Compra categorizada",
  //               'O status da compra foi atualizado para "Despachado"',
  //               "success"
  //             ).then(value => {
  //               window.location = "/admin/shipping";
  //             })
  //           }
  //         >
  //           Despachar
  //         </Button>
  //       </td>
  //     </tr>,
  //     <tr className="table-light mouse-click">
  //       <td scope="row" className="font-weight-bold">
  //         <a href="/sale" className="link-table color-black">
  //           #241
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           3 Itens
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           R$ 300,00
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           20/02/20
  //         </a>
  //       </td>
  //       <td style={{ width: "150px" }}>
  //         <Button
  //           variant="outline-info"
  //           onClick={e =>
  //             swal(
  //               "Compra categorizada",
  //               'O status da compra foi atualizado para "Em separação"',
  //               "success"
  //             ).then(value => {
  //               window.location = "/admin/shipping";
  //             })
  //           }
  //         >
  //           Separação
  //         </Button>
  //       </td>
  //     </tr>,
  //     <tr className="table-light mouse-click">
  //       <td scope="row" className="font-weight-bold">
  //         <a href="/sale" className="link-table color-black">
  //           #241
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           3 Itens
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           R$ 300,00
  //         </a>
  //       </td>
  //       <td>
  //         <a href="/sale" className="link-table color-black">
  //           20/05/19
  //         </a>
  //       </td>
  //       <td style={{ width: "150px" }}>
  //         <Button
  //           variant="outline-secondary"
  //           onClick={e =>
  //             swal(
  //               "Compra categorizada",
  //               'O status da compra foi atualizado para "Entregue"',
  //               "success"
  //             ).then(value => {
  //               window.location = "/admin/shipping";
  //             })
  //           }
  //         >
  //           Entregue
  //         </Button>
  //       </td>
  //     </tr>
  //   ]
  // };
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
                    "Status"
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
