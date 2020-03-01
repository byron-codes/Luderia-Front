import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import App from "./app";
import ItensList from "./screens/ItensList";
import Item from "./screens/Item";
import Cart from "./screens/Cart";
import BuyCard from "./screens/BuyCard";
import BuyAddress from "./screens/BuyAddress";
import Coupon from "./screens/Cupon";
import CouponList from "./screens/CouponList";
import Accessories from "./screens/Accessories";
import AccessoriesList from "./screens/AccessoriesList";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import SalesClient from "./screens/SalesClient";

export default props => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/itens" component={ItensList} exact></Route>
      <Route path="/itens/*" component={Item} exact></Route>
      <Route path="/cart" component={Cart} exact></Route>
      <Route path="/cart/card" component={BuyCard} exact></Route>
      <Route path="/cart/address" component={BuyAddress} exact></Route>
      <Route path="/login" component={Login} exact></Route>
      <Route path="/sales" component={SalesClient} exact></Route>
      <Route path="/admin/dashboard" component={Dashboard} exact></Route>
      <Route path="/admin/coupon" component={Coupon} exact></Route>
      <Route path="/admin/coupon/list" component={CouponList} exact></Route>
      <Route path="/admin/accessories" component={Accessories} exact></Route>
      <Route path="/admin/accessories/list" component={AccessoriesList} exact></Route>
      <Redirect from="*" to="/404"></Redirect>
    </Switch>
  </Router>
);
