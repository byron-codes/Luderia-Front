import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Admin from "./adminApp";
import App from "./app";
import ItensList from "./screens/ItensList";
import Item from "./screens/Item";
import Cart from "./screens/Cart";
import Buy from "./screens/Buy";

export default props => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/itens" component={ItensList} exact></Route>
      <Route path="/itens/*" component={Item} exact></Route>
      <Route path="/cart" component={Cart} exact></Route>
      <Route path="/cart/buy" component={Cart} exact></Route>
      <Route path="/admin" component={Admin} exact></Route>
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  </Router>
);
