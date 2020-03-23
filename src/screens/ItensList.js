import React, { Component } from "react";
import Navbar from "../components/NavBar/NavBar";
import Container from "../components/Layout/Container";
import Grid from "../components/Layout/Grid";
import { Row, Dropdown, Pagination } from "react-bootstrap";
import CardImage from "../components/Card/CardImage";
import CheckBox from "../components/Checkbox/CheckBox";
import Select from "react-select";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { baseURL } from "../endpoints";

const options = [
  { value: "chocolate", label: "Galápagos" },
  { value: "strawberry", label: "Paper Games" },
  { value: "vanilla", label: "Arcano Games" }
];

const options2 = [
  { value: "chocolate", label: "Fácil" },
  { value: "strawberry", label: "Médio" },
  { value: "vanilla", label: "Díficil" },
  { value: "vanilla2", label: "Especialista" }
];

const initialState = {
  item: []
};

export default class Item extends Component {
  state = { ...initialState };
  componentDidMount() {
    axios.get(`${baseURL}/product`).then(result => {
      result.data.map(item => {
        this.setState({
          ...this.state.item.push(<CardImage name={item.name} value={item.value} image={`${baseURL}/product/${item.id}/image`} onClick={e => window.location = `/itens/${item.id}`}></CardImage>)
        });
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Container class="mt-100">
          <Row>
            <Grid cols="3 3 3 3">
              <div className="card">
                <div className="card-header">
                  <h5>
                    <i className="fas fa-filter mr-1"></i>
                    Filtros
                  </h5>
                </div>
                <div className="card-body">
                  <Container>
                    <Row>
                      <Grid cols="12 12 12 12">
                        <label>Nome do produto</label>
                      </Grid>
                    </Row>
                    <Row>
                      <Grid cols="12 12 12 12">
                        <input
                          className="form-control"
                          placeholder="Nome"
                        ></input>
                      </Grid>
                    </Row>
                    <div className="dropdown-divider"></div>
                    <Row>
                      <Grid cols="12 12 12 12">
                        <label>Tipos</label>
                      </Grid>
                    </Row>
                    <Row>
                      <Grid cols="12 12 12 12">
                        <CheckBox text="Jogos"></CheckBox>
                      </Grid>
                    </Row>
                    <Row>
                      <Grid cols="12 12 12 12">
                        <CheckBox text="Expansões"></CheckBox>
                      </Grid>
                    </Row>
                    <Row>
                      <Grid cols="12 12 12 12">
                        <CheckBox text="Acessórios"></CheckBox>
                      </Grid>
                    </Row>
                    <div className="dropdown-divider"></div>
                    <Row>
                      <Grid cols="12 12 12 12">
                        <label>Díficuldade</label>
                      </Grid>
                    </Row>
                    <Row>
                      <Grid cols="12 12 12 12">
                        <Select
                          options={options2}
                          isMulti
                          isSearchable
                          placeholder="Selecione..."
                        />
                      </Grid>
                    </Row>
                    <div className="dropdown-divider"></div>
                    <Row>
                      <Grid cols="12 12 12 12">
                        <label>Produtoras</label>
                      </Grid>
                    </Row>
                    <Row>
                      <Grid cols="12 12 12 12">
                        <Select
                          options={options}
                          isMulti
                          isSearchable
                          placeholder="Selecione..."
                        />
                      </Grid>
                    </Row>
                    <div className="dropdown-divider"></div>
                    <Row>
                      <Grid cols="12 12 12 12">
                        <label>Valores</label>
                      </Grid>
                    </Row>
                    <Row>
                      <Grid cols="5 5 5 5">
                        <input
                          className="form-control"
                          placeholder="De"
                        ></input>
                      </Grid>
                      <Grid>
                        <label className="m-0 align-middle">-</label>
                      </Grid>
                      <Grid cols="5 5 5 5">
                        <input
                          className="form-control"
                          placeholder="Até"
                        ></input>
                      </Grid>
                    </Row>
                  </Container>
                </div>
              </div>
            </Grid>
            <Grid cols="9 9 9 9">
              <div className="mb-3">
                <Row>
                  <Grid cols="4 4 4 4" class="d-flex">
                    <label className="mb-0 d-flex align-items-center">
                      125 produtos
                    </label>
                  </Grid>
                  <Grid cols="8 8 8 8">
                    <div className="row d-flex justify-content-end">
                      <Grid
                        cols="6 6 6 6"
                        class="d-flex p-0 justify-content-end mr-3"
                      >
                        <label className="mr-2 mb-0 d-flex align-items-center">
                          Produtos por página
                        </label>
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                          style={{ width: "75px" }}
                        >
                          <option value="1" defaultValue>
                            12
                          </option>
                          <option value="2">26</option>
                          <option value="3">36</option>
                        </select>
                      </Grid>
                      <Grid cols="3 3 3 3" class="d-flex justify-content-end">
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                          style={{ width: "150px" }}
                        >
                          <option value="1" defaultValue>
                            Mais populares
                          </option>
                          <option value="2">Menor preço</option>
                          <option value="3">Maior preço</option>
                        </select>
                      </Grid>
                    </div>
                  </Grid>
                </Row>
              </div>
              <Row>{this.state.item}</Row>
              <div className="mt-3 mb-5">
                <Row>
                  <Grid
                    cols="12 12 12 12"
                    class="d-flex justify-content-center"
                  >
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Ellipsis />

                      <Pagination.Item>{10}</Pagination.Item>
                      <Pagination.Item>{11}</Pagination.Item>
                      <Pagination.Item active>{12}</Pagination.Item>
                      <Pagination.Item>{13}</Pagination.Item>
                      <Pagination.Item>{14}</Pagination.Item>

                      <Pagination.Ellipsis />
                      <Pagination.Item>{20}</Pagination.Item>
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
                  </Grid>
                </Row>
              </div>
            </Grid>
          </Row>
        </Container>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
