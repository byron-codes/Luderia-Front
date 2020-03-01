import React from "react";
import MenuItem from "./MenuItem";
import MenuTree from "./MenuTree";
import MenuTag from "./MenuTag";

export default props => (
  <ul
    className="nav nav-pills nav-sidebar flex-column"
    data-widget="treeview"
    role="menu"
    data-accordion="false"
  >
    <MenuTag text="Dashboard"></MenuTag>
    <MenuItem icon="far fa-dot-circle" text="Dashboard"></MenuItem>
    <MenuTag text="Vendas"></MenuTag>
    <MenuItem icon="far fa-dot-circle" text="Pesquisar"></MenuItem>
    <MenuItem icon="far fa-dot-circle" text="Devoluções"></MenuItem>
    <MenuItem icon="far fa-dot-circle" text="Entregas"></MenuItem>
    <MenuTag text="Produtos"></MenuTag>
    <MenuTree icon="fas fa-circle" text="Jogos">
      <MenuItem icon="far fa-dot-circle" text="Cadastrar"></MenuItem>
      <MenuItem icon="far fa-dot-circle" text="Pesquisar"></MenuItem>
      <MenuItem icon="far fa-dot-circle" text="Estoque"></MenuItem>
    </MenuTree>
    <MenuTree icon="fas fa-circle" text="Espansões">
      <MenuItem icon="far fa-dot-circle" text="Cadastrar"></MenuItem>
      <MenuItem icon="far fa-dot-circle" text="Pesquisar"></MenuItem>
      <MenuItem icon="far fa-dot-circle" text="Estoque"></MenuItem>
    </MenuTree>
    <MenuTree icon="fas fa-circle" text="Acessórios">
      <MenuItem
        href="/accessories"
        icon="far fa-dot-circle"
        text="Cadastrar"
      ></MenuItem>
      <MenuItem
        href="/accessories/list"
        icon="far fa-dot-circle"
        text="Pesquisar"
      ></MenuItem>
      <MenuItem icon="far fa-dot-circle" text="Estoque"></MenuItem>
    </MenuTree>
    <MenuTag text="Outros"></MenuTag>
    <MenuTree icon="fas fa-circle" text="Cupons">
    <MenuItem
      href="/coupon"
      icon="far fa-dot-circle"
      text="Cadastrar"
    ></MenuItem>
    <MenuItem
      href="/coupon/list"
      icon="far fa-dot-circle"
      text="Pesquisar"
    ></MenuItem>
    </MenuTree>
    <MenuTree icon="fas fa-circle" text="Usuário">
    <MenuItem
      href="/coupon/list"
      icon="far fa-dot-circle"
      text="Pesquisar"
    ></MenuItem>
    </MenuTree>
    <MenuTree icon="fas fa-circle" text="Relatórios">
    <MenuItem
      href=""
      icon="far fa-dot-circle"
      text="Pesquisar"
    ></MenuItem>
    </MenuTree>
  </ul>
);
