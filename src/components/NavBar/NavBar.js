import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../imports";
import Container from "../Layout/Container";
import LabelAndInput from "../Field/LabelAndInput";
import axios from "axios";
import { baseURL } from "../../endpoints";

const initialState = {
  login: "",
  password: "",
  name: ""
};
export default class NavBar extends Component {
  state = {
    ...initialState,
    logged: false
  };

  constructor(props) {
    super(props);
    this.setAttr = this.setAttr.bind(this);
    this.login = this.login.bind(this);
    this.login();
  }

  setAttr(target, value) {
    const temp = [];
    temp[target] = value;
    this.setState({
      ...temp
    });
  }

  login() {}

  render() {
    return (
      <Navbar className="bg-marsala" variant="dark" fixed="top">
        <Navbar.Brand href="/">
          <i className="fas fa-dice-d20"></i>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/itens">Jogos</Nav.Link>
          <Nav.Link href="/itens">Expansões</Nav.Link>
          <Nav.Link href="/itens">Acessórios</Nav.Link>
          <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
              <input
                className="form-control form-control-navbar w-300"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </Nav>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown mr-3">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="#"
              aria-expanded="false"
              onClick={e => (window.location = "/cart")}
            >
              <i
                className="fas fa-shopping-cart"
                style={{ fontSize: "24px" }}
              ></i>
              <span
                className="badge badge-info navbar-badge"
                style={{ top: "0px" }}
              >
                3
              </span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="#"
              aria-expanded="false"
            >
              <i
                className="fas fa-user-circle"
                style={{ fontSize: "24px" }}
              ></i>
              {this.state.logged ? (
                <label
                  style={{ margin: "0px", marginLeft: "10px" }}
                  className="mouse-click"
                >
                  {this.state.name}
                </label>
              ) : (
                <div></div>
              )}
            </a>
            {!this.state.logged ? (
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <div className="d-flex align-items-center flex-column">
                  <div className="mt-2">
                    <h4 className="m-0">Login</h4>
                  </div>
                  <div className="mt-3">
                    <LabelAndInput
                      name="login"
                      placeholder="Usuário"
                      value={this.state.login}
                      onChange={this.setAttr}
                    ></LabelAndInput>
                  </div>
                  <div className="mt-3">
                    <LabelAndInput
                      name="password"
                      placeholder="Usuário"
                      value={this.state.password}
                      onChange={this.setAttr}
                    ></LabelAndInput>
                  </div>
                  <Container class="forgot-password">
                    <a href="/">Esqueci minha senha</a>
                  </Container>
                  <button
                    type="button"
                    className="btn btn-outline-dark mt-2 mb-2"
                    style={{ width: "125px" }}
                    onClick={e =>
                      axios
                        .get(
                          `${baseURL}/user/login?login=${this.state.login}&password=${this.state.password}`
                        )
                        .then(
                          result => {
                            this.setState({
                              ...this.state,
                              name: result.data.name,
                              logged: true
                            });
                          },
                          error => alert(error)
                        )
                    }
                  >
                    Entrar
                  </button>
                  <div
                    className="dropdown-divider"
                    style={{ width: "278px", color: "black" }}
                  ></div>
                  <a href="/" className="mt-2 mb-2">
                    Cadastre-se
                  </a>
                </div>
              </div>
            ) : (
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <div className="d-flex align-items-center flex-column">
                  <a href="/profile" className="mt-2 mb-2">
                    Minha conta
                  </a>
                  <a href="/sales" className="mt-2 mb-2">
                    Meus pedidos
                  </a>
                  <a href="/user/coupon" className="mt-2 mb-2">
                    Meus cupons
                  </a>
                  <a href="/" className="mt-2 mb-2">
                    Sair
                  </a>
                </div>
              </div>
            )}
          </li>
        </ul>
      </Navbar>
    );
  }
}
