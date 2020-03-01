import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import "../../imports";
import Container from "../Layout/Container";
import { Row } from "react-bootstrap";
import Grid from "../Layout/Grid";

export default props => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="#home">
      <i className="fas fa-dice-d20"></i>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Jogos</Nav.Link>
      <Nav.Link href="#features">Expansões</Nav.Link>
      <Nav.Link href="#pricing">Acessórios</Nav.Link>
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
        >
          <i className="fas fa-shopping-cart" style={{ fontSize: "24px" }}></i>
          <span
            className="badge badge-info navbar-badge"
            style={{ right: "-10px", top: "0px" }}
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
          <i className="fas fa-user-circle" style={{ fontSize: "24px" }}></i>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <div className="d-flex align-items-center flex-column">
            <div className="mt-2">
              <h4 className="m-0">Login</h4>
            </div>
            <div className="mt-3">
              <input
                className="form-control"
                type="text"
                placeholder="Usuário"
                style={{ width: "250px" }}
              />
            </div>
            <div className="mt-3">
              <input
                className="form-control"
                type="text"
                placeholder="Senha"
                style={{ width: "250px" }}
              />
            </div>
            <Container class="forgot-password">
              <a href="/">Esqueci minha senha</a>
            </Container>
            <button
              type="button"
              className="btn btn-outline-dark mt-2 mb-2"
              style={{ width: "125px" }}
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
      </li>
    </ul>
    {/* <InputGroup>
      <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">Button</Button>
      </InputGroup.Append>
    </InputGroup> */}
    {/* <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      ></FormControl>
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
);
