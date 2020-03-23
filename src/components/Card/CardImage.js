import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { doubleToReal } from "../../util/converters";

export default class CardImage extends Component {
  render() {
    return (
      <div
        className="col col-md-3 justify-content-center d-flex mouse-click"
        onClick={this.props.onClick}
      >
        <Card style={{ width: "18rem", padding: "5px" }}>
          <Card.Img
            variant="top"
            src={this.props.image}
          />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{doubleToReal(this.props.value || 0)}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
