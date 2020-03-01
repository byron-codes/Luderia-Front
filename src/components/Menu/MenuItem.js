import React from "react";

export default props => (
  <li className="nav-item">
    <a href={props.href} className="nav-link">
      <i className={`${props.icon} nav-icon`}></i>
      <p>{props.text}</p>
    </a>
  </li>
);
