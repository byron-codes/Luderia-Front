import React from "react";

import "./imports";

import Header from "./components/NavBar/NavBarAdmin";
import Sidebar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/FooterAdmin";
import LineChart from "./components/Chart/LineChart";
import Cupon from "./screens/Cupon";
// import Messages from './components/Message/Message'
import Routes from "./adminRoutes";

export default props => (
  <div className="wrapper">
    <Header></Header>
    <Sidebar></Sidebar>
    <div className="content-wrapper">
      <div className="m-3">
        <Routes></Routes>
      </div>
    </div>
    <Footer></Footer>
    {/* <Messages></Messages> */}
  </div>
);
