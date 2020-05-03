import React from "react";
import './checkbox.css'

export default props => (
  <div>
    <input className="inp-cbx" id={props.name} type="checkbox" style={{display: 'none'}} />
    <label className="cbx" htmlFor={props.name}>
      <span>
        <svg width="12px" height="10px" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      <span>{props.text}</span>
    </label>
  </div>
);
