import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
import { Row, Button, Card } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import SmallBox from "../components/Box/SmallBox";
import swal from "sweetalert";
import Input from "../components/Field/Input";
import LabelAndInput from "../components/Field/LabelAndInput";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

export default class Cart extends Component {
  state = { coupon: false };
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100">
          <Row>
            <Grid cols="9 9 9 9">
              <Card>
                <div className="row mt-3 mb-3">
                  <Grid cols="7 7 7 7">
                    <div style={{ marginLeft: "50px" }} className="d-flex">
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
                  </Grid>
                  <Grid cols="5 5 5 5">
                    <div className="form-group">
                      <label>Quantidade</label>
                      <Row>
                        <Grid cols="3 3 3 3">
                          <input
                            className="form-control"
                            placeholder="10"
                            type="number"
                            defaultValue="1"
                          ></input>
                        </Grid>
                        <Grid cols="3 3 3 3">
                          <Button type="button" variant="outline-danger">
                            <i class="fas fa-trash-alt"></i>
                          </Button>
                        </Grid>
                      </Row>
                    </div>
                  </Grid>
                </div>
              </Card>
              <Card>
                <div className="row mt-3 mb-3">
                  <Grid cols="7 7 7 7">
                    <div style={{ marginLeft: "50px" }} className="d-flex">
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
                  </Grid>
                  <Grid cols="5 5 5 5">
                    <div className="form-group">
                      <label>Quantidade</label>
                      <Row>
                        <Grid cols="3 3 3 3">
                          <input
                            className="form-control"
                            placeholder="10"
                            type="number"
                            defaultValue="1"
                          ></input>
                        </Grid>
                        <Grid cols="3 3 3 3">
                          <Button type="button" variant="outline-danger">
                            <i class="fas fa-trash-alt"></i>
                          </Button>
                        </Grid>
                      </Row>
                    </div>
                  </Grid>
                </div>
              </Card>
              <Card>
                <div className="row mt-3 mb-3">
                  <Grid cols="7 7 7 7">
                    <div style={{ marginLeft: "50px" }} className="d-flex">
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
                  </Grid>
                  <Grid cols="5 5 5 5">
                    <div className="form-group">
                      <label>Quantidade</label>
                      <Row>
                        <Grid cols="3 3 3 3">
                          <input
                            className="form-control"
                            placeholder="10"
                            type="number"
                            defaultValue="1"
                          ></input>
                        </Grid>
                        <Grid cols="3 3 3 3">
                          <Button type="button" variant="outline-danger">
                            <i class="fas fa-trash-alt"></i>
                          </Button>
                        </Grid>
                      </Row>
                    </div>
                  </Grid>
                </div>
              </Card>
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
                  {this.state.coupon ? (
                    <Row>
                      <Grid cols="6 6 6 6">
                        <label>Cupom</label>
                      </Grid>
                      <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                        <label>R$150,00</label>
                      </Grid>
                    </Row>
                  ) : (
                    <div></div>
                  )}
                  <div className="dropdown-divider"></div>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>Total</label>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <label>
                        {!this.state.coupon ? "R$312,00" : "R$162,00"}
                      </label>
                    </Grid>
                  </Row>
                  <div className="dropdown-divider"></div>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <LabelAndInput label="Cupom"></LabelAndInput>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <Button
                        variant="outline-success"
                        style={{ height: "40px", width: "80px", marginTop: "30px" }}
                        onClick={e => this.setState({ coupon: true })}
                      >
                        Aplicar
                      </Button>
                    </Grid>
                  </Row>
                </div>
                <div className="card-body p-0">
                  <SmallBox
                    title="XXXX XXXX XXXX 1234"
                    text="Maria das marias"
                    icon="far fa-credit-card"
                    iconClass="marsala-icon"
                    actionText="Trocar cartão"
                    class="m-0"
                    aclass="marsala-box"
                    href="/cart/card"
                  ></SmallBox>
                  <SmallBox
                    title="Rua XXXXX, 22"
                    text="Vila Maria"
                    icon="fas fa-map-marker-alt blue-icon"
                    actionText="Trocar endereço"
                    color="m-0"
                    aclass="blue-box"
                    href="/cart/address"
                  ></SmallBox>
                </div>
                <div className="card-footer">
                  <Button
                    variant="outline-success"
                    onClick={e =>
                      swal(
                        "Muito obrigado",
                        "Sua compra foi efetuada com succeso",
                        "success"
                      ).then(value => {
                        window.location = "/";
                      })
                    }
                  >
                    Finalizar compra
                  </Button>
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
