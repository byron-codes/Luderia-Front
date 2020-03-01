import React, { Component } from "react";
import Container from "../components/Layout/Container";
import { Row } from "react-bootstrap";
import Grid from '../components/Layout/Grid'
import Carousel from "react-bootstrap/Carousel";
import SmallBox from '../components/Box/SmallBox'
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

export default class Buy extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100">
          <Row>
            <Grid cols="6 6 6 6">
              <div className="card">
                <Row>
                  <Carousel interval={0}>
                    <Carousel.Item>
                      <SmallBox
                        text="Novas compras"
                        icon="fas fa-shopping-bag"
                        color="bg-info"
                      ></SmallBox>
                    </Carousel.Item>
                    <Carousel.Item>
                      <SmallBox
                        text="Novas compras"
                        icon="fas fa-shopping-bag"
                        color="bg-info"
                      ></SmallBox>
                    </Carousel.Item>
                  </Carousel>
                </Row>
              </div>
            </Grid>
            <Grid cols="6 6 6 6"></Grid>
          </Row>
        </Container>
        <Footer fix></Footer>
      </React.Fragment>
    );
  }
}
