import React from "react";

export default props => (
  <li className="nav-item has-treeview">
    <a href={props.href} className="nav-link">
      <i className={`${props.icon} nav-icon`}></i>
      <p>
        {props.text}<i className="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul className="nav nav-treeview">{props.children}</ul>
  </li>
);
