import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
import { Row, Button, Card } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import Select from "react-select";
import LabelAndInput from "../components/Field/LabelAndInput";
import Table from "../components/Table/Table";
import swal from "sweetalert";

const products = [
  { value: "chocolate", label: "Bloodborne" },
  { value: "vanilla", label: "Ticket to ride - Europe" }
];

const reason = [
  { value: "chocolate", label: "Produto danificado" },
  { value: "vanilla", label: "Produto incorreto" },
  { value: "vanilla2", label: "Produto incompleto" },
  { value: "strawberry", label: "Desistência" }
];

export default class SaleChange extends Component {
  state = {
    rows: [
      <tr className="table-light mouse-click">
        <td scope="row" className="font-weight-bold">
          Zombicide
        </td>
        <td>3 Itens</td>
        <td>Produto incompleto</td>
        <td>O produto veio faltando miniaturas</td>
      </tr>
    ]
  };
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100 mb-60">
          <Card>
            <Row className="ml-3 mr-3 mt-3">
              <Grid cols="3 3 3 3">
                <div>
                  <label>Produto</label>
                  <Select
                    options={products}
                    isSearchable
                    placeholder="Selecione..."
                  />
                </div>
              </Grid>
              <Grid cols="2 2 2 2">
                <div>
                  <LabelAndInput
                    label="Quantidade"
                    type="number"
                    value="1"
                  ></LabelAndInput>
                </div>
              </Grid>
              <Grid cols="3 3 3 3">
                <div>
                  <label>Motivo</label>
                  <Select
                    options={reason}
                    isSearchable
                    placeholder="Selecione..."
                  />
                </div>
              </Grid>
              <Grid cols="3 3 3 3">
                <div>
                  <LabelAndInput label="Descrição do problema"></LabelAndInput>
                </div>
              </Grid>
              <Grid
                cols="1 1 1 1"
                class="d-flex justify-content-center btn-change-sale"
              >
                <Button variant="outline-success">
                  <i className="fa fa-plus"></i>
                </Button>
              </Grid>
            </Row>
            <div className="dropdown-divider"></div>
            <Row>
              <Grid cols="12 12 12 12" class="pl-3 pr-3">
                <Table
                  head={["Nome", "Quantidade", "Motivo", "Descrição"]}
                  rows={this.state.rows}
                ></Table>
              </Grid>
            </Row>
            <Card.Footer className="d-flex justify-content-end">
              <Button
                variant="outline-warning"
                onClick={e =>
                  swal(
                    "Muito obrigado",
                    "Sua solicitação de troca será análisada em até 5 dias utéis",
                    "success"
                  ).then(value => {
                    window.location = "/sales"
                  })
                }
              >
                Solicitar troca
              </Button>
            </Card.Footer>
          </Card>
        </Container>
        <Footer fix></Footer>
      </React.Fragment>
    );
  }
}
