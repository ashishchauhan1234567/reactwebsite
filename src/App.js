import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./app.css";
import Topnav from "./Navbar/Topnav";
import Nav from "./Navbar/Nav";
import Home from "./Navbar/Home";
import Contact from "./Navbar/Contact";
import Service from "./Navbar/Service";
import {BrowserRouter as Router,Switch,Route,Redirect,} from "react-router-dom";
const App = () => {
  return (
    <>
      <Topnav />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Service" component={Service} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};
export default App;
