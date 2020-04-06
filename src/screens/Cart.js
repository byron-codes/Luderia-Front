import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
import { Row, Button, Card } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import SmallBox from "../components/Box/SmallBox";
import swal from "sweetalert";
import LabelAndInput from "../components/Field/LabelAndInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  removeItem,
  configQuantity,
  cleanCart
} from "../container/cartActions";
import { selectCoupon, cleanCoupon } from "../container/couponActions";
import CartRow from "../components/Card/CartRow";
import { doubleToReal } from "../util/converters";
import axios from "axios";
import { baseURL } from "../endpoints";

const initialState = {
  coupon: "",
  total: 0,
  shipment: { freight: 0, days: 0 }
};

class Cart extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
    this.save = this.save.bind(this);
    this.getFreight = this.getFreight.bind(this);
  }

  componentDidMount() {
    this.getFreight();
  }

  setAttr(target, value) {
    const temp = this.state;
    temp[target] = value;
    this.setState({
      ...temp
    });
  }

  save() {
    axios.post(`${baseURL}/sale`, this.props).then(result => {
      this.props.cleanCart();
      this.props.cleanCoupon();
      swal(
        "Muito obrigado",
        "Sua compra foi efetuada com succeso, seus itens estão em separação",
        "success"
      ).then(value => {
        window.location = "/";
      });
    });
  }

  getFreight() {
    axios
      .get(`${baseURL}/freight/${this.props.address.cep.replace("-", "")}`)
      .then(result => {
        this.setState({ ...this.state, shipment: { ...result.data } });
      });
  }

  render() {
    const {
      coupon,
      items,
      removeItem,
      configQuantity,
      creditCard,
      address
    } = this.props;
    const { shipment } = this.state;
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100">
          <Row>
            <Grid cols="9 9 9 9">
              {items.map(item => (
                <CartRow
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  value={item.value}
                  quantity={item.quantity}
                  onRemove={removeItem}
                  onChange={configQuantity}
                ></CartRow>
              ))}
            </Grid>
            <Grid cols="3 3 3 3">
              <div className="card">
                <div className="card-header">
                  <h4>Resumo do pedido</h4>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>{`${items.length} produtos`}</label>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <label>{doubleToReal(this.props.total)}</label>
                    </Grid>
                  </Row>
                  {coupon ? (
                    <Row>
                      <Grid cols="6 6 6 6">
                        <label>{`Cupom${
                          coupon.code ? ` - ${coupon.code}` : ``
                        }`}</label>
                      </Grid>
                      <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                        <label>{doubleToReal(coupon.value)}</label>
                      </Grid>
                    </Row>
                  ) : (
                    <div></div>
                  )}
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>Frete</label>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <label>{doubleToReal(shipment.freight || 0)}</label>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>Tempo de entrega</label>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <label>{shipment.days} dias úteis</label>
                    </Grid>
                  </Row>
                  <div className="dropdown-divider"></div>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <label>Total</label>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <label>
                        {doubleToReal(
                          this.props.total -
                            (coupon.value || 0) +
                            shipment.freight
                        )}
                      </label>
                    </Grid>
                  </Row>
                  <div className="dropdown-divider"></div>
                  <Row>
                    <Grid cols="6 6 6 6">
                      <LabelAndInput
                        name="coupon"
                        label="Cupom"
                        placeholder="Código"
                        type="text"
                        onChange={this.setAttr}
                        value={this.state.coupon}
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <Button
                        variant="outline-success"
                        style={{
                          height: "40px",
                          width: "80px",
                          marginTop: "30px"
                        }}
                        onClick={() =>
                          this.props.selectCoupon(this.state.coupon)
                        }
                      >
                        Aplicar
                      </Button>
                    </Grid>
                  </Row>
                </div>
                <div className="card-body p-0">
                  <SmallBox
                    title={`${
                      creditCard.number
                        ? `XXXX XXXX XXXX ${creditCard.number.substr(12)}`
                        : `XXXX XXXX XXXX XXXX`
                    }`}
                    text={creditCard.name || "Nenhum cartão selecionado"}
                    icon="far fa-credit-card"
                    iconClass="marsala-icon"
                    actionText={`${
                      creditCard.number ? "Trocar cartão" : "Selecionar cartão"
                    }`}
                    class="m-0"
                    aclass="marsala-box"
                    href="/user/0/cards"
                  ></SmallBox>
                  <SmallBox
                    title={`${
                      address.street
                        ? `${address.street}, ${address.number}`
                        : "XXXXX, XX"
                    }`}
                    text={address.neighborhood || "Nenhum endereço selecionado"}
                    icon="fas fa-map-marker-alt blue-icon"
                    actionText="Trocar endereço"
                    color="m-0"
                    aclass="blue-box"
                    href="/user/0/addresses"
                  ></SmallBox>
                </div>
                <div className="card-footer">
                  <Button variant="outline-success" onClick={() => this.save()}>
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

const mapStateToProps = state => ({
  items: state.cart.items,
  boo: state.cart.forceUpdate,
  creditCard: state.creditCard,
  address: state.address,
  coupon: state.coupon,
  total: state.cart.total,
  user: state.user
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { removeItem, configQuantity, selectCoupon, cleanCart, cleanCoupon },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
