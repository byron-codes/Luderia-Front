import React, { Component } from "react";
import { Card, Row } from "react-bootstrap";
import Container from "../Layout/Container";
import Grid from "../Layout/Grid";
import axios from "axios";
import { baseURL } from "../../endpoints";
import swal from "sweetalert";

export default class CardDevolution extends Component {
  state = {
    classAllow: "btn btn-outline-success",
    classAllowClick: "btn btn-success",
    classDeny: "btn btn-outline-danger",
    classDenyClick: "btn btn-danger",
    activeAllow: "btn btn-outline-success",
    activeDeny: "btn btn-outline-danger",
  };

  constructor(props) {
    super(props);
    this.onClickAllow = this.onClickAllow.bind(this);
    this.onClickDeny = this.onClickDeny.bind(this);
  }

  onClickAllow() {
    axios
      .put(`${baseURL}/sale-change-item/authorized/${this.props.id}/true`)
      .then((result) => {
        let activeAllow =
          this.state.activeAllow == this.state.classAllow
            ? this.state.classAllowClick
            : this.state.classAllow;
        this.setState({
          activeAllow,
          activeDeny: this.state.classDeny,
        });
      });
  }

  onClickDeny() {
    axios
      .put(`${baseURL}/sale-change-item/authorized/${this.props.id}/false`)
      .then((result) => {
        let activeDeny =
          this.state.activeDeny == this.state.classDeny
            ? this.state.classDenyClick
            : this.state.classDeny;
        this.setState({
          activeDeny,
          activeAllow: this.state.classAllow,
        });
      });
  }

  render() {
    return (
      <Card>
        <Container class="mt-3">
          <Row>
            <Grid cols="8 8 8 8">
              <p className="font-weight-bold m-0">{this.props.name}</p>
              <p className="font-weight-bold m-0">{this.props.value}</p>
              <p className="font-weight-bold m-0">
                {this.props.quantity} Unidades
              </p>
              <p className="font-weight-bold m-0">
                Motivo: {this.props.reason}
              </p>
            </Grid>
            <Grid cols="4 4 4 4">
              <button
                style={{ width: "100px" }}
                className={`${this.state.activeDeny}`}
                onClick={() => this.onClickDeny()}
                data-cy={this.props.dataCyDeny}
              >
                Negar
              </button>
              <button
                style={{ width: "100px" }}
                className={`${this.state.activeAllow} mt-3`}
                onClick={() => this.onClickAllow()}
                data-cy={this.props.dataCyAllow}
              >
                Autorizar
              </button>
            </Grid>
          </Row>
          <Row>
            <Grid cols="12 12 12 12">
              <label>Descrição:</label>
              <span> {this.props.description}</span>
            </Grid>
          </Row>
        </Container>
      </Card>
    );
  }
}
