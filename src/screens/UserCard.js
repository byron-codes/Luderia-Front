import React, { Component } from "react";
import Container from "../components/Layout/Container";
import { Row, Button } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import Carousel from "react-bootstrap/Carousel";
import SmallBox from "../components/Box/SmallBox";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import LabelAndInput from "../components/Field/LabelAndInput";
import CheckBox from "../components/Checkbox/CheckBox";
import axios from "axios";
import { baseURL } from "../endpoints";
import swal from "sweetalert";

const initialState = {
  cards: [],
  number: "",
  name: "",
  validate: "",
  cvv: ""
};

export default class UserCard extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
    this.getCard = this.getCard.bind(this);
    this.save = this.save.bind(this);
    this.getCard();
  }

  setAttr(target, value) {
    const temp = [];
    temp[target] = value;
    this.setState({
      ...temp
    });
  }

  getCard() {
    axios.get(`${baseURL}/credit-card`).then(
      result => {
        this.setState({ cards: result.data });
      },
      error => console.log(error)
    );
  }

  save() {
    axios.post(`${baseURL}/credit-card`, this.state).then(
      result =>
        axios
          .put(
            `${baseURL}/user/${this.props.match.params.id}/card/${result.data.id}`
          )
          .then(result =>
            swal(
              "Sucesso",
              "O seu cadastro foi efetuado com sucesso",
              "success"
            ).then(result => {
              window.location = `/user/${this.props.match.params.id}/cards`;
            })
          ),

      error => console.log(error)
    );
  }

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
                    {this.state.cards.map(card => (
                      <Grid cols="3 3 3 3">
                        <SmallBox
                          title={`XXXX XXXX XXXX ${card.number.substr(12)}`}
                          text={card.name}
                          icon="far fa-credit-card marsala-icon"
                          color="m-0"
                          nohref
                        ></SmallBox>
                      </Grid>
                    ))}
                  </div>
                </div>
                <div className="card-body">
                  <Row className="d-flex justify-content-center">
                    <label>Cadastrar um novo cartão</label>
                  </Row>
                  <Row>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="Número do cartão"
                      name="number"
                      onChange={this.setAttr}
                      value={this.state.number}
                    ></LabelAndInput>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="Nome do títular"
                      name="name"
                      onChange={this.setAttr}
                      value={this.state.name}
                    ></LabelAndInput>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="Vencimento"
                      name="validate"
                      onChange={this.setAttr}
                      value={this.state.validate}
                    ></LabelAndInput>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="CVV"
                      name="cvv"
                      onChange={this.setAttr}
                      value={this.state.cvv}
                    ></LabelAndInput>
                  </Row>
                  <Row>
                    <Grid cols="10 10 10 10" class="d-flex justify-content-end">
                      <CheckBox text="Salvar como favorito"></CheckBox>
                    </Grid>
                    <Grid cols="2 2 2 2" class="d-flex justify-content-end">
                      <Button variant="outline-success" onClick={this.save}>
                        Cadastrar
                      </Button>
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
