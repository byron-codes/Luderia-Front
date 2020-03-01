import React from "react";

export default props => (
  <div className={`small-box ${props.color || ``}`}>
    <div className={`inner ${props.title ? "mb-3" : ``}`}>
      {props.title ? (
        <span>{props.title}</span>
      ) : (
        <h3>{Math.floor(Math.random() * 250)}</h3>
      )}
      <p>{props.text}</p>
    </div>
    <div className="icon">
      <i className={props.icon}></i>
    </div>
    {props.nohref ? (
      <div className="mt-3"></div>
    ) : (
      <a href={props.href} className={`small-box-footer ${props.aclass}`}>
        {props.actionText || "Mais informações"}{" "}
        <i className="ml-1 fas fa-arrow-circle-right"></i>
      </a>
    )}
  </div>
);
