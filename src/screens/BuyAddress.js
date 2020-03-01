import React, { Component } from "react";
import Container from "../components/Layout/Container";
import { Row, Button } from "react-bootstrap";
import Grid from '../components/Layout/Grid'
import Carousel from "react-bootstrap/Carousel";
import SmallBox from '../components/Box/SmallBox'
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import LabelAndInput from "../components/Field/LabelAndInput";
import CheckBox from "../components/Checkbox/CheckBox";

export default class BuyAddress extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Container class="mt-100">
                    <Row>
                        <Grid cols="12 12 12 12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row mb-3">
                                        <Grid cols="3 3 3 3">
                                            <SmallBox
                                                title="Rua XXXXX, 22"
                                                text="Vila Maria"
                                                icon="fas fa-map-marker-alt blue-icon"
                                                actionText="Trocar endereço"
                                                color="m-0"
                                                aclass="blue-box"
                                            ></SmallBox>
                                        </Grid>
                                        <Grid cols="3 3 3 3">
                                            <SmallBox
                                                title="Rua XXXXX, 22"
                                                text="Vila Maria"
                                                icon="fas fa-map-marker-alt blue-icon"
                                                actionText="Trocar endereço"
                                                color="m-0"
                                                aclass="blue-box"
                                            ></SmallBox>
                                        </Grid>
                                        <Grid cols="3 3 3 3">
                                            <SmallBox
                                                title="Rua XXXXX, 22"
                                                text="Vila Maria"
                                                icon="fas fa-map-marker-alt blue-icon"
                                                actionText="Trocar endereço"
                                                color="m-0"
                                                aclass="blue-box"
                                            ></SmallBox>
                                        </Grid>
                                        <Grid cols="3 3 3 3">
                                            <SmallBox
                                                title="Rua XXXXX, 22"
                                                text="Vila Maria"
                                                icon="fas fa-map-marker-alt blue-icon"
                                                actionText="Trocar endereço"
                                                color="m-0"
                                                aclass="blue-box"
                                            ></SmallBox>
                                        </Grid>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <Row className="d-flex justify-content-center">
                                        <label>Cadastrar um novo endereço</label>
                                    </Row>
                                    <Row>
                                        <LabelAndInput cols="3 3 3 3" label="CEP"></LabelAndInput>
                                        <LabelAndInput cols="6 6 6 6" label="Rua"></LabelAndInput>
                                        <LabelAndInput cols="3 3 3 3" label="Número"></LabelAndInput>
                                    </Row>
                                    <Row>
                                        <LabelAndInput cols="4 4 4 4" label="Cidade"></LabelAndInput>
                                        <LabelAndInput cols="4 4 4 4" label="Complemento"></LabelAndInput>
                                        <Grid cols="2 2 2 2" class="mt-4">
                                            <CheckBox text="Salvar como favorito"></CheckBox>
                                        </Grid>
                                        <Grid cols="2 2 2 2" class="d-flex justify-content-end">
                                            <Button variant="outline-success" style={{ width: "100%", height: "50px" }} className="mt-3">Cadastrar e usar</Button>
                                        </Grid>
                                    </Row>
                                </div>
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
