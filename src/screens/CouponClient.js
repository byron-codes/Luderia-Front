import React, { Component } from "react";
import Navbar from "../components/NavBar/NavBar";
import Container from "../components/Layout/Container";
import Grid from "../components/Layout/Grid";
import { Row, Pagination, Card } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import Table from "../components/Table/Table";

const options = [
  { value: "chocolate", label: "Galápagos" },
  { value: "strawberry", label: "Paper Games" },
  { value: "vanilla", label: "Arcano Games" }
];

const options2 = [
  { value: "chocolate", label: "Fácil" },
  { value: "strawberry", label: "Médio" },
  { value: "vanilla", label: "Díficil" },
  { value: "vanilla2", label: "Especialista" }
];

export default class CouponClient extends Component {
  state = {
    rows: [
      <tr className="table-light mouse-click">
        <td scope="row" className="font-weight-bold">
          DES20CONTO
        </td>
        <td>1</td>
        <td>R$ 20,00</td>
        <td>20/03/2020</td>
      </tr>,
      <tr className="table-light mouse-click">
      <td scope="row" className="font-weight-bold">
        RET32ORNO
      </td>
      <td>2</td>
      <td>R$ 32,00</td>
      <td>14/05/2020</td>
    </tr>
      
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Container class="mt-100">
          <Row className="d-flex justify-content-center">
            <Grid cols="10 10 10 10">
              <div className="mb-3">
                <Row>
                  <Grid cols="4 4 4 4" class="d-flex">
                    <label className="mb-0 d-flex align-items-center">
                      2 itens
                    </label>
                  </Grid>
                  <Grid cols="8 8 8 8">
                    <div className="row d-flex justify-content-end">
                      <Grid
                        cols="6 6 6 6"
                        class="d-flex p-0 justify-content-end mr-3"
                      >
                        <label className="mr-2 mb-0 d-flex align-items-center">
                          itens por página
                        </label>
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                          style={{ width: "75px" }}
                        >
                          <option value="1" defaultValue>
                            12
                          </option>
                          <option value="2">26</option>
                          <option value="3">36</option>
                        </select>
                      </Grid>
                      <Grid cols="3 3 3 3" class="d-flex justify-content-end">
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                          style={{ width: "150px" }}
                        >
                          <option value="1" defaultValue>
                            finalizado
                          </option>
                          <option value="2">em andamento</option>
                          <option value="3">processo de troca</option>
                        </select>
                      </Grid>
                    </div>
                  </Grid>
                </Row>
              </div>
              <Table
                head={["Código", "Quantidade", "Valor", "Data de vencimento"]}
                rows={this.state.rows}
              ></Table>
              <div className="mt-3 mb-5">
                <Row>
                  <Grid
                    cols="12 12 12 12"
                    class="d-flex justify-content-center"
                  >
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Ellipsis />

                      <Pagination.Item>{10}</Pagination.Item>
                      <Pagination.Item>{11}</Pagination.Item>
                      <Pagination.Item active>{12}</Pagination.Item>
                      <Pagination.Item>{13}</Pagination.Item>
                      <Pagination.Item>{14}</Pagination.Item>

                      <Pagination.Ellipsis />
                      <Pagination.Item>{20}</Pagination.Item>
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
                  </Grid>
                </Row>
              </div>
            </Grid>
          </Row>
        </Container>
        <Footer fix></Footer>
      </React.Fragment>
    );
  }
}
