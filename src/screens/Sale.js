import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
import { Row, Button } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import SmallBox from "../components/Box/SmallBox";
import CardExchange from "../components/Card/CardExchange";
import axios from "axios";
import { baseURL } from "../endpoints";
import { doubleToReal, convertDate } from "../util/converters";

const initialState = {
  freight: 0,
  total: 0,
  items: [],
  creditCard: {},
  address: {},
  coupon: {},
  saleStatus: "",
  canChange: false,
  totalItems: 1,
};

export default class Cart extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this);
    this.getItems();
  }

  getItems() {
    axios
      .get(`${baseURL}/sale/${this.props.match.params.id}`)
      .then((result) => {
        let totalItems = 0;
        result.data.items.forEach((item) => {
          totalItems += item.quantity;
        });
        this.setState({
          ...result.data,
          totalItems: totalItems,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100 mb-60">
          <Row>
            <Grid cols="9 9 9 9">
              <Row>
                {this.state.items.map((item) => (
                  <Grid cols="4 4 4 4">
                    <CardExchange
                      image={`${baseURL}/product/${item.product.id}/image`}
                      name={item.product.name}
                      value={doubleToReal(item.product.value)}
                      quantity={item.quantity}
                    ></CardExchange>
                  </Grid>
                ))}
              </Row>
            </Grid>
            <Grid cols="3 3 3 3">
              <div className="card">
                <div className="card-header">
                  <h4>Resumo do pedido</h4>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>Data da compra</label>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <label>{convertDate(this.state.creationDate, true)}</label>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>
                        {`${this.state.totalItems} `}
                        {this.state.totalItems === 1 ? "Produto" : "Produtos"}
                      </label>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <label>
                        {doubleToReal(
                          this.state.total -
                            this.state.freight +
                            (this.state.coupon ? this.state.coupon.value : 0)
                        )}
                      </label>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>Frete</label>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <label>{doubleToReal(this.state.freight)}</label>
                    </Grid>
                  </Row>
                  {this.state.coupon ? (
                    <Row>
                      <Grid cols="6 6 6 6">
                        <label>Cupom - {this.state.coupon.code}</label>
                      </Grid>
                      <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                        <label>{doubleToReal(this.state.coupon.value)}</label>
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
                      <label>{doubleToReal(this.state.total)}</label>
                    </Grid>
                  </Row>
                </div>
                <div className="card-body p-0">
                  <SmallBox
                    title={`XXXX XXXX XXXX ${
                      this.state.creditCard.number
                        ? this.state.creditCard.number.substr(12)
                        : "XXXX"
                    }`}
                    text={this.state.creditCard.name}
                    icon="far fa-credit-card marsala-icon"
                    nohref
                    class="m-0"
                    color="m-0 card-sale"
                    aclass="marsala-box"
                    href="/cart/card"
                  ></SmallBox>
                  <SmallBox
                    title={`${this.state.address.street}, ${this.state.address.number}`}
                    text={this.state.address.neighborhood}
                    icon="fas fa-map-marker-alt blue-icon"
                    nohref
                    color="m-0 card-sale"
                    aclass="blue-box"
                    href="/cart/address"
                    class="correct-card"
                  ></SmallBox>
                </div>
                {this.state.canChange ? (
                  <div className="card-footer correct-card">
                    <Button
                      variant="outline-warning"
                      href={`/sale/change/${this.state.id}`}
                      data-cy="btn-change"
                    >
                      Solicitar troca
                    </Button>
                  </div>
                ) : (
                  <div className="correct-card"></div>
                )}
              </div>
            </Grid>
          </Row>
        </Container>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
