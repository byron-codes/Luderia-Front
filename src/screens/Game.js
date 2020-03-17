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
    originalName: "",
    description: "",
    components: "",
    releaseDate: "",
    minPlayers: "",
    maxPlayers: "",
    minMinutes: "",
    maxMinutes: "",
    minAge: "",
    national: "",
    avaliation: "",
    companyId: "",
    image: "",
    systemId: "",
    languageDependence: "NONE",
    style: "RPG",
    type: "EXPANSION",
    level: "EASY",
    value: "R$ 0,00"
  },
  errors: {
    name: [],
    originalName: [],
    description: [],
    components: [],
    releaseDate: [],
    minPlayers: [],
    maxPlayers: [],
    minMinutes: [],
    maxMinutes: [],
    minAge: [],
    national: [],
    avaliation: [],
    companyId: [],
    image: [],
    systemId: [],
    languageDependence: [],
    style: [],
    type: "EXPANSION",
    level: [],
    value: []
  }
};

const languageDependence = [
  { value: "NONE", label: "Nenhuma" },
  { value: "LOW", label: "Baixa" },
  { value: "MEDIUM", label: "Média" },
  { value: "HIGH", label: "Alta" },
  { value: "IMPOSSIBLE", label: "Impossível" }
];

const languageDependenceValues = {
  NONE: languageDependence[0],
  LOW: languageDependence[1],
  MEDIUM: languageDependence[2],
  HIGH: languageDependence[3],
  IMPOSSIBLE: languageDependence[4]
};

const style = [
  { value: "CARD", label: "Cartas" },
  { value: "TABLE", label: "Tabuleiro" },
  { value: "RPG", label: "RPG" }
];

const styleValues = {
  CARD: style[0],
  TABLE: style[0],
  RPG: style[0]
};

const level = [
  { value: "EASY", label: "Fácil" },
  { value: "MEDIUM", label: "Médio" },
  { value: "HARD", label: "Díficil" },
  { value: "EXPERT", label: "Especialista" }
];

const levelValues = {
  EASY: level[0],
  MEDIUM: level[1],
  HARD: level[2],
  EXPERT: level[3]
};

export default class Game extends Component {
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
      ...temp
    });
  }

  getFiles(file) {
    this.state.items.image = file.base64;
    this.setState({ ...this.state });
  }

  get() {
    axios.get(`${baseURL}/game/${this.props.match.params.id}`).then(
      result => {
        result.data.image = "";
        console.log(result.data.value);
        debugger;
        result.data.value = realMask(`0${result.data.value}`);
        this.setState({ items: result.data });
      },
      error => console.log(error)
    );
  }

  save() {
    this.setState({
      items: { ...this.state.items },
      errors: { ...initialState.errors }
    });

    for (var item in this.state.errors) {
      this.state.errors[item] = [];
      this.setState({ ...this.state });
    }

    const body = this.state.items;
    body.releaseDate = convertDate(body.releaseDate);
    body.value = realUnMask(body.value);

    axios.post(`${baseURL}/game`, body).then(
      result =>
        swal(
          "Sucesso",
          "O seu cadastro foi atualizado com sucesso",
          "success",
          {
            content: {
              element: "input",
              attributes: {
                type: "hidden",
                value: result.data.id,
                id: "gameId"
              }
            }
          }
        ).then(result => (window.location = `admin/games`)),
      error => {
        error.response.data.errors.map(error => {
          this.state.items.value = realMask(this.state.items.value + "");
          this.state.errors[error.field].push(error.defaultMessage);
          this.setState({
            ...this.state
          });
        });
      }
    );
  }

  put() {
    const body = this.state.items;
    body.releaseDate = convertDate(body.releaseDate);
    body.value = realUnMask(body.value);
    axios.put(`${baseURL}/game/${this.props.match.params.id}`, body).then(
      result =>
        swal(
          "Sucesso",
          "O seu cadastro foi atualizado com sucesso",
          "success"
        ).then(result => (window.location = `/admin/games`)),
      error => {
        console.log(error.response);
        error.response.data.errors.map(error => {
          this.state.errors[error.field].push(error.defaultMessage);
          this.setState({
            ...this.state
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
                  placeholder="Nome do jogo"
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.items.name}
                  errors={this.state.errors.name}
                  dataCy="name"
                ></LabelAndInput>
                <LabelAndInput
                  name="originalName"
                  cols="12 6"
                  label="Nome original"
                  placeholder="Nome original do jogo"
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.items.originalName}
                  errors={this.state.errors.originalName}
                  dataCy="originalName"
                ></LabelAndInput>
                <LabelAndInput
                  name="description"
                  cols="12 6"
                  label="Descrição"
                  placeholder="Descrição do jogo"
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.items.description}
                  errors={this.state.errors.description}
                  dataCy="description"
                ></LabelAndInput>
                <LabelAndInput
                  name="releaseDate"
                  cols="12 6"
                  label="Data de lançamento"
                  placeholder="Data de lançamento do jogo"
                  type="date"
                  onChange={this.setAttr}
                  value={this.state.items.releaseDate}
                  errors={this.state.errors.releaseDate}
                  dataCy="releaseDate"
                ></LabelAndInput>
                <LabelAndInput
                  name="minPlayers"
                  cols="6 3"
                  label="Mínimo de jogadores"
                  placeholder="Mínimo de jogadores"
                  type="number"
                  onChange={this.setAttr}
                  value={this.state.items.minPlayers}
                  errors={this.state.errors.minPlayers}
                  dataCy="minPlayers"
                ></LabelAndInput>
                <LabelAndInput
                  name="maxPlayers"
                  cols="6 3"
                  label="Máximo de jogadores"
                  placeholder="Máximo de jogadores"
                  type="number"
                  onChange={this.setAttr}
                  value={this.state.items.maxPlayers}
                  errors={this.state.errors.maxPlayers}
                  dataCy="maxPlayers"
                ></LabelAndInput>
                <LabelAndInput
                  name="minMinutes"
                  cols="6 3"
                  label="Tempo mínimo de jogo"
                  placeholder="Tempo mínimo de jogo"
                  type="number"
                  onChange={this.setAttr}
                  value={this.state.items.minMinutes}
                  errors={this.state.errors.minMinutes}
                  dataCy="minMinutes"
                ></LabelAndInput>
                <LabelAndInput
                  name="maxMinutes"
                  cols="6 3"
                  label="Tempo máximo de jogo"
                  placeholder="Tempo máximo de jogo"
                  type="number"
                  onChange={this.setAttr}
                  value={this.state.items.maxMinutes}
                  errors={this.state.errors.maxMinutes}
                  dataCy="maxMinutes"
                ></LabelAndInput>
                <LabelAndInput
                  name="minAge"
                  cols="6 3"
                  label="Idade mínima recomendada"
                  placeholder="Idade mínima recomendada"
                  type="number"
                  onChange={this.setAttr}
                  value={this.state.items.minAge}
                  errors={this.state.errors.minAge}
                  dataCy="minAge"
                ></LabelAndInput>
                <LabelAndInput
                  name="value"
                  cols="6 3"
                  label="Valor do produto"
                  placeholder="Valor do produto"
                  type="text"
                  onChange={this.setAttr}
                  value={this.state.items.value}
                  errors={this.state.errors.value}
                  mask={realMask}
                  dataCy="value"
                ></LabelAndInput>
                <div className="col-xs-6 col-sm-3">
                  <label>Dependência de linguagem</label>
                  <div data-cy="languageDependence">
                    <Select
                      options={languageDependence}
                      placeholder="Selecione..."
                      value={
                        languageDependenceValues[
                          this.state.items.languageDependence
                        ]
                      }
                      onChange={item => {
                        this.state.items.languageDependence = item.value;
                        this.setState({
                          ...this.state
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <label>Estilo de jogo</label>
                  <div data-cy="style">
                    <Select
                      options={style}
                      placeholder="Selecione..."
                      value={styleValues[this.state.items.style]}
                      onChange={item => {
                        this.state.items.style = item.value;
                        this.setState({
                          ...this.state
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <label>Nível de dificuldade</label>
                  <div data-cy="level">
                    <Select
                      options={level}
                      placeholder="Selecione..."
                      value={levelValues[this.state.items.level]}
                      onChange={item => {
                        this.state.items.level = item.value;
                        this.setState({
                          ...this.state
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <FileBase64
                    multiple={false}
                    onDone={this.getFiles.bind(this)}
                  />
                </div>
              </Row>
              <Row className="mt-3">
                <Grid cols="6 6 6 6">
                  <button
                    type="button"
                    onClick={e => (window.location = "/admin/games")}
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
