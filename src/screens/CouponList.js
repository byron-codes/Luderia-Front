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

export default class CouponList extends Component {
  state = { rows: "" };

  componentDidMount() {
    axios.get("http://localhost:8080/coupon").then(result =>
      this.setState({
        rows: result.data.map(item => (
          <tr key={item.id}>
            <th>{item.code}</th>
            <th>{item.name}</th>
            <th>{item.quantity}</th>
            <th>{item.value}</th>
            <th>{item.expirationDate}</th>
            <th className="d-flex justify-content-center">
              <Button
                variant="outline-warning"
                className="mr-2"
                onClick={e => (window.location = `/admin/coupon/${item.id}`)}
              >
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
              </Button>
              <Button variant="outline-danger" className="ml-2">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={e => this.deleteRow(item.id)}
                ></FontAwesomeIcon>
              </Button>
            </th>
          </tr>
        ))
      })
    );
  }

  deleteRow(id) {
    axios.delete(`${baseURL}/coupon?id=${id}`).then(
      result => {
        swal("Sucesso", "Cadastro de cupom deletado com sucesso", "success");
      },
      error => {
        console.log(error);
      }
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
                "Código",
                "Nome",
                "Quantidade",
                "Valor",
                "Data de validade",
                "Ações"
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
