import React from "react";

import image from "admin-lte/dist/img/user2-160x160.jpg";
import logo from "admin-lte/dist/img/AdminLTELogo.png";
import Menu from "../Menu/Menu";

export default props => (
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" className="brand-link">
      <img
        src={logo}
        alt="AdminLTE Logo"
        className="brand-image img-circle elevation-3"
      />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={image} className="img-circle elevation-2" alt="Foto de perfil" />
        </div>
        <div className="info">
          <a href="/example" className="d-block">
            Alexander Pierce
          </a>
        </div>
      </div>
        <Menu></Menu>
    </div>
  </aside>
);
