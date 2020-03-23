import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise";
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from "./routes";
import { loadState, saveState, deleteState } from "./localStorage";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const persistedState = loadState() || {}
const store = applyMiddleware(promise)(createStore)(reducers, persistedState, devtools);
store.subscribe(() => {
  saveState(store.getState())
})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
