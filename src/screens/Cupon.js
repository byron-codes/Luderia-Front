import React, { Component } from "react";
import LabelAndInput from "../components/Field/LabelAndInput";
import { Row } from "react-bootstrap";
import Container from "../components/Layout/Container";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import Select from "react-select";
import axios from "axios";
import swal from "sweetalert";
import { baseURL } from "../endpoints";
import FileBase64 from "react-file-base64";
import Grid from "../components/Layout/Grid";
import { convertDate } from "../util/converters";
import { realMask, realUnMask } from "../mask";

const initialState = {
  items: {
    id: 0,
    name: "",
    description: "",
    expirationDate: "",
    quantity: 0,
    value: "R$ 0,00",
    code: "",
  },
  errors: {
    name: [],
    description: [],
    expirationDate: [],
    quantity: [],
    value: [],
    code: [],
  },
};

export default class Cupon extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
    this.save = this.save.bind(this);
    this.get = this.get.bind(this);
    this.put = this.put.bind(this);
    if (this.props.match.params.id) {
      this.get();
    }
  }

  setAttr(target, value) {
    const temp = this.state;
    temp.items[target] = value;
    this.setState({
      ...temp,
    });
  }

  get() {
    axios.get(`${baseURL}/coupon/${this.props.match.params.id}`).then(
      (result) => {
        result.data.value = realMask(`${result.data.value}`);
        this.setState({ items: result.data });
      },
      (error) => console.log(error)
    );
  }

  save() {
    this.setState({
      items: { ...this.state.items },
      errors: { ...initialState.errors },
    });

    for (var item in this.state.errors) {
      this.state.errors[item] = [];
      this.setState({ ...this.state });
    }

    const body = this.state.items;
    body.expirationDate = convertDate(body.expirationDate);
    body.value = realUnMask(body.value);

    axios.post(`${baseURL}/coupon`, body).then(
      (result) =>
        swal("Sucesso", "O seu cadastro foi salvo com sucesso", "success").then(
          (result) => (window.location = `/admin/coupons`)
        ),
      (error) => {
        error.response.data.errors.map((error) => {
          this.state.items.value = realMask(this.state.items.value + "");
          this.state.errors[error.field].push(error.defaultMessage);
          this.setState({
            ...this.state,
          });
        });
      }
    );
  }

  put() {
    const body = this.state.items;
    body.expirationDate = convertDate(body.expirationDate);
    body.value = realUnMask(body.value);

    axios.put(`${baseURL}/coupon/${this.props.match.params.id}`, body).then(
      (result) =>
        swal(
          "Sucesso",
          "O seu cadastro foi atualizado com sucesso",
          "success"
        ).then((result) => (window.location = `/admin/coupons`)),
      (error) => {
        console.log(error.response);
        error.response.data.errors.map((error) => {
          this.state.errors[error.field].push(error.defaultMessage);
          this.setState({
            ...this.state,
          });
        });
      }
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
                  placeholder="Nome do cupom"
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.items.name}
                  errors={this.state.errors.name}
                  dataCy="name"
                ></LabelAndInput>
                <LabelAndInput
                  name="description"
                  cols="12 6"
                  label="Descrição"
                  placeholder="Descrição do cupom"
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.items.description}
                  errors={this.state.errors.description}
                  dataCy="description"
                ></LabelAndInput>
                <LabelAndInput
                  name="expirationDate"
                  cols="6 3"
                  label="Data de válidade"
                  placeholder="Data de válidade"
                  type="date"
                  onChange={this.setAttr}
                  value={this.state.items.expirationDate}
                  errors={this.state.errors.expirationDate}
                  dataCy="expirationDate"
                ></LabelAndInput>
                <LabelAndInput
                  name="quantity"
                  cols="6 3"
                  label="Quantidade"
                  placeholder="Quantidade de cupons"
                  type="number"
                  onChange={this.setAttr}
                  value={this.state.items.quantity}
                  errors={this.state.errors.quantity}
                  dataCy="quantity"
                ></LabelAndInput>
                <LabelAndInput
                  name="value"
                  cols="6 3"
                  label="Valor do cupom"
                  placeholder="Valor do produto"
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.items.value}
                  errors={this.state.errors.value}
                  mask={realMask}
                  dataCy="value"
                ></LabelAndInput>
                <LabelAndInput
                  name="code"
                  cols="6 3"
                  label="Código"
                  placeholder="Código do cupom"
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.items.code}
                  errors={this.state.errors.code}
                  dataCy="code"
                ></LabelAndInput>
              </Row>
              <Row className="mt-3">
                <Grid cols="6 6 6 6">
                  <button
                    type="button"
                    onClick={(e) => (window.location = "/admin/coupons")}
                    className="btn btn-default"
                  >
                    Cancelar
                  </button>
                </Grid>
                <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                  <button
                    type="button"
                    onClick={this.state.items.id !== 0 ? this.put : this.save}
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
