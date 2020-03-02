import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
import { Row, Button, Card } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import SmallBox from "../components/Box/SmallBox";

export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100 mb-60">
          <Row>
            <Grid cols="9 9 9 9">
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
                    </div>
                  </Card>
                </Grid>
              </Row>
            </Grid>
            <Grid cols="3 3 3 3">
              <div className="card">
                <div className="card-header">
                  <h4>Resumo do pedido</h4>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>3 produtos</label>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <label>R$280,00</label>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>Frete</label>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <label>R$32,00</label>
                    </Grid>
                  </Row>
                  <div className="dropdown-divider"></div>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>Total</label>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <label>R$312,00</label>
                    </Grid>
                  </Row>
                </div>
                <div className="card-body p-0">
                  <SmallBox
                    title="XXXX XXXX XXXX 1234"
                    text="Maria das marias"
                    icon="far fa-credit-card marsala-icon"
                    nohref
                    color="m-0 card-sale"
                    aclass="marsala-box"
                    href="/cart/card"
                  ></SmallBox>
                  <div className="dropdown-divider"></div>
                  <SmallBox
                    title="Rua XXXXX, 22"
                    text="Vila Maria"
                    icon="fas fa-map-marker-alt blue-icon"
                    nohref
                    color="m-0 card-sale"
                    aclass="blue-box"
                    href="/cart/address"
                  ></SmallBox>
                </div>
                <div className="card-footer">
                  <Button variant="outline-warning" href="/sale/change">Solicitar troca</Button>
                </div>
              </div>
            </Grid>
          </Row>
        </Container>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
