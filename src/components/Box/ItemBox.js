import React from "react";

export default props => (
  <div className="small-box ">
    <div className="inner mb-3">
      <div className="row m-0">
        <div className="col-md-6 p-0 mt-2">
          <span>{props.title}</span>
        </div>
        <div
          className="col-md-6 p-0 d-flex justify-content-end"
          onClick={e => props.onClick(props.id)}
          data-cy={props.iconDataCy}
        >
          <i className="fas fa-times-circle" style={{ color: "red" }}></i>
        </div>
      </div>
      <p className="mb-0">{props.text}</p>
      {props.subText ? <p>{props.subText}</p> : <div></div>}
    </div>
    <div className="icon">
      <i className={`${props.icon} ${props.iconColor} mt-2`} data-cy></i>
    </div>
    <div></div>
  </div>
);
