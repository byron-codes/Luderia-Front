import React, { Component } from "react";
import Container from "../components/Layout/Container";
import { Row } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import SmallBox from "../components/Box/SmallBox";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import axios from "axios";
import { doubleToReal, convertDate } from "../util/converters";
import { baseURL } from "../endpoints";
import Table, { configDatabase } from "../components/Table/Table";

export default class Dashboard extends Component {
  state = { rows: "", changes: 0, sales: 0, users: 0 };

  componentDidMount() {
    axios.get(`${baseURL}/sale`).then((result) => {
      this.setState({
        rows: result.data.map((item) => {
          let total = 0;
          item.items.forEach((item) => {
            total += item.quantity;
          });
          return (
            <tr key={item.id}>
              <td className="font-weight-bold" data-cy="item-row">
                {`#${item.id}`}
              </td>
              <td>{`${total} Produtos`}</td>
              <td>{doubleToReal(item.total || 0)}</td>
              <td>{convertDate(item.creationDate, true)}</td>
              <td>
                <div
                  className={`link-table ${this.generateClass(
                    item.saleStatus
                  )}`}
                >
                  {this.translate(item.saleStatus)}
                </div>
              </td>
            </tr>
          );
        }),
      });
      configDatabase();
    });
    axios
      .get(`${baseURL}/sale-change?changeStatus=PROCESSING`)
      .then((result) => {
        this.setState({ ...this.state, changes: result.data.length });
      });
    axios.get(`${baseURL}/sale?saleStatus=PROCESSING`).then((result) => {
      this.setState({ ...this.state, sales: result.data.length });
    });
    axios.get(`${baseURL}/user`).then((result) => {
      this.setState({ ...this.state, users: result.data.length });
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
      case "EXCHANGEFINISHED":
        return "text-success";
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
      case "EXCHANGEFINISHED":
        return "Troca finalizada";
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper">
          <div className="m-3">
            <Container>
              <Row>
                <Grid cols="12 4">
                  <SmallBox
                    text={
                      <Container>
                        <Row>
                          <Grid cols="12 12 12 12" class="m-0 p-0">
                            <label className="dashboard-card-title">
                              {this.state.sales}
                            </label>
                          </Grid>
                          <Grid cols="12 12 12 12" class="m-0 p-0">
                            <label className="dashboard-card-title">
                              Novas compras
                            </label>
                          </Grid>
                        </Row>
                      </Container>
                    }
                    pClass="m-0"
                    actionText="Visualizar compras"
                    class="m-0"
                    href="/admin/shipping"
                    icon="fas fa-shopping-bag"
                    iconClass="text-primary"
                    aclass="bg-primary"
                  ></SmallBox>
                </Grid>
                <Grid cols="12 4">
                  <SmallBox
                    text={
                      <Container>
                        <Row>
                          <Grid cols="12 12 12 12" class="m-0 p-0">
                            <label className="dashboard-card-title">{this.state.users}</label>
                          </Grid>
                          <Grid cols="12 12 12 12" class="m-0 p-0">
                            <label className="dashboard-card-title">
                              Usuários ativos
                            </label>
                          </Grid>
                        </Row>
                      </Container>
                    }
                    pClass="m-0"
                    actionText="Visualizar usuários"
                    class="m-0"
                    href="/admin/users"
                    icon="fas fa-user-plus"
                    iconClass="text-warning"
                    aclass="bg-warning"
                  ></SmallBox>
                </Grid>
                <Grid cols="12 4">
                  <SmallBox
                    text={
                      <Container>
                        <Row>
                          <Grid cols="12 12 12 12" class="m-0 p-0">
                            <label className="dashboard-card-title">
                              {this.state.changes}
                            </label>
                          </Grid>
                          <Grid cols="12 12 12 12" class="m-0 p-0">
                            <label className="dashboard-card-title">
                              Novas trocas
                            </label>
                          </Grid>
                        </Row>
                      </Container>
                    }
                    pClass="m-0"
                    actionText="Visualizar trocas"
                    class="m-0"
                    href="/admin/devolutions"
                    icon="fas fa-undo-alt"
                    iconClass="text-danger"
                    aclass="bg-danger"
                  ></SmallBox>
                </Grid>
              </Row>
              <Row className="mt-5">
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
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
