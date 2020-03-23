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

const initialState = {
  id: 0,
  name: "",
  description: "",
  image: "",
  value: "",
  cep: ""
};
class Item extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);
    this.calcFrete = this.calcFrete.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${baseURL}/product/${this.props.match.params.id}`)
      .then(result =>
        this.setState({
          ...result.data,
          image: `${baseURL}/product/${result.data.id}/image`
        })
      );
  }

  calcFrete(target, value) {
    if (value.length === 9) {
      axios
        .get(
          `http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=01451001&sCepDestino=${value.replace(
            "-",
            ""
          )}&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`
        )
        .then(result => console.log(result));
    }
    const temp = [];
    temp[target] = value;
    this.setState({
      ...temp
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
                    minHeight: "325px"
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
                  <div className="form-group">
                    <label>Frete e prazo</label>
                    <Row>
                      <Input
                        name="cep"
                        cols="9 9 9 9"
                        placeholder="00000-000"
                        onChange={this.calcFrete}
                        value={this.state.cep}
                        mask={cepMask}
                      ></Input>
                      <Grid cols="3 3 3 3">
                        <Button type="button" variant="outline-primary">
                          OK
                        </Button>
                      </Grid>
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
                        onClick={() => this.props.addItem(this.state)}
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

const mapStateToProps = state => ({
  items: state.cart.items,
  coupon: state.cart.coupon
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addItem }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Item);
