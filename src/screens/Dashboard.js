import React, { Component } from "react";
import Container from "../components/Layout/Container";
import { Row } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import SmallBox from '../components/Box/SmallBox'

export default class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Grid cols="12 4">
                        <SmallBox text="Novas compras" icon="fas fa-shopping-bag" color="bg-info"></SmallBox>
                    </Grid>
                    <Grid cols="12 4">
                        <SmallBox text="Novos usuários" icon="fas fa-user-plus" color="bg-warning"></SmallBox>
                    </Grid>
                    <Grid cols="12 4">
                        <SmallBox text="Novas trocas" icon="fas fa-undo-alt" color="bg-danger"></SmallBox>
                    </Grid>
                </Row>
            </Container>
        )
    }
}