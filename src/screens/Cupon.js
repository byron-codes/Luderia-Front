import React, { Component } from "react";
import LabelAndInput from "../components/Field/LabelAndInput";
import { Row } from "react-bootstrap";
import Container from "../components/Layout/Container";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import Grid from "../components/Layout/Grid";
import { baseURL } from "../endpoints";
import swal from "sweetalert";
import axios from "axios";

const initialState = {
  name: "",
  value: 0,
  quantity: 0,
  expirationDate: "",
  code: "",
  description: ""
};

export default class Cupon extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id !== undefined) {
      axios.get(`${baseURL}/coupon/${this.props.match.params.id}`).then(result =>
        this.setState({
          ...result.data
        })
      );
    }
    console.log(this.state);
  }

  setAttr(target, value) {
    const temp = [];
    temp[target] = value;
    this.setState({
      ...temp
    });
  }

  save() {
    axios.post(`${baseURL}/coupon`, this.state).then(
      result =>
        swal("Sucesso", "Cadastro de cupom efetuado com sucesso", "success"),
      error => console.log(error)
    );
  }

  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper">
          <div className="m-3">
            <Container>
              <Row>
                <LabelAndInput
                  name="name"
                  cols="12 6"
                  label="Nome"
                  placeholder="Nome do cupon"
                  readOnly={false}
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.name}
                  dataCy="name"
                ></LabelAndInput>
                <LabelAndInput
                  name="expirationDate"
                  cols="12 6"
                  label="Data de validade"
                  readOnly={false}
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.expirationDate}
                  dataCy="expirationDate"
                ></LabelAndInput>
                <LabelAndInput
                  name="quantity"
                  cols="12 6"
                  label="Quantidade"
                  placeholder="Quantidade de cupons"
                  readOnly={false}
                  type="number"
                  onChange={this.setAttr}
                  value={this.state.quantity}
                  dataCy="quantity"
                ></LabelAndInput>
                <LabelAndInput
                  name="value"
                  cols="12 6"
                  label="Valor"
                  placeholder="Valor do cupom"
                  readOnly={false}
                  type="number"
                  onChange={this.setAttr}
                  value={this.state.value}
                  dataCy="value"
                ></LabelAndInput>
                <LabelAndInput
                  name="description"
                  cols="12 6"
                  label="Descrição"
                  placeholder="Descrição de cupons"
                  readOnly={false}
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.description}
                  dataCy="description"
                ></LabelAndInput>
                <LabelAndInput
                  name="code"
                  cols="12 6"
                  label="Código"
                  placeholder="Código do cupom"
                  readOnly={false}
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.code}
                  dataCy="code"
                ></LabelAndInput>
              </Row>
              <Row>
                <Grid cols="6 6 6 6">
                  <button type="button" className="btn btn-default">
                    Cancelar
                  </button>
                </Grid>
                <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                  <button
                    type="button"
                    onClick={this.save}
                    className="btn btn-success pull-right"
                    data-cy="btn-save"
                  >
                    Salvar
                  </button>
                </Grid>
              </Row>
            </Container>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
