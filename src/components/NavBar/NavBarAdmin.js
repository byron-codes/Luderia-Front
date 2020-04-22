import React from "react";
import { Button } from "react-bootstrap";

export default (props) => (
  <nav className="main-header navbar navbar-expand navbar-black navbar-dark">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="/teste">
          <i className="fas fa-bars"></i>
        </a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Button variant="danger" onClick={() => (window.location = "/")}>
          Sair
        </Button>
      </li>
    </ul>
  </nav>
);
