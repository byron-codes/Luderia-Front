import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
import { Row, Button } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import axios from "axios";
import { baseURL } from "../endpoints";
import { doubleToReal } from "../util/converters";
import { cepMask } from "../mask";
import Input from "../components/Field/Input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addItem } from "../container/cartActions";
import swal from "sweetalert";
import LabelAndInput from "../components/Field/LabelAndInput";

const initialState = {
  id: 0,
  name: "",
  description: "",
  image: "",
  value: "",
  quantityStock: 0,
  cep: "",
  quantity: 1,
  shipment: {
    freight: 0,
    days: 0,
  },
};
class Item extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);
    this.calcFreight = this.calcFreight.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.setAttr = this.setAttr.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${baseURL}/product/${this.props.match.params.id}`)
      .then((result) => {
        console.log(result.data);
        this.setState({
          ...result.data,
          image: `${baseURL}/product/${result.data.id}/image`,
        });
      });
  }

  calcFreight() {
    if (this.state.cep.length === 9) {
      axios
        .get(`${baseURL}/freight/${this.state.cep.replace("-", "")}`)
        .then((result) => {
          console.log(result.data);
          this.setState({
            ...this.state,
            shipment: {
              freight: doubleToReal(result.data.freight),
              days: result.data.days,
            },
          });
        });
    }
  }

  addItemToCart() {
    if (this.state.quantity > this.state.quantityStock) {
      swal(
        "Muitos itens",
        "Infelizmente não temos essa quantidade de itens no estoque",
        "error"
      );
    } else {
      swal(
        "Produto adicionado",
        "Produto adicionado no carrinho com sucesso",
        "success"
      );
      this.props.addItem(this.state, this.state.quantity);
    }
  }

  setAttr(target, value) {
    const temp = this.state;
    temp[target] = value;
    this.setState({
      ...temp,
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100">
          <Row>
            <Grid cols="3 3 3 3">
              <div>
                <img
                  src={this.state.image}
                  style={{
                    maxWidth: "325px",
                    maxHeight: "325px",
                    minWidth: "325px",
                    minHeight: "325px",
                  }}
                ></img>
              </div>
            </Grid>
            <Grid cols="6 6 6 6">
              <label>{this.state.name}</label>
              <p>{this.state.description}</p>
            </Grid>
            <Grid cols="3 3 3 3">
              <div className="card">
                <div className="card-header">
                  <Row>
                    <Grid
                      cols="12 12 12 12"
                      class="d-flex justify-content-center"
                    >
                      <h4>{doubleToReal(this.state.value)}</h4>
                    </Grid>
                  </Row>
                </div>
                <div className="card-header">
                  <div className="form-group mb-0">
                    <label>Frete e prazo</label>
                    <Row>
                      <Input
                        name="cep"
                        cols="9 9 9 9"
                        placeholder="00000-000"
                        onChange={this.setAttr}
                        value={this.state.cep}
                        mask={cepMask}
                        dataCy="cep"
                      ></Input>
                      <Grid cols="3 3 3 3">
                        <Button
                          type="button"
                          variant="outline-primary"
                          onClick={this.calcFreight}
                          disabled={this.state.cep.length != 9 ? true : false}
                          data-cy="calculate"
                        >
                          OK
                        </Button>
                      </Grid>
                    </Row>
                    {this.state.shipment.freight === 0 ? (
                      <div></div>
                    ) : (
                      <div>
                        <Row>
                          <Grid cols="8 8 8 8">
                            <label>Valor do frete</label>
                          </Grid>
                          <Grid cols="4 4 4 4">
                            <label>{this.state.shipment.freight}</label>
                          </Grid>
                        </Row>
                        <Row>
                          <Grid cols="8 8 8 8">
                            <label>Tempo de entrega</label>
                          </Grid>
                          <Grid cols="4 4 4 4">
                            <label>{this.state.shipment.days} dias úteis</label>
                          </Grid>
                        </Row>
                        <div className="dropdown-divider"></div>
                      </div>
                    )}
                    <Row>
                      <Grid cols="8 8 8 8">
                        <label>Quantidade em estoque</label>
                      </Grid>
                      <Grid cols="4 4 4 4">
                        <label>{this.state.quantityStock}</label>
                      </Grid>
                    </Row>
                    <Row className="mt-3 mb-0">
                      <Grid cols="8 8 8 8">
                        <label>Quantidade</label>
                      </Grid>
                      <Input
                        cols="4 4 4 4"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.setAttr}
                        type="number"
                        max={this.state.quantityStock}
                        min="1"
                        dataCy="quantity-cart"
                      ></Input>
                    </Row>
                  </div>
                </div>
                <div className="card-header">
                  <Row>
                    <Grid
                      cols="12 12 12 12"
                      class="d-flex justify-content-center"
                    >
                      <Button
                        type="button"
                        variant="outline-primary"
                        onClick={() =>
                          this.state.quantityStock > 0
                            ? this.addItemToCart()
                            : swal(
                                "Sem estoque",
                                "Não temos o seu produto em estoque, mas assim que ele voltar te contamos, ok?",
                                "error"
                              )
                        }
                        data-cy="btn-addCart"
                      >
                        Adicionar ao carrinho
                      </Button>
                    </Grid>
                  </Row>
                </div>
              </div>
            </Grid>
          </Row>
        </Container>
        <Footer fix></Footer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
  coupon: state.cart.coupon,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addItem }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Item);
