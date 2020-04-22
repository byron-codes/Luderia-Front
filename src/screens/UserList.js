import React, { Component } from "react";
import axios from "axios";
import Table, { configDatabase } from "../components/Table/Table";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import { Row, Button } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { baseURL } from "../endpoints";
import swal from "sweetalert";
import { cepMask, cpfMask } from "../mask";
import { doubleToReal } from "../util/converters";

export default class UserList extends Component {
  state = { rows: "" };

  componentDidMount() {
    axios.get(`${baseURL}/user`).then((result) => {
      this.setState({
        rows: result.data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.nickname}</td>
            <td>{cpfMask(item.cpf)}</td>
            <td>{doubleToReal(item.salesValue)}</td>
          </tr>
        )),
      });
      configDatabase();
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper">
          <div className="m-3">
            <Table
              name="Lista de usuários"
              head={[
                "Id",
                "Nome",
                "E-mail",
                "Nickname",
                "CPF",
                "Valor em compras",
              ]}
              rows={this.state.rows}
            ></Table>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
