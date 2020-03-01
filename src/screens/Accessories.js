import React, { Component } from "react";
import LabelAndInput from "../components/Field/LabelAndInput";
import { Row } from "react-bootstrap";
import Container from "../components/Layout/Container";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";

export default class Accessories extends Component {
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
                  placeholder="Nome do acessório"
                  readOnly={false}
                  type="text"
                  onChange={this.setAttr}
                  value={this.props.name}
                ></LabelAndInput>
                <LabelAndInput
                  name="description"
                  cols="12 6"
                  label="Descrição"
                  placeholder="Descrição do acessório"
                  readOnly={false}
                  type="text"
                  onChange={this.setAttr}
                  value={this.props.expirationDate}
                ></LabelAndInput>
                <LabelAndInput
                  name="value"
                  cols="12 6"
                  label="Valor"
                  placeholder="Valor do acessório"
                  readOnly={false}
                  type="number"
                  onChange={this.setAttr}
                  value={this.props.quantity}
                ></LabelAndInput>
              </Row>
              <Row>
                <button type="button" className="btn btn-default">
                  Cancelar
            </button>
                <button
                  type="button"
                  onClick={this.save}
                  className="btn btn-success pull-right"
                >
                  Salvar
            </button>
              </Row>
            </Container>
          </div>
        </div>
        <Footer></Footer>
      </div>

    );
  }
}
