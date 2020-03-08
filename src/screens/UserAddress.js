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
  addresses: [],
  cep: "",
  street: "",
  number: "",
  cityId: "",
  complement: ""
};

export default class UserAddress extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.save = this.save.bind(this);
    this.getAddress();
  }

  setAttr(target, value) {
    const temp = [];
    temp[target] = value;
    this.setState({
      ...temp
    });
  }

  getAddress() {
    axios.get(`${baseURL}/address`).then(
      result => {
        this.setState({ addresses: result.data });
      },
      error => console.log(error)
    );
  }

  save() {
    axios.post(`${baseURL}/address`, this.state).then(
      result =>
        axios
          .put(
            `${baseURL}/user/${this.props.match.params.id}/address/${result.data.id}`
          )
          .then(result =>
            swal(
              "Sucesso",
              "O seu cadastro foi efetuado com sucesso",
              "success"
            ).then(result => {
              window.location = `/user/${this.props.match.params.id}/addresses`;
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
                    {this.state.addresses.map(address => (
                      <Grid cols="3 3 3 3" key={address.id}>
                        <SmallBox
                          title={`${address.street}, ${address.number}`}
                          text={address.neighborhood}
                          icon="fas fa-map-marker-alt blue-icon"
                          color="m-0"
                          nohref
                        ></SmallBox>
                      </Grid>
                    ))}
                  </div>
                </div>
                <div className="card-body">
                  <Row className="d-flex justify-content-center">
                    <label>Cadastrar um novo endereço</label>
                  </Row>
                  <Row>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="CEP"
                      name="cep"
                      onChange={this.setAttr}
                      value={this.state.cep}
                    ></LabelAndInput>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="Rua"
                      name="street"
                      onChange={this.setAttr}
                      value={this.state.street}
                    ></LabelAndInput>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="Número"
                      name="number"
                      onChange={this.setAttr}
                      value={this.state.number}
                    ></LabelAndInput>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="Bairro"
                      name="neighborhood"
                      onChange={this.setAttr}
                      value={this.state.neighborhood}
                    ></LabelAndInput>
                  </Row>
                  <Row>
                    <LabelAndInput
                      cols="4 4 4 4"
                      label="Cidade"
                      name="cityId"
                      onChange={this.setAttr}
                      value={this.state.cityId}
                    ></LabelAndInput>
                    <LabelAndInput
                      cols="4 4 4 4"
                      label="Complemento"
                      name="complement"
                      onChange={this.setAttr}
                      value={this.state.complement}
                    ></LabelAndInput>
                    <Grid cols="2 2 2 2" class="mt-4">
                      <CheckBox text="Salvar como favorito"></CheckBox>
                    </Grid>
                    <Grid cols="2 2 2 2" class="d-flex justify-content-end">
                      <Button
                        variant="outline-success"
                        style={{ width: "100%", height: "50px" }}
                        className="mt-3"
                        onClick={this.save}
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
        <Footer fix></Footer>
      </React.Fragment>
    );
  }
}
