import React from "react";
import { Row, Button, Card } from "react-bootstrap";
import Grid from "../Layout/Grid";
import { doubleToReal } from "../../util/converters";
import { connect } from "react-redux";

export default props => (
  <Card>
    <div className="row mt-3 mb-3">
      <Grid cols="7 7 7 7">
        <div style={{ marginLeft: "50px" }} className="d-flex">
          <div style={{ maxHeight: "100px", maxWidth: "100px" }}>
            <img
              src={props.image}
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            ></img>
          </div>
          <div className="ml-3">
            <label>{props.name}</label>
            <p className="font-weight-bold">{doubleToReal(props.value)}</p>
          </div>
        </div>
      </Grid>
      <Grid cols="5 5 5 5">
        <div className="form-group">
          <label>Quantidade</label>
          <Row>
            <Grid cols="3 3 3 3">
              <input
                className="form-control"
                placeholder="10"
                type="number"
                value={props.quantity}
                onChange={e => props.onChange(props.id, e.target.value)}
              ></input>
            </Grid>
            <Grid cols="3 3 3 3">
              <Button type="button" variant="outline-danger" onClick={() => props.onRemove(props.id)}>
                <i className="fas fa-trash-alt"></i>
              </Button>
            </Grid>
          </Row>
        </div>
      </Grid>
    </div>
  </Card>
);
