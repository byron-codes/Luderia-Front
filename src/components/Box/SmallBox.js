import React from "react";

export default props => (
  <div className={`small-box ${props.class || ``}`}>
    <div className={`inner ${props.title ? "mb-3" : ``}`}>
      {props.title ? <span>{props.title}</span> : <h3>{props.number}</h3>}
      <p className={props.nohref ? `mb-5` : `${props.pClass}`}>{props.text}</p>
    </div>
    <div className={`icon ${props.iconClass || ``}`}>
      <i className={props.icon}></i>
    </div>
    {props.nohref ? (
      <div></div>
    ) : (
      <a href={props.href} data-cy={props.dataCy} onClick={props.onClick} className={`small-box-footer mouse-click ${props.aclass}`}>
        {props.actionText}
        <i className="ml-1 fas fa-arrow-circle-right"></i>
      </a>
    )}
  </div>
);
