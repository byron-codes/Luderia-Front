import React, { Component } from "react";
import Navbar from "../components/NavBar/NavBar";
import Container from "../components/Layout/Container";
import Grid from "../components/Layout/Grid";
import { Row, Pagination, Card } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import Table from "../components/Table/Table";
import { doubleToReal, convertDate } from "../util/converters";
import axios from "axios";
import { baseURL } from "../endpoints";

export default class Itens extends Component {
  state = { rows: "" };

  componentDidMount() {
    axios.get(`${baseURL}/sale`).then(result => {
      this.setState({
        rows: result.data.map(item => (
          <tr key={item.id} data-cy={item.id}>
            <td className="font-weight-bold">
              <a
                href={`/sale/${item.id}`}
                className="link-table color-black"
              >{`#${item.id}`}</a>
            </td>
            <td>
              <a
                href={`/sale/${item.id}`}
                className="link-table color-black"
              >{`${item.items.length} Itens`}</a>
            </td>
            <td>
              <a href={`/sale/${item.id}`} className="link-table color-black">
                {doubleToReal(item.total || 0)}
              </a>
            </td>
            <td>
              <a href={`/sale/${item.id}`} className="link-table color-black">
                {convertDate(item.date, true)}
              </a>
            </td>
            <td>
              <a
                href={`/sale/${item.id}`}
                className={`link-table ${this.generateClass(item.saleStatus)}`}
              >
                {this.translate(item.saleStatus)}
              </a>
            </td>
          </tr>
        ))
      });
    });
  }

  generateClass(status) {
    switch (status) {
      case "PROCESSING":
        return "text-info";
      case "PAID":
        return "text-info";
      case "SHIPMENT":
        return "text-info";
      case "FINISHED":
        return "text-success";
      case "EXCHANGE":
        return "text-warning";
    }
  }

  translate(status) {
    switch (status) {
      case "PROCESSING":
        return "Em processamento";
      case "SHIPMENT":
        return "Em trânsito";
      case "FINISHED":
        return "Finalizada";
      case "EXCHANGE":
        return "Processo de troca";
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
  //       <td>
  //         <a href="/sale" className="link-table text-success">
  //           finalizado
  //         </a>
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
  //       <td>
  //         <a href="/sale" className="link-table text-info">
  //           em andamento
  //         </a>
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
  //       <td>
  //         <a href="/sale" className="link-table text-warning">
  //           processo de troca
  //         </a>
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
  //       <td>
  //         <a href="/sale" className="link-table text-success">
  //           finalizado
  //         </a>
  //       </td>
  //     </tr>
  //   ]
  // };
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Container class="mt-100 mb-60">
          <Row className="d-flex justify-content-center">
            <Grid cols="10 10 10 10">
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
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
