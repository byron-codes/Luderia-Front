import React, { Component } from "react";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import Grid from "../components/Layout/Grid";
import { Row, Pagination, Card, Button } from "react-bootstrap";
import Table from "../components/Table/Table";
import Container from "../components/Layout/Container";
import swal from 'sweetalert'

export default class DevolutionsActions extends Component {
  state = {
    class1: "btn btn-outline-danger",
    class11: "mt-3 btn btn-outline-success",
    class2: "btn btn-outline-danger",
    class22: "mt-3 btn btn-outline-success",
    class3: "btn btn-outline-danger",
    class33: "mt-3 btn btn-outline-success"
  };
  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper mt-3">
          <Container>
            <Row>
              <Grid cols="4 4 4 4">
                <Card>
                  <div
                    className="mt-3 mb-3 d-flex"
                    style={{ marginLeft: "20px" }}
                  >
                    <div style={{ maxHeight: "100px", maxWidth: "100px" }}>
                      <img
                        src="https://storage.googleapis.com/ludopedia-capas/133_m.jpg"
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                      ></img>
                    </div>
                    <div className="ml-3">
                      <label>Ticket to ride - Europe</label>
                      <p className="font-weight-bold">R$700,00</p>
                    </div>
                    <div>
                      <button
                        variant="outline-danger"
                        style={{ width: "100px" }}
                        className={this.state.class1}
                        onClick={e =>
                          this.setState({
                            ...this.state,
                            class1: "btn btn-danger",
                            class11: "mt-3 btn btn-outline-success"
                          })
                        }
                      >
                        Negar
                      </button>
                      <button
                        variant="outline-danger"
                        style={{ width: "100px" }}
                        className={this.state.class11}
                        onClick={e =>
                          this.setState({
                            ...this.state,
                            class11: "mt-3 btn btn-success",
                            class1: "btn btn-outline-danger"
                          })
                        }
                      >
                        Autorizar
                      </button>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid cols="4 4 4 4">
                <Card>
                  <div
                    className="mt-3 mb-3 d-flex"
                    style={{ marginLeft: "20px" }}
                  >
                    <div style={{ maxHeight: "100px", maxWidth: "100px" }}>
                      <img
                        src="https://storage.googleapis.com/ludopedia-capas/133_m.jpg"
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                      ></img>
                    </div>
                    <div className="ml-3">
                      <label>Ticket to ride - Europe</label>
                      <p className="font-weight-bold">R$700,00</p>
                    </div>
                    <div>
                      <button
                        variant="outline-danger"
                        style={{ width: "100px" }}
                        className={this.state.class2}
                        onClick={e =>
                          this.setState({
                            ...this.state,
                            class2: "btn btn-danger",
                            class22: "mt-3 btn btn-outline-success"
                          })
                        }
                      >
                        Negar
                      </button>
                      <button
                        variant="outline-danger"
                        style={{ width: "100px" }}
                        className={this.state.class22}
                        onClick={e =>
                          this.setState({
                            ...this.state,
                            class22: "mt-3 btn btn-success",
                            class2: "btn btn-outline-danger"
                          })
                        }
                      >
                        Autorizar
                      </button>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid cols="4 4 4 4">
                <Card>
                  <div
                    className="mt-3 mb-3 d-flex"
                    style={{ marginLeft: "20px" }}
                  >
                    <div style={{ maxHeight: "100px", maxWidth: "100px" }}>
                      <img
                        src="https://storage.googleapis.com/ludopedia-capas/133_m.jpg"
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                      ></img>
                    </div>
                    <div className="ml-3">
                      <label>Ticket to ride - Europe</label>
                      <p className="font-weight-bold">R$700,00</p>
                    </div>
                    <div>
                      <button
                        variant="outline-danger"
                        style={{ width: "100px" }}
                        className={this.state.class3}
                        onClick={e =>
                          this.setState({
                            ...this.state,
                            class3: "btn btn-danger",
                            class33: "mt-3 btn btn-outline-success"
                          })
                        }
                      >
                        Negar
                      </button>
                      <button
                        variant="outline-danger"
                        style={{ width: "100px" }}
                        className={this.state.class33}
                        onClick={e =>
                          this.setState({
                            ...this.state,
                            class33: "mt-3 btn btn-success",
                            class3: "btn btn-outline-danger"
                          })
                        }
                      >
                        Autorizar
                      </button>
                    </div>
                  </div>
                </Card>
              </Grid>
            </Row>
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
                  onClick={e =>
                    swal(
                      "Sucesso",
                      "Processo de troca finalizado com sucesso",
                      "success"
                    ).then(value => {
                      window.location = "/admin/devolutions";
                    })
                  }
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
