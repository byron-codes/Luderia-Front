import React from "react";
import Grid from "../Layout/Grid";
import { reducer } from "react-redux-toastr";

export default props => (
  <Grid cols={props.cols}>
    <div className="form-group">
      <input
        data-cy={props.dataCy}
        onChange={e => props.onChange(props.name, e.target.value)}
        value={props.value}
        name={props.name}
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
      ></input>
      {props.errors.map(erro => (
        <div style={{ color: "red" , marginTop: "2px"}}>
          <i class="fas fa-exclamation-circle mr-2"></i>
          <span>{erro}</span>
        </div>
      ))}
    </div>
  </Grid>
);
