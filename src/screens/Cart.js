import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
import { Row, Button } from "react-bootstrap";
import Grid from "../components/Layout/Grid";

export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100">
          <Row>
            <Grid cols="9 9 9 9" class="card">
              <div className="row mt-3">
                <Grid cols="2 2 2 2">
                  <div style={{ maxHeight: "100px", maxWidth: "100px" }}>
                    <img
                      src="https://storage.googleapis.com/ludopedia-capas/133_m.jpg"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    ></img>
                  </div>
                </Grid>
                <Grid cols="6 6 6 6">
                  <h3>Ticket to ride - Europe</h3>
                  <span className="font-weight-bold">R$700,00</span>
                </Grid>
                <Grid cols="2 2 2 2">
                  <div className="form-group">
                    <label>Quantidade de itens</label>
                    <Row>
                      <Grid cols="9 9 9 9">
                        <input
                          className="form-control"
                          placeholder="10"
                          type="number"
                          defaultValue="1"
                        ></input>
                      </Grid>
                      <Grid cols="3 3 3 3">
                        <Button type="button" variant="outline-primary">
                          Remover
                        </Button>
                      </Grid>
                    </Row>
                  </div>
                </Grid>
              </div>
              <div className="row mt-3">
                <Grid cols="2 2 2 2">
                  <div style={{ maxHeight: "100px", maxWidth: "100px" }}>
                    <img
                      src="https://storage.googleapis.com/ludopedia-capas/133_m.jpg"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    ></img>
                  </div>
                </Grid>
                <Grid cols="6 6 6 6">
                  <h3>Ticket to ride - Europe</h3>
                  <span className="font-weight-bold">R$700,00</span>
                </Grid>
                <Grid cols="2 2 2 2">
                  <div className="form-group">
                    <label>Quantidade de itens</label>
                    <Row>
                      <Grid cols="9 9 9 9">
                        <input
                          className="form-control"
                          placeholder="10"
                          type="number"
                          defaultValue="1"
                        ></input>
                      </Grid>
                      <Grid cols="3 3 3 3">
                        <Button type="button" variant="outline-primary">
                          Remover
                        </Button>
                      </Grid>
                    </Row>
                  </div>
                </Grid>
              </div>
              <div className="row mt-3">
                <Grid cols="2 2 2 2">
                  <div style={{ maxHeight: "100px", maxWidth: "100px" }}>
                    <img
                      src="https://storage.googleapis.com/ludopedia-capas/133_m.jpg"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    ></img>
                  </div>
                </Grid>
                <Grid cols="6 6 6 6">
                  <h3>Ticket to ride - Europe</h3>
                  <span className="font-weight-bold">R$700,00</span>
                </Grid>
                <Grid cols="2 2 2 2">
                  <div className="form-group">
                    <label>Quantidade de itens</label>
                    <Row>
                      <Grid cols="9 9 9 9">
                        <input
                          className="form-control"
                          placeholder="10"
                          type="number"
                          defaultValue="1"
                        ></input>
                      </Grid>
                      <Grid cols="3 3 3 3">
                        <Button type="button" variant="outline-primary">
                          Remover
                        </Button>
                      </Grid>
                    </Row>
                  </div>
                </Grid>
              </div>
            </Grid>
            <Grid cols="3 3 3 3">
              <div className="card">
                <div className="card-header">
                  <h4>Resumo do pedido</h4>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>3 produtos</label>
                    </Grid>
                    <Grid cols="6 6 6 6">
                      <label>R$50,00</label>
                    </Grid>
                  </Row>
                </div>
                <div className="card-body"></div>
              </div>
            </Grid>
          </Row>
        </Container>
        <Footer fix></Footer>
      </React.Fragment>
    );
  }
}
