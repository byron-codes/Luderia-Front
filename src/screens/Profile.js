import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
import { Row, Button, Card } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import SmallBox from "../components/Box/SmallBox";
import LabelAndInput from "../components/Field/LabelAndInput";
import swal from 'sweetalert'

export default class Cart extends Component {
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
                    <h2 className="mt-3">Wagner006</h2>
                  </Grid>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Grid cols="4 4 4 4">
                      <LabelAndInput
                        label="Nome"
                        value="Wagner de Souza"
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="4 4 4 4">
                      <LabelAndInput
                        label="email"
                        value="wagner006@gmail.com"
                      ></LabelAndInput>
                    </Grid>
                    <Grid cols="4 4 4 4">
                      <LabelAndInput
                        label="CPF"
                        value="111.111.111-11"
                        readOnly
                      ></LabelAndInput>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid cols="4 4 4 4" class="d-flex justify-content-center">
                      <Button
                        variant="outline-primary"
                        className="w-100-p"
                        href="/cart/card"
                      >
                        Gerenciar cartões
                      </Button>
                    </Grid>
                    <Grid cols="4 4 4 4" class="d-flex justify-content-center">
                      <Button
                        variant="outline-primary"
                        className="w-100-p"
                        href="/cart/address"
                      >
                        Gerenciar endereços
                      </Button>
                    </Grid>
                    <Grid cols="4 4 4 4" class="d-flex justify-content-center">
                      <Button
                        variant="outline-success"
                        className="w-100-p"
                        onClick={e =>
                          swal(
                            "Sucesso",
                            "Dados alterados com sucesso",
                            "success"
                          ).then(value => {
                            window.location = "/";
                          })
                        }
                      >
                        Atualizar dados
                      </Button>
                    </Grid>
                  </Row>
                  <div className="dropdown-divider mt-3"></div>
                  <label>Alterar senha</label>
                  <Row>
                    <Grid cols="3 3 3 3">
                      <LabelAndInput label="Senha antiga"></LabelAndInput>
                    </Grid>
                    <Grid cols="3 3 3 3">
                      <LabelAndInput label="Nova senha"></LabelAndInput>
                    </Grid>
                    <Grid cols="3 3 3 3">
                      <LabelAndInput label="confirmar senha"></LabelAndInput>
                    </Grid>
                    <Grid cols="3 3 3 3" class="d-flex justify-content-end">
                      <Button
                        variant="outline-success"
                        style={{ marginTop: "30px", height: "40px" }}
                        className="w-100-p"
                        onClick={e =>
                          swal(
                            "Sucesso",
                            "Senha alterada com sucesso",
                            "success"
                          ).then(value => {
                            window.location = "/";
                          })
                        }
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
