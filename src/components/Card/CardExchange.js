import React from "react";
import { Card } from "react-bootstrap";

export default props => (
  <Card>
    <div className="mt-3 mb-3 d-flex" style={{ marginLeft: "20px" }}>
      <div style={{ maxHeight: "100px", maxWidth: "100px" }}>
        <img
          src={props.image}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        ></img>
      </div>
      <div className="ml-3">
        <label>{props.name}</label>
        <p className="font-weight-bold">{props.value}</p>
      </div>
    </div>
  </Card>
);
