import React from "react";

export default props => (
  <div className={`small-box ${props.color || ``}`}>
    <div className="inner">
      <h3>{Math.floor(Math.random() * 250)}</h3>

      <p>{props.text}</p>
    </div>
    <div className="icon">
      <i className={props.icon}></i>
    </div>
    <a href="#" className="small-box-footer">
      Mais informações <i className="ml-1 fas fa-arrow-circle-right"></i>
    </a>
  </div>
);
