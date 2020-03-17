import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
import { Row, Button, Card } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import SmallBox from "../components/Box/SmallBox";
import LabelAndInput from "../components/Field/LabelAndInput";
import swal from "sweetalert";
import { baseURL } from "../endpoints";
import axios from "axios";
import { cpfMask } from "../mask";

const initialState = {
  items: {
    id: 0,
    name: "",
    email: "",
    nickname: "",
    cpf: "",
    confirmPassword: "",
    oldPassword: "",
    newPassword: ""
  },
  errors: {
    name: [],
    email: [],
    cpf: [],
    confirmPassword: [],
    oldPassword: [],
    newPassword: []
  }
};

export default class Cart extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
    this.put = this.put.bind(this);
    this.get = this.get.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.get();
  }

  setAttr(target, value) {
    const temp = this.state;
    temp.items[target] = value;
    this.setState({
      ...temp
    });
  }

  put() {
    this.state.errors.name = [];
    this.state.errors.email = [];
    this.setState({ ...this.state.items, ...this.state.errors });
    axios
      .put(`${baseURL}/user/${this.props.match.params.id}`, this.state.items)
      .then(
        result =>
          swal(
            "Sucesso",
            "O seu cadastro foi atualizado com sucesso",
            "success"
          ).then(
            result => (window.location = `/user/${this.props.match.params.id}`)
          ),
        error => {
          console.log(error.response.data);
          error.response.data.errors.map(error => {
            this.state.errors[error.field].push(error.defaultMessage);
            this.setState({
              ...this.state
            });
          });
        }
      );
  }

  updatePassword() {
    this.state.errors.oldPassword = [];
    this.state.errors.newPassword = [];
    this.state.errors.confirmPassword = [];
    this.setState({ ...this.state.items, ...this.state.errors });
    const items = {
      oldPassword: this.state.items.oldPassword,
      newPassword: this.state.items.newPassword,
      confirmPassword: this.state.items.confirmPassword,
      id: this.props.match.params.id
    };
    axios
      .put(`${baseURL}/user/password/${this.props.match.params.id}`, items)
      .then(
        result =>
          swal(
            "Sucesso",
            "Sua senha foi atualizada com succeso",
            "success"
          ).then(
            result =>
              (window.location = `/profile/${this.props.match.params.id}`)
          ),
        error => {
          error.response.data.errors.map(error => {
            this.state.errors[error.field].push(error.defaultMessage);
            this.setState({
              ...this.state
            });
          });
        }
      );
  }

  get() {
    axios.get(`${baseURL}/user/${this.props.match.params.id}`).then(
      result => {
        this.setState({ items: result.data });
        this.state.items.cpf = cpfMask(this.state.items.cpf);
        this.setState({ ...this.state });
      },
      error => console.log(error)
    );
  }

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100 mb-60">
          <Row className="d-flex justify-content-center">
            <Grid cols="8 8 8 8">
              <Card>
                <Card.Header className="row">
                  <Grid
                    cols="4 4 4 4"
                    class="d-flex justify-content-center "
                  ></Grid>
                  <Grid cols="4 4 4 4" class="d-flex justify-content-center ">
                    <i
                      className="fas fa-user-circle"
                      style={{ fontSize: "100px" }}
                    ></i>
                  </Grid>
                  <Grid cols="4 4 4 4" class="d-flex justify-content-end ">
                    <Button
                      data-cy="btn-delete"
                      variant="outline-danger"
                      style={{ height: "fit-content" }}
                      onClick={e =>
                        axios
                          .delete(
                            `${baseURL}/user?id=${this.props.match.params.id}`
                          )
                          .then(
                            result =>
                              swal(
                                "Sucesso",
                                "Sua conta foi fechada com sucesso",
                                "success"
                              ).then(result => (window.location = "/")),
                            error => console.log(error)
                          )
                      }
                    >
                      <i className="far fa-sad-tear mr-2"></i> Fechar conta
                    </Button>
                  </Grid>
                  <Grid
                    cols="12 12 12 12"
                    class="d-flex justify-content-center "
                  >
                    <h2 className="mt-3">{this.state.nickname}</h2>
                  </Grid>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Grid cols="4 4 4 4">
                      <LabelAndInput
                        name="name"
                        label="Nome"
                        value={this.state.items.name}
                        errors={this.state.errors.name}
                        onChange={this.setAttr}
                        dataCy="name"
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="4 4 4 4">
                      <LabelAndInput
                        name="email"
                        label="E-mail"
                        value={this.state.items.email}
                        errors={this.state.errors.email}
                        onChange={this.setAttr}
                        dataCy="email"
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="4 4 4 4">
                      <LabelAndInput
                        name="cpf"
                        label="CPF"
                        value={this.state.items.cpf}
                        errors={this.state.errors.cpf}
                        onChange={this.setAttr}
                        readOnly
                      ></LabelAndInput>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid cols="4 4 4 4" class="d-flex justify-content-center">
                      <Button
                        variant="outline-primary"
                        className="w-100-p"
                        href={`/user/${this.props.match.params.id}/cards`}
                      >
                        Gerenciar cartões
                      </Button>
                    </Grid>
                    <Grid cols="4 4 4 4" class="d-flex justify-content-center">
                      <Button
                        variant="outline-primary"
                        className="w-100-p"
                        href={`/user/${this.props.match.params.id}/addresses`}
                      >
                        Gerenciar endereços
                      </Button>
                    </Grid>
                    <Grid cols="4 4 4 4" class="d-flex justify-content-center">
                      <Button
                        variant="outline-success"
                        className="w-100-p"
                        onClick={this.put}
                        data-cy="btn-update"
                      >
                        Atualizar dados
                      </Button>
                    </Grid>
                  </Row>
                  <div className="dropdown-divider mt-3"></div>
                  <label>Alterar senha</label>
                  <Row>
                    <Grid cols="3 3 3 3">
                      <LabelAndInput
                        name="oldPassword"
                        label="Senha antiga"
                        type="password"
                        value={this.state.items.oldPassword}
                        errors={this.state.errors.oldPassword}
                        onChange={this.setAttr}
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="3 3 3 3">
                      <LabelAndInput
                        name="newPassword"
                        label="Nova senha"
                        type="password"
                        value={this.state.items.newPassword}
                        errors={this.state.errors.newPassword}
                        onChange={this.setAttr}
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="3 3 3 3">
                      <LabelAndInput
                        name="confirmPassword"
                        label="Confirmar senha"
                        type="password"
                        value={this.state.items.confirmPassword}
                        errors={this.state.errors.confirmPassword}
                        onChange={this.setAttr}
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="3 3 3 3" class="d-flex justify-content-end">
                      <Button
                        variant="outline-success"
                        style={{ marginTop: "30px", height: "40px" }}
                        className="w-100-p"
                        onClick={this.updatePassword}
                      >
                        Alterar senha
                      </Button>
                    </Grid>
                  </Row>
                </Card.Body>
              </Card>
            </Grid>
          </Row>
        </Container>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
