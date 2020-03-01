import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Coupon from "./screens/Cupon";
import CouponList from "./screens/CouponList";

import Accessories from "./screens/Accessories";
import AccessoriesList from "./screens/AccessoriesList";

import Dashboard from "./screens/Dashboard";

export default props => (
  <Router>
    <Switch>
      <Route path="/admin/dashboard" component={Dashboard} exact></Route>
      <Route path="/admin/coupon" component={Coupon} exact></Route>
      <Route path="/admin/coupon/list" component={CouponList} exact></Route>
      <Route path="/admin/accessories" component={Accessories} exact></Route>
      <Route path="/admin/accessories/list" component={AccessoriesList} exact></Route>
      <Redirect from="/admin/*" to="/admin/"></Redirect>
    </Switch>
  </Router>
);
