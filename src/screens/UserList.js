import React, { Component } from "react";
import axios from "axios";
import Table from "../components/Table/Table";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import { Row, Button } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { baseURL } from "../endpoints";
import swal from "sweetalert";

export default class UserList extends Component {
  state = { rows: "" };

  componentDidMount() {
    axios.get("http://localhost:8080/user").then(result =>
      this.setState({
        rows: result.data.map(item => (
          <tr key={item.id}>
            <th>{item.id}</th>
            <th>{item.name}</th>
            <th>{item.email}</th>
            <th>{item.nickname}</th>
            <th>{item.cpf}</th>
            <th>R$ 0,00</th>
          </tr>
        ))
      })
    );
  }

  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper">
          <div className="m-3">
            <Table
              head={[
                "Id",
                "Nome",
                "E-mail",
                "Nickname",
                "CPF",
                "Valor em compras"
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
