import React from "react";
import Grid from "../Layout/Grid";

export default props => (
  <Grid cols={props.cols}>
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        data-cy={props.dataCy}
        value={props.value || ""}
        name={props.name}
        onChange={e => props.onChange(props.name, (props.mask ? props.mask(e.target.value) : e.target.value))}
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
        maxLength={props.maxlength || ''}
      ></input>
      {props.errors ? props.errors.map(erro => (
        <div style={{ color: "red", marginTop: "2px" }}>
          <i className="fas fa-exclamation-circle mr-2"></i>
          <span>{erro}</span>
        </div>
      )) : <div></div>}
    </div>
  </Grid>
);
