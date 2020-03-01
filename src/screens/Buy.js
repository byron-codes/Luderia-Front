import React, { Component } from "react";
import Container from "../components/Layout/Container";
import { Row } from "react-bootstrap";
import Grid from '../components/Layout/Grid'

import SmallBox from '../components/Box/SmallBox'

export default class Buy extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Grid cols="6 6 6 6">
              <div className="card">
                <Carousel>
                  <Carousel.Item>
                    <SmallBox
                      text="Novas compras"
                      icon="fas fa-shopping-bag"
                      color="bg-info"
                    ></SmallBox>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block carousel-image"
                      src="https://gamecows.com/wp-content/uploads/2019/07/Zombicide-Green-Horde-Unboxing.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Zombicide</h3>
                      <p>Galápagos</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Grid>
            <Grid cols="6 6 6 6"></Grid>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
