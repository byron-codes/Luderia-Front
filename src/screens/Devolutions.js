import React, { Component } from "react";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import Grid from "../components/Layout/Grid";
import { Row, Pagination, Card, Button } from "react-bootstrap";
import Table from "../components/Table/Table";
import Container from "../components/Layout/Container";
import swal from "sweetalert";

export default class Devolutions extends Component {
  state = {
    rows: [
      <tr className="table-light mouse-click">
        <td scope="row" className="font-weight-bold">
          <a href="/sale" className="link-table color-black">
            #241
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            3 Itens
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            R$ 300,00
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            01/12/19
          </a>
        </td>
        <td style={{ width: "150px" }}>
          <Button variant="outline-success" href="/admin/devolutions/actions">
            Vizualizar
          </Button>
        </td>
      </tr>,
      <tr className="table-light mouse-click">
        <td scope="row" className="font-weight-bold">
          <a href="/sale" className="link-table color-black">
            #241
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            3 Itens
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            R$ 300,00
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            13/01/20
          </a>
        </td>
        <td style={{ width: "150px" }}>
          <Button variant="outline-success" href="/admin/devolutions/actions">
            Vizualizar
          </Button>
        </td>
      </tr>,
      <tr className="table-light mouse-click">
        <td scope="row" className="font-weight-bold">
          <a href="/sale" className="link-table color-black">
            #241
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            3 Itens
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            R$ 300,00
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            20/02/20
          </a>
        </td>
        <td style={{ width: "150px" }}>
          <Button
            variant="outline-info"
            onClick={e =>
              swal(
                "Produto recebido",
                "O produto foi recebido e o cliente receberá o cupom de troca",
                "success"
              ).then(value => {
                window.location = "/admin/devolutions";
              })
            }
          >
            Receber produto
          </Button>
        </td>
      </tr>,
      <tr className="table-light mouse-click">
        <td scope="row" className="font-weight-bold">
          <a href="/sale" className="link-table color-black">
            #241
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            3 Itens
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            R$ 300,00
          </a>
        </td>
        <td>
          <a href="/sale" className="link-table color-black">
            20/05/19
          </a>
        </td>
        <td style={{ width: "150px" }}>
          <Button disabled variant="outline-secondary" href="/admin/devolutions/actions">
            Finalizada
          </Button>
        </td>
      </tr>
    ]
  };
  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper mt-3">
          <Container>
            <Row className="d-flex justify-content-center">
              <Grid cols="12 12 12 12">
                <div className="mb-3">
                  <Row>
                    <Grid cols="4 4 4 4" class="d-flex">
                      <label className="mb-0 d-flex align-items-center">
                        4 itens
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
                  head={["Código", "Quantidade", "Valor", "Data", "Ações"]}
                  rows={this.state.rows}
                ></Table>
                <div className="mt-3">
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
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
