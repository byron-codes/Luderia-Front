import React, { Component } from "react";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import Grid from "../components/Layout/Grid";
import { Row, Pagination, Card, Button } from "react-bootstrap";
import Table from "../components/Table/Table";
import Container from "../components/Layout/Container";
import swal from "sweetalert";
import CardDevolution from "../components/Card/CardDevolution";
import axios from "axios";
import { baseURL } from "../endpoints";
import { doubleToReal } from "../util/converters";

export default class DevolutionsActions extends Component {
  state = { rows: "" };

  constructor(props) {
    super(props);
    this.finish = this.finish.bind(this);
  }

  componentWillMount() {
    console.log(`${baseURL}/sale-change/${this.props.match.params.id}`);
    axios
      .get(`${baseURL}/sale-change/${this.props.match.params.id}`)
      .then((result) => {
        this.setState({
          rows: result.data.items.map((item) => (
            <Grid cols="4 4 4 4">
              <CardDevolution
                name={item.product.name}
                value={doubleToReal(item.product.value)}
                quantity={item.quantity}
                description={item.description}
                reason={this.enumChange(item.changeReason)}
                id={item.id}
                dataCyDeny="btn-deny"
                dataCyAllow="btn-allow"
              ></CardDevolution>
            </Grid>
          )),
        });
      });
  }

  enumChange(item) {
    switch (item) {
      case "DAMAGED":
        return "Produto danificado";
      case "INCORRECT":
        return "Produto incorreto";
      case "INCOMPLETE":
        return "Produto incompleto";
      case "WAIVER":
        return "Desistência";
    }
  }

  finish() {
    axios.put(`${baseURL}/sale-change/authorized/${this.props.match.params.id}`).then((result) =>
      swal(
        "Sucesso",
        "Status da troca atualizado com sucesso\nEnvio autorizado",
        "success"
      ).then((value) => {
        window.location = "/admin/devolutions";
      })
    );
  }

  render() {
    console.log(this.state.rows);
    return (
      <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper mt-3">
          <Container>
            <Row>{this.state.rows}</Row>
            <Row>
              <Grid cols="6 6 6 6">
                <Button
                  variant="outline-danger"
                  href="/admin/devolutions"
                  style={{ width: "150px" }}
                >
                  Voltar
                </Button>
              </Grid>
              <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                <Button
                  variant="outline-success"
                  style={{ width: "150px" }}
                  onClick={() => this.finish()}
                  data-cy="btn-change-finish"
                >
                  Finalizar trocas
                </Button>
              </Grid>
            </Row>
          </Container>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
