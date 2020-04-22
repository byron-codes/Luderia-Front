import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import App from "./app";
import ItensList from "./screens/ItensList";
import Item from "./screens/Item";
import Cart from "./screens/Cart";
import BuyCard from "./screens/UserCard";
import BuyAddress from "./screens/UserAddress";
import Coupon from "./screens/Cupon";
import CouponList from "./screens/CouponList";
import Accessories from "./screens/Accessories";
import AccessoriesList from "./screens/AccessoriesList";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Register";
import SalesClient from "./screens/SalesClient";
import Sale from "./screens/Sale";
import Profile from "./screens/Profile";
import SaleChange from "./screens/SaleChange";
import Devolutions from "./screens/Devolutions";
import DevolutionsActions from "./screens/DevolutionsAction";
import Shipping from "./screens/Shipping";
import Reports from "./screens/Reports";
import CouponClient from "./screens/CouponClient";
import UserList from "./screens/UserList";
import Game from "./screens/Game";
import GameList from "./screens/GameList";
import Expansion from "./screens/Expansion";
import ExpansionList from "./screens/ExpansionList";
import LoginAdmin from "./screens/LoginAdmin";

export default (props) => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/itens" component={ItensList} exact></Route>
      <Route path="/itens/:id" component={Item} exact></Route>
      <Route path="/cart" component={Cart} exact></Route>
      <Route path="/user/:id/cards" component={BuyCard} exact></Route>
      <Route path="/user/:id/addresses" component={BuyAddress} exact></Route>
      <Route path="/register" component={Login} exact></Route>
      <Route path="/user/:id/coupon" component={CouponClient} exact></Route>
      <Route path="/sales" component={SalesClient} exact></Route>
      <Route path="/sale/change/:id" component={SaleChange} exact></Route>
      <Route path="/sale/:id" component={Sale} exact></Route>
      <Route path="/user/:id" component={Profile} exact></Route>
      <Route path="/admin" component={Dashboard} exact></Route>
      <Route path="/admin/coupon" component={Coupon} exact></Route>
      <Route path="/admin/coupon/:id" component={Coupon} exact></Route>
      <Route path="/admin/coupons" component={CouponList} exact></Route>
      <Route path="/admin/users" component={UserList} exact></Route>
      <Route path="/admin/accessory" component={Accessories} exact></Route>
      <Route path="/admin/accessory/:id" component={Accessories} exact></Route>
      <Route
        path="/admin/accessories"
        component={AccessoriesList}
        exact
      ></Route>
      <Route path="/admin/reports" component={Reports} exact></Route>
      <Route path="/admin/shipping" component={Shipping} exact></Route>
      <Route path="/admin/devolutions" component={Devolutions} exact></Route>
      <Route
        path="/admin/devolutions/actions/:id"
        component={DevolutionsActions}
        exact
      ></Route>
      <Route path="/admin/game" component={Game} exact></Route>
      <Route path="/admin/game/:id" component={Game} exact></Route>
      <Route path="/admin/games" component={GameList} exact></Route>
      <Route path="/admin/expansion" component={Expansion} exact></Route>
      <Route path="/admin/expansion/:id" component={Expansion} exact></Route>
      <Route path="/admin/expansions" component={ExpansionList} exact></Route>
      <Route path="/admin/login" component={LoginAdmin} exact></Route>
      <Redirect from="*" to="/404"></Redirect>
    </Switch>
  </Router>
);
