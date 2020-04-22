import React, { Component } from "react";
import axios from "axios";
import Table, { configDatabase } from "../components/Table/Table";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { baseURL } from "../endpoints";
import swal from "sweetalert";
import { doubleToReal } from "../util/converters";

export default class ExpansionList extends Component {
  state = { rows: "" };

  componentDidMount() {
    axios.get(`${baseURL}/expansion`).then(result => {
      this.setState({
        rows: result.data.map(item => (
          <tr key={item.id} data-cy={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantityStock}</td>
            <td>{doubleToReal(item.value)}</td>
            <th className="d-flex justify-content-center">
              <Button
                name="update"
                variant="outline-warning"
                className="mr-2"
                onClick={e => (window.location = `/admin/expansion/${item.id}`)}
              >
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
              </Button>
              <Button
                name="delete"
                variant="outline-danger"
                className="ml-2 mr-2"
                onClick={e => this.deleteRow(item.id)}
              >
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
              </Button>
              <Button
                name="stock"
                variant="outline-success"
                className="ml-2"
                onClick={e => {
                  swal({
                    text: "Quantidade para adicionar no estoque",
                    content: "input",
                    button: "Adicionar"
                  }).then(quantity => {
                    if (!quantity) throw null;
                    axios
                      .put(
                        `${baseURL}/expansion/${item.id}/stock?quantity=${quantity}`
                      )
                      .then(result =>
                        swal(
                          "Sucesso",
                          "O seu estoque foi atualizado com sucesso",
                          "success"
                        ).then(result => window.location.reload())
                      );
                  });
                }}
              >
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
              </Button>
            </th>
          </tr>
        ))
      });
      configDatabase()
    });
  }

  deleteRow(id) {
    axios.delete(`${baseURL}/expansion?id=${id}`).then(
      result => {
        swal(
          "Sucesso",
          "Cadastro de expansão deletado com sucesso",
          "success"
        ).then(result => window.location.reload());
      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <div className="wrapper" key="gameList">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper">
          <div className="m-3">
            <Table
              name="Lista de expansões"
              head={["Id", "Nome", "Quantidade", "Valor", "Ações"]}
              rows={this.state.rows}
            ></Table>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
