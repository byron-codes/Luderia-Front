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

const initialState = {
  id: 0,
  name: "",
  email: "",
  nickname: "",
  cpf: "",
  password: "",
  confirmPassword: "",
  oldPassword: "",
  newPassword: ""
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
    const temp = [];
    temp[target] = value;
    this.setState({
      ...temp
    });
  }

  put() {
    axios.put(`${baseURL}/user/${this.props.match.params.id}`, this.state).then(
      result =>
        swal(
          "Sucesso",
          "O seu cadastro foi atualizado com sucesso",
          "success"
        ).then(
          result => (window.location = `/profile/${this.props.match.params.id}`)
        ),
      error => console.log(error)
    );
  }

  updatePassword() {
    axios
      .put(`${baseURL}/user/password/${this.props.match.params.id}`, {
        password: this.state.newPassword
      })
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
        error => console.log(error)
      );
  }

  get() {
    axios.get(`${baseURL}/user/${this.props.match.params.id}`).then(
      result => {
        this.setState({ ...result.data });
        console.log(this.state);
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
                    cols="12 12 12 12"
                    class="d-flex justify-content-center "
                  >
                    <i
                      className="fas fa-user-circle"
                      style={{ fontSize: "100px" }}
                    ></i>
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
                        value={this.state.name}
                        onChange={this.setAttr}
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="4 4 4 4">
                      <LabelAndInput
                        name="email"
                        label="email"
                        value={this.state.email}
                        onChange={this.setAttr}
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="4 4 4 4">
                      <LabelAndInput
                        label="CPF"
                        value={this.state.cpf}
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
                        value={this.state.oldPassword}
                        onChange={this.setAttr}
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="3 3 3 3">
                      <LabelAndInput
                        name="newPassword"
                        label="Nova senha"
                        value={this.state.newPassword}
                        onChange={this.setAttr}
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="3 3 3 3">
                      <LabelAndInput
                        name="confirmPassword"
                        label="Confirmar senha"
                        value={this.state.confirmPassword}
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
