import React, { Component } from "react";
import axios from "axios";
import Table from "../components/Table/Table";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";

export default class CouponList extends Component {
  state = { rows: "" };

  componentDidMount() {
    axios.get("http://localhost:8080/coupon").then(result =>
      this.setState({
        rows: result.data.map(item => (
          <tr key={item.id}>
            <th>{item.id}</th>
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
            <Table head={['id']} rows={this.state.rows}></Table>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
