import React, { Component } from "react";
import LabelAndInput from "../components/Field/LabelAndInput";
import { Row } from "react-bootstrap";
import Container from "../components/Layout/Container";
import axios from "axios";

const initialState = {
  name: "",
  value: 0,
  quantity: 0,
  expirationDate: ""
};

export default class Cupon extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
    this.save = this.save.bind(this);
  }

  setAttr(target, value) {
    const temp = [];
    temp[target] = value;
    this.setState({
      ...temp
    });
  }

  save() {
    axios.post("http://localhost:8080/coupon", this.state).then(result => console.log(result));
  }

  render() {
    return (
      <form>
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
              value={this.props.name}
            ></LabelAndInput>
            <LabelAndInput
              name="expirationDate"
              cols="12 6"
              label="Data de validade"
              readOnly={false}
              type="text"
              onChange={this.setAttr}
              value={this.props.expirationDate}
            ></LabelAndInput>
            <LabelAndInput
              name="quantity"
              cols="12 6"
              label="Quantidade"
              placeholder="Quantidade de cupons"
              readOnly={false}
              type="number"
              onChange={this.setAttr}
              value={this.props.quantity}
            ></LabelAndInput>
            <LabelAndInput
              name="value"
              cols="12 6"
              label="Valor"
              placeholder="Valor do cupom"
              readOnly={false}
              type="number"
              onChange={this.setAttr}
              value={this.props.value}
            ></LabelAndInput>
          </Row>
          <Row>
            <button type="button" className="btn btn-default">
              Cancelar
            </button>
            <button type="button" onClick={this.save} className="btn btn-success pull-right">
              Salvar
            </button>
          </Row>
        </Container>
      </form>
    );
  }
}
