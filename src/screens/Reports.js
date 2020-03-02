import React, { Component } from "react";
import Header from "../components/NavBar/NavBarAdmin";
import Sidebar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/FooterAdmin";
import Grid from "../components/Layout/Grid";
import { Row, Pagination, Card, Button } from "react-bootstrap";
import Table from "../components/Table/Table";
import Container from "../components/Layout/Container";
import swal from "sweetalert";
import LineChart from "../components/Chart/LineChart";

export default class Reports extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper mt-3">
          <Container>
            <Row className="d-flex justify-content-center">
              <Grid cols="12 12 12 12">
                <LineChart></LineChart>
              </Grid>
            </Row>
          </Container>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
