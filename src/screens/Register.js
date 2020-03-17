import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import "../imports";
import Input from "../components/Field/Input";
import FooterPaint from "../components/Footer/FooterPaint";
import { baseURL } from "../endpoints";
import swal from "sweetalert";
import axios from "axios";
import { cpfMask, cpfUnMask } from "../mask";

const initialState = {
  name: { value: "", errors: [] },
  email: { value: "", errors: [] },
  nickname: { value: "", errors: [] },
  cpf: { value: "", errors: [] },
  password: { value: "", errors: [] },
  confirmPassword: { value: "", errors: [] }
};

export default class Register extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
    this.save = this.save.bind(this);
  }

  setAttr(target, value) {
    const temp = [];
    temp[target] = this.state[target];
    temp[target].value = value;
    this.setState({
      ...temp
    });
  }

  save() {
    const newState = [];

    for (var item in this.state) {
      newState[item] = { value: this.state[item].value, errors: [] };
    }

    this.setState({ ...newState });

    const items = {
      name: this.state.name.value,
      email: this.state.email.value,
      nickname: this.state.nickname.value,
      cpf: this.state.cpf.value.replace(/[^\d]+/g, ""),
      password: this.state.password.value,
      confirmPassword: this.state.confirmPassword.value
    };

    axios.post(`${baseURL}/user`, items).then(
      result =>
        swal(
          "Sucesso",
          "O seu cadastro foi efetuado com sucesso",
          "success"
        ).then(result => (window.location = "/")),
      error => {
        console.log(error.response.data.errors)
        error.response.data.errors.map(error => {
          const itemState = [];
          itemState[error.field] = this.state[error.field];
          itemState[error.field].errors.push(error.defaultMessage);
          this.setState({
            ...this.state,
            itemState
          });
        });
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="bg-marsala">
          <div className="d-flex justify-content-center">
            <div className="login-box">
              <div className="login-logo text-white">
                <i className="fas fa-dice-d20"></i>
                <h4>Taberna play</h4>
              </div>
              <div className="card">
                <div className="card-body">
                  <Row className="mb-2">
                    <Grid
                      cols="12 12 12 12"
                      class="d-flex justify-content-center"
                    >
                      <h4 className="text-marsala">Cadastre-se</h4>
                    </Grid>
                  </Row>
                  <Row>
                    <Input
                      name="name"
                      cols="12 12 12 12"
                      placeholder="nome"
                      type="text"
                      onChange={this.setAttr}
                      value={this.state.name.value}
                      errors={this.state.name.errors}
                      dataCy="name"
                    ></Input>
                  </Row>
                  <Row className="mt-2">
                    <Input
                      name="email"
                      cols="12 12 12 12"
                      placeholder="Email"
                      type="email"
                      onChange={this.setAttr}
                      value={this.state.email.value}
                      errors={this.state.email.errors}
                      dataCy="email"
                    ></Input>
                  </Row>
                  <Row>
                    <Input
                      name="nickname"
                      cols="12 12 12 12"
                      placeholder="Nickname"
                      type="text"
                      onChange={this.setAttr}
                      value={this.state.nickname.value}
                      errors={this.state.nickname.errors}
                      dataCy="nickname"
                    ></Input>
                  </Row>
                  <Row>
                    <Input
                      name="cpf"
                      cols="12 12 12 12"
                      placeholder="CPF"
                      onChange={this.setAttr}
                      value={this.state.cpf.value}
                      errors={this.state.cpf.errors}
                      dataCy="cpf"
                      mask={cpfMask}
                    ></Input>
                  </Row>
                  <Row>
                    <Input
                      name="password"
                      cols="12 12 12 12"
                      placeholder="Senha"
                      type="password"
                      onChange={this.setAttr}
                      value={this.state.password.value}
                      errors={this.state.password.errors}
                      dataCy="password"
                    ></Input>
                  </Row>
                  <Row>
                    <Input
                      name="confirmPassword"
                      cols="12 12 12 12"
                      placeholder="Confirmação de senha"
                      type="password"
                      onChange={this.setAttr}
                      value={this.state.confirmPassword.value}
                      errors={this.state.confirmPassword.errors}
                      dataCy="confirmPassword"
                    ></Input>
                  </Row>

                  <Row>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-start">
                      <Button variant="outline-warning">cancelar</Button>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <Button
                        variant="outline-success"
                        onClick={this.save}
                        data-cy="btn-save"
                      >
                        cadastrar
                      </Button>
                    </Grid>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterPaint fix></FooterPaint>
      </React.Fragment>
    );
  }
}
