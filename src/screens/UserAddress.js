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
import { cepMask } from "../mask";
import Select from "react-select";
import ItemBox from "../components/Box/ItemBox";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectAddress } from "../container/addressActions";

const initialState = {
  addresses: [],
  cep: "",
  street: "",
  number: "",
  city: { label: "Selecione...", value: "" },
  state: { label: "Selecione...", value: "" },
  complement: "",
  neighborhood: "",
  states: [],
  cities: []
};

class UserAddress extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.getState = this.getState.bind(this);
    this.save = this.save.bind(this);
    this.findState = this.findState.bind(this);
    this.getAddress();
    this.getState();
  }

  findState(uf, city) {
    this.state.states.forEach(item => {
      if (item.label === (uf + "").toUpperCase()) {
        this.setState({
          state: item
        });
        this.getCities(this.state.state, city);
      }
    });
  }

  setAttr(target, value) {
    if (target == "cep" && value.length == 9) {
      axios
        .get("https://viacep.com.br/ws/" + value.replace("-", "") + "/json/")
        .then(result => {
          this.findState(result.data.uf, result.data.localidade);
          this.setState({
            street: result.data.logradouro,
            neighborhood: result.data.bairro
          });
        });
    }
    const temp = [];
    temp[target] = value;
    this.setState({
      ...temp
    });
  }

  getState() {
    axios.get(`${baseURL}/state`).then(
      result => {
        console.log(result.data);
        const items = result.data.map(item => ({
          label: item.initials,
          value: item.id
        }));
        this.setState({ states: items });
      },
      error => console.log(error)
    );
  }

  getCities(state, city) {
    axios.get(`${baseURL}/city?stateId=${state.value}`).then(
      result => {
        const items = result.data.map(item => ({
          label: item.name,
          value: item.id
        }));
        this.setState({ cities: items, state: state });
        this.state.cities.forEach(item => {
          if (item.label === city + "") {
            this.setState({
              city: item
            });
          }
        });
      },
      error => console.log(error)
    );
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
    const body = {
      street: this.state.street,
      number: this.state.number,
      complement: this.state.complement,
      neighborhood: this.state.neighborhood,
      cep: this.state.cep,
      cityId: this.state.city.value
    };
    axios.post(`${baseURL}/address`, body).then(
      result =>
        axios
          .put(
            `${baseURL}/user/${this.props.match.params.id}/address/${result.data.id}`
          )
          .then(resultUser =>
            swal(
              "Sucesso",
              "O seu endereço foi cadastrado com sucesso",
              "success",
              {
                content: {
                  element: "input",
                  attributes: {
                    type: "hidden",
                    value: result.data.id,
                    id: "addressSavedId"
                  }
                }
              }
            ).then(result => {
              window.location = `/user/${this.props.match.params.id}/addresses`;
            })
          ),

      error => console.log(error)
    );
  }

  delete(id) {
    axios.delete(`${baseURL}/address?id=${id}`).then(
      result =>
        swal(
          "Sucesso",
          "O seu endereço foi deletado com sucesso",
          "success"
        ).then(result => {
          window.location.reload();
        }),
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
                    {this.state.addresses.map(address => {
                      return (
                        <Grid cols="3 3 3 3" key={address.id}>
                          <SmallBox
                            title={`${address.street}, ${address.number}`}
                            text={address.neighborhood}
                            subText={`${address.city.name} - ${address.state.initials}`}
                            icon="fas fa-map-marker-alt"
                            iconClass="blue-icon"
                            id={address.id}
                            aclass="blue-box"
                            onClick={() => {
                              this.props.selectAddress(address);
                              window.location = "/cart";
                            }}
                            iconDataCy={`address-${address.id}`}
                            actionText="Selecionar endereço"
                          />
                          {/* <ItemBox
                            title={`${address.street}, ${address.number}`}
                            text={address.neighborhood}
                            subText={`${address.city.name} - ${address.state.initials}`}
                            icon="fas fa-map-marker-alt"
                            iconColor="blue-icon"
                            id={address.id}
                            onClick={this.delete}
                            iconDataCy={`address-${address.id}`}
                          ></ItemBox> */}
                        </Grid>
                      );
                    })}
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
                      mask={cepMask}
                      dataCy="cep"
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
                      dataCy="number"
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
                    <Grid cols="2 2 2 2">
                      <label>Estado</label>
                      <Select
                        options={this.state.states}
                        isSearchable
                        placeholder="Selecione o estado..."
                        onChange={e => this.getCities(e, "")}
                        value={this.state.state}
                      />
                    </Grid>
                    <Grid cols="3 3 3 3">
                      <label>Cidade</label>
                      <Select
                        options={this.state.cities}
                        isSearchable
                        placeholder="Selecione a cidade..."
                        onChange={e => this.setAttr("city", e)}
                        value={this.state.city}
                      />
                    </Grid>
                    <LabelAndInput
                      cols="3 3 3 3"
                      label="Complemento"
                      name="complement"
                      onChange={this.setAttr}
                      value={this.state.complement}
                    ></LabelAndInput>
                    <Grid cols="2 2 2 2" class="mt-4">
                      {/* <CheckBox text="Salvar como favorito"></CheckBox> */}
                    </Grid>
                    <Grid cols="2 2 2 2" class="d-flex justify-content-end">
                      <Button
                        variant="outline-success"
                        style={{ width: "100%", height: "50px" }}
                        className="mt-3"
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
        <Footer fix></Footer>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectAddress }, dispatch);
export default connect(null, mapDispatchToProps)(UserAddress);
