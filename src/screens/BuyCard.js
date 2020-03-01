import React, { Component } from "react";
import Container from "../components/Layout/Container";
import { Row, Button } from "react-bootstrap";
import Grid from '../components/Layout/Grid'
import Carousel from "react-bootstrap/Carousel";
import SmallBox from '../components/Box/SmallBox'
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import LabelAndInput from "../components/Field/LabelAndInput";
import CheckBox from "../components/Checkbox/CheckBox";

export default class BuyCard extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100">
          <Row>
            <Grid cols="12 12 12 12">
              <div className="card">
                <div className="card-header">
                  <div className="row mb-3">
                    <Grid cols="3 3 3 3">
                      <SmallBox
                        title="XXXX XXXX XXXX 1234"
                        text="Maria das marias"
                        icon="far fa-credit-card marsala-icon"
                        actionText="Selecionar cartão"
                        color="m-0"
                        aclass="marsala-box"
                      ></SmallBox>
                    </Grid>
                    <Grid cols="3 3 3 3">
                      <SmallBox
                        title="XXXX XXXX XXXX 1234"
                        text="Maria das marias"
                        icon="far fa-credit-card marsala-icon"
                        actionText="Selecionar cartão"
                        color="m-0"
                        aclass="marsala-box"
                      ></SmallBox>
                    </Grid>
                    <Grid cols="3 3 3 3">
                      <SmallBox
                        title="XXXX XXXX XXXX 1234"
                        text="Maria das marias"
                        icon="far fa-credit-card marsala-icon"
                        actionText="Selecionar cartão"
                        color="m-0"
                        aclass="marsala-box"
                      ></SmallBox>
                    </Grid>
                    <Grid cols="3 3 3 3">
                      <SmallBox
                        title="XXXX XXXX XXXX 1234"
                        text="Maria das marias"
                        icon="far fa-credit-card marsala-icon"
                        actionText="Selecionar cartão"
                        color="m-0"
                        aclass="marsala-box"
                      ></SmallBox>
                    </Grid>
                  </div>
                </div>
                <div className="card-body">
                  <Row className="d-flex justify-content-center">
                    <label>Cadastrar um novo cartão</label>
                  </Row>
                  <Row>
                    <LabelAndInput cols="3 3 3 3" label="Número do cartão"></LabelAndInput>
                    <LabelAndInput cols="3 3 3 3" label="Nome do títular"></LabelAndInput>
                    <LabelAndInput cols="3 3 3 3" label="Vencimento"></LabelAndInput>
                    <LabelAndInput cols="3 3 3 3" label="CVV"></LabelAndInput>
                  </Row>
                  <Row>
                    <Grid cols="10 10 10 10" class="d-flex justify-content-end">
                      <CheckBox text="Salvar como favorito"></CheckBox>
                    </Grid>
                    <Grid cols="2 2 2 2" class="d-flex justify-content-end">
                      <Button variant="outline-success">Cadastrar e usar</Button>
                    </Grid>
                  </Row>
                </div>
              </div>
            </Grid>
            <Grid cols="6 6 6 6"></Grid>
          </Row>
        </Container>
        <Footer fix></Footer>
      </React.Fragment>
    );
  }
}
