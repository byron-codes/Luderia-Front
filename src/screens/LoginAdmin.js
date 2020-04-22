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
  nickname: { value: "", errors: [] },
  password: { value: "", errors: [] },
};

export default class LoginAdmin extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
  }

  setAttr(target, value) {
    const temp = [];
    temp[target] = this.state[target];
    temp[target].value = value;
    this.setState({
      ...temp
    });
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
