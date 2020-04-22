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
    <MenuTag text="Vendas"></MenuTag>
    <MenuItem icon="far fa-dot-circle" text="Entregas" href="/admin/shipping"></MenuItem>
    <MenuItem icon="far fa-dot-circle" text="Trocas" href="/admin/devolutions"></MenuItem>

    <MenuTag text="Produtos"></MenuTag>
    <MenuTree icon="fas fa-dice" text="Jogos">
      <MenuItem icon="far fa-dot-circle" text="Cadastrar" href="/admin/game"></MenuItem>
      <MenuItem icon="far fa-dot-circle" text="Pesquisar" href="/admin/games"></MenuItem>
    </MenuTree>
    <MenuTree icon="fas fa-plus-circle" text="Espansões">
      <MenuItem icon="far fa-dot-circle" text="Cadastrar" href="/admin/expansion"></MenuItem>
      <MenuItem icon="far fa-dot-circle" text="Pesquisar" href="/admin/expansions"></MenuItem>
    </MenuTree>
    <MenuTree icon="fas fa-shopping-bag" text="Acessórios">
      <MenuItem icon="far fa-dot-circle" text="Cadastrar" href="/admin/accessory"></MenuItem>
      <MenuItem icon="far fa-dot-circle" text="Pesquisar" href="/admin/accessories"></MenuItem>
    </MenuTree>
    
    <MenuTag text="Outros"></MenuTag>
    <MenuTree icon="fas fa-ticket-alt" text="Cupons">
    <MenuItem
      href="/admin/coupon"
      icon="far fa-dot-circle"
      text="Cadastrar"
    ></MenuItem>
    <MenuItem
      href="/admin/coupons"
      icon="far fa-dot-circle"
      text="Pesquisar"
    ></MenuItem>
    </MenuTree>
    <MenuTree icon="fas fa-users" text="Usuário">
    <MenuItem
      href="/admin/users"
      icon="far fa-dot-circle"
      text="Pesquisar"
    ></MenuItem>
    </MenuTree>
    <MenuTree icon="fas fa-chart-pie" text="Relatórios">
    <MenuItem
      href="/admin/reports"
      icon="far fa-dot-circle"
      text="Pesquisar"
    ></MenuItem>
    </MenuTree>
  </ul>
);
