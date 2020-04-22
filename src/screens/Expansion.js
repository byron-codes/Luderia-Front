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
    releaseDate: "",
    value: "R$ 0,00",
    languageDependence: "NONE",
    level: "EASY",
    gameId: undefined,
    image: "",
  },
  errors: {
    name: [],
    originalName: [],
    description: [],
    releaseDate: [],
    value: [],
    languageDependence: [],
    level: [],
    gameId: [],
    image: [],
  },
  games: [],
};

const languageDependence = [
  { value: "NONE", label: "Nenhuma" },
  { value: "LOW", label: "Baixa" },
  { value: "MEDIUM", label: "Média" },
  { value: "HIGH", label: "Alta" },
  { value: "IMPOSSIBLE", label: "Impossível" },
];

const languageDependenceValues = {
  NONE: languageDependence[0],
  LOW: languageDependence[1],
  MEDIUM: languageDependence[2],
  HIGH: languageDependence[3],
  IMPOSSIBLE: languageDependence[4],
};

const level = [
  { value: "EASY", label: "Fácil" },
  { value: "MEDIUM", label: "Médio" },
  { value: "HARD", label: "Díficil" },
  { value: "EXPERT", label: "Especialista" },
];

const levelValues = {
  EASY: level[0],
  MEDIUM: level[1],
  HARD: level[2],
  EXPERT: level[3],
};

export default class Expansion extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
    this.save = this.save.bind(this);
    this.get = this.get.bind(this);
    this.put = this.put.bind(this);
    this.getGames = this.getGames.bind(this);
    if (this.props.match.params.id) {
      this.get();
    }
    this.getGames();
  }

  setAttr(target, value) {
    const temp = this.state;
    temp.items[target] = value;
    this.setState({
      ...temp,
    });
  }

  getFiles(file) {
    this.state.items.image = file.base64;
    this.setState({ ...this.state });
  }

  getGames() {
    axios.get(`${baseURL}/game`).then(
      (result) => {
        let games = [];
        result.data.map((game) => {
          games.push({
            value: game.id,
            label: game.name,
          });
        });
        this.setState({ ...this.state, games });
      },
      (error) => console.log(error)
    );
  }

  get() {
    axios.get(`${baseURL}/expansion/${this.props.match.params.id}`).then(
      (result) => {
        result.data.image = "";
        result.data.value = realMask(`0${result.data.value}`);
        this.setState({ items: result.data });
      },
      (error) => console.log(error)
    );
  }

  save() {
    this.setState({
      items: { ...this.state.items },
      errors: { ...initialState.errors },
    });

    for (var item in this.state.errors) {
      this.state.errors[item] = [];
      this.setState({ ...this.state });
    }

    const body = this.state.items;
    body.releaseDate = convertDate(body.releaseDate);
    body.value = realUnMask(body.value);
    body.gameId = body.gameId ? body.gameId.value : undefined;

    axios.post(`${baseURL}/expansion`, body).then(
      (result) =>
        swal("Sucesso", "O seu cadastro foi salvo com sucesso", "success").then(
          (result) => (window.location = `/admin/expansion`)
        ),
      (error) => {
        error.response.data.errors.map((error) => {
          this.state.items.value = realMask(this.state.items.value + "");
          this.state.errors[error.field].push(error.defaultMessage);
          this.setState({
            ...this.state,
          });
        });
      }
    );
  }

  put() {
    const body = this.state.items;
    body.releaseDate = convertDate(body.releaseDate);
    body.value = realUnMask(body.value);
    body.gameId = body.gameId ? body.gameId.value : undefined;
    axios.put(`${baseURL}/expansion/${this.props.match.params.id}`, body).then(
      (result) =>
        swal(
          "Sucesso",
          "O seu cadastro foi atualizado com sucesso",
          "success"
        ).then((result) => (window.location = `/admin/expansion`)),
      (error) => {
        console.log(error.response);
        error.response.data.errors.map((error) => {
          this.state.errors[error.field].push(error.defaultMessage);
          this.setState({
            ...this.state,
          });
        });
      }
    );
  }

  render() {
    console.log(this.state.geames);
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
                      onChange={(item) => {
                        this.state.items.languageDependence = item.value;
                        this.setState({
                          ...this.state,
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
                      onChange={(item) => {
                        this.state.items.level = item.value;
                        this.setState({
                          ...this.state,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <label>Jogo base</label>
                  <div data-cy="style">
                    <Select
                      options={this.state.games}
                      placeholder="Selecione..."
                      value={this.state.items.gameId}
                      onChange={(item) => {
                        this.state.items.gameId = item;
                        this.setState({
                          ...this.state,
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
                    onClick={(e) => (window.location = "/admin/expansions")}
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
