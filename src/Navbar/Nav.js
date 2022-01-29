import React from "react";
import {NavLink} from "react-router-dom";
import './nav.css';
const Nav  = ()=>{
    return(
<>
<div className="container-fluid">
  <div className="row">
    <div className="col-10 mx-auto">
<nav className="navbar navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand" to="/">Ashish Chauhan</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link" to="/Service">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
      </li>
      </ul>
    </div>
    </div>
    </div>
</nav>
</div>
  </div>
</div>
</>
      );
}
export default Nav;