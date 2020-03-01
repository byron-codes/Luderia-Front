import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import "../imports";
import Input from "../components/Field/Input";
import FooterPaint from "../components/Footer/FooterPaint";

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="bg-marsala">
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
                    <Input cols="12 12 12 12" placeholder="nome"></Input>
                  </Row>
                  <Row className="mt-2">
                    <Input cols="12 12 12 12" placeholder="email"></Input>
                  </Row>
                  <Row className="">
                    <Input cols="12 12 12 12" placeholder="nickname"></Input>
                  </Row>
                  <Row className="">
                    <Input cols="12 12 12 12" placeholder="CPF"></Input>
                  </Row>
                  <Row className="">
                    <Input cols="12 12 12 12" placeholder="senha"></Input>
                  </Row>
                  <Row className="">
                    <Input
                      cols="12 12 12 12"
                      placeholder="confirmar senha"
                    ></Input>
                  </Row>

                  <Row className="">
                    <Grid cols="6 6 6 6" class="d-flex justify-content-start">
                      <Button variant="outline-warning">cancelar</Button>
                    </Grid>
                    <Grid cols="6 6 6 6" class="d-flex justify-content-end">
                      <Button variant="outline-success">cadastrar</Button>
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
