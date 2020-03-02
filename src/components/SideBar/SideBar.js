import React from "react";

import image from "admin-lte/dist/img/user2-160x160.jpg";
import logo from "admin-lte/dist/img/AdminLTELogo.png";
import Menu from "../Menu/Menu";

export default props => (
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/admin" className="brand-link">
      <i className="fas fa-dice-d20 mr-2 ml-3"></i>
      <span className="brand-text font-weight-light">Taberna Play</span>
    </a>
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <i
            className="fas fa-user-circle text-white mt-1"
            style={{ fontSize: "24px" }}
          ></i>
        </div>
        <div className="info">
          <a href="/profile" className="d-block">
            Wagner de Souza
          </a>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </aside>
);
