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
import { creditCardMask, validCardMask, numberMask } from "../mask";
import ItemBox from "../components/Box/ItemBox";

const initialState = {
  cards: [],
  number: "",
  name: "",
  expirationDate: "",
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

  delete(id) {
    axios.delete(`${baseURL}/credit-card?id=${id}`).then(
      result =>
        swal(
          "Sucesso",
          "O seu cartão foi deletado com sucesso",
          "success"
        ).then(result => {
          window.location.reload()
        }),
      error => console.log(error)
    );
  }

  save() {
    const body = this.state;
    body.number = body.number.replace(/[^\d]+/g, "");
    body.expirationDate = body.expirationDate.replace(/[^\d]+/g, "");
    body.cvv = body.cvv.replace(/[^\d]+/g, "");
    axios.post(`${baseURL}/credit-card`, body).then(
      result =>
        axios
          .put(
            `${baseURL}/user/${this.props.match.params.id}/card/${result.data.id}`
          )
          .then(resultUser =>
            swal(
              "Sucesso",
              "O seu cartão foi cadastrado com sucesso",
              "success",
              {
                content: {
                  element: "input",
                  attributes: {
                    type: "hidden",
                    value: result.data.id,
                    id: "cardSavedId"
                  }
                }
              }
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
        <Container class="mt-100 mb-60">
          <Row>
            <Grid cols="12 12 12 12">
              <div className="card">
                <div className="card-header">
                  <div className="row mb-3">
                    {this.state.cards.map(card => (
                      <Grid cols="3 3 3 3" key={card.id}>
                        <ItemBox
                          title={`XXXX XXXX XXXX ${card.number.substr(12)}`}
                          text={card.name}
                          subText={card.expirationDate}
                          icon="far fa-credit-card"
                          iconColor="marsala-icon"
                          id={card.id}
                          onClick={this.delete}
                          iconDataCy={`card-${card.id}`}
                        ></ItemBox>
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
                      mask={creditCardMask}
                      dataCy="card-number"
                    ></LabelAndInput>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="Nome gravado no cartão"
                      name="name"
                      onChange={this.setAttr}
                      value={this.state.name}
                      dataCy="card-name"
                    ></LabelAndInput>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="Vencimento"
                      name="expirationDate"
                      onChange={this.setAttr}
                      value={this.state.expirationDate}
                      mask={validCardMask}
                      dataCy="card-valid"
                    ></LabelAndInput>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="CVV"
                      name="cvv"
                      onChange={this.setAttr}
                      value={this.state.cvv}
                      maxlength="4"
                      mask={numberMask}
                      dataCy="card-cvv"
                    ></LabelAndInput>
                  </Row>
                  <Row>
                    <Grid cols="10 10 10 10" class="d-flex justify-content-end">
                      {/* <CheckBox text="Salvar como favorito"></CheckBox> */}
                    </Grid>
                    <Grid cols="2 2 2 2" class="d-flex justify-content-end">
                      <Button
                        variant="outline-success"
                        onClick={this.save}
                        data-cy="btn-save"
                      >
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
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
