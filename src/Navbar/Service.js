import React from "react";
import "./service.css";
import webdev from'./webdev.png';
import Reactjs from'./Reactjs.png';
import angularjs from'./angularjs.png';
import {NavLink} from "react-router-dom";

const Service = ()=>{
    return(
        <>
   

  

<div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="card"  >
    <div className="row"  >
    <img src={webdev} className="card" alt="webdev" />
  <div className="card-body">
    <h5 className="card-title">Web deveLopment</h5>
    <p className="card-text">Best Web development Course<br/>Fees for six month 2000Rs<br/> if you are interested in the course then contact</p>
  
    <NavLink to="/Contact"className="btn btn-outline-success">Contact</NavLink>
  </div>
</div>
</div>
    </div>
    <div class="col-sm">
    <div className="card"  >
    <div className="row"  >
    <img src={angularjs} className="card" alt="angularjs" />
  <div className="card-body">
    <h5 className="card-title">Angularjs</h5>
    <p className="card-text">Best Web Angularjs<br/>Fees for six month 3000Rs<br/> if you are interested in the course then contact</p>
  
    <NavLink to="/Contact"className="btn btn-outline-warning">Contact</NavLink>
  </div>
</div>
</div>
    </div>
    <div class="col-sm">
    <div className="card"  >
    <div className="row"  >
    <img src={Reactjs} className="card" alt="Reactjs" />
  <div className="card-body">
    <h5 className="card-title">Reactjs</h5>
    <p className="card-text">Best Web Reactjs<br/>Fees for six month 2500Rs<br/> if you are interested in the course then contact</p>
  
    <NavLink to="/Contact"className="btn btn-outline-primary">Contact</NavLink>
  </div>
</div>
</div>
    </div>
  </div>
</div>

   </>
    );
}
export default Service  ;