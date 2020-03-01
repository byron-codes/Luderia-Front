import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "react-bootstrap/Carousel";
import Card from "./components/Card/Card";
import {
  faDiceD20,
  faHatWizard,
  faPuzzlePiece
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer/Footer";
import Container from "./components/Layout/Container";
import { Row, Button } from "react-bootstrap";
import CardImage from "./components/Card/CardImage";

export default props => (
  <React.Fragment>
    <NavBar></NavBar>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src="https://gamecows.com/wp-content/uploads/2019/10/Bloodborne-Card-Game-Unboxing1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bloodborne</h3>
          <p>Galápagos</p>
        </Carousel.Caption>
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
    <Container class="mt-5">
      <Row>
        <Card name="Jogos" icon={faPuzzlePiece}></Card>
        <Card name="Expansões" icon={faDiceD20}></Card>
        <Card name="Acessorios" icon={faHatWizard}></Card>
      </Row>
    </Container>

    <Container class="mt-5">
      <Row>
        <div className="col-md-12 text-center mb-3">
          <h3>Jogos Populares</h3>
        </div>
      </Row>
      <Row className="mr-5 ml-5">
        <CardImage></CardImage>
        <CardImage></CardImage>
        <CardImage></CardImage>
        <CardImage></CardImage>
      </Row>
      <Row className="mr-5 ml-5">
        <button className="btn btn-link button-more" type="button">
          Ver mais jogos
        </button>
      </Row>
    </Container>

    <Container class="mt-5">
      <Row>
        <div className="col-md-12 text-center mb-3">
          <h3>Expansões Populares</h3>
        </div>
      </Row>
      <Row className="mr-5 ml-5">
        <CardImage></CardImage>
        <CardImage></CardImage>
        <CardImage></CardImage>
        <CardImage></CardImage>
      </Row>
      <Row className="mr-5 ml-5">
        <button className="btn btn-link button-more" type="button">
          Ver mais expansões
        </button>
      </Row>
    </Container>

    <Container class="mt-5">
      <Row>
        <div className="col-md-12 text-center mb-3">
          <h3>Acessorios Populares</h3>
        </div>
      </Row>
      <Row className="mr-5 ml-5">
        <CardImage></CardImage>
        <CardImage></CardImage>
        <CardImage></CardImage>
        <CardImage></CardImage>
      </Row>
      <Row className="mr-5 ml-5 mb-5">
        <button className="btn btn-link button-more" type="button">
          Ver mais acessorios
        </button>
      </Row>
    </Container>

    <Footer></Footer>
  </React.Fragment>
);
