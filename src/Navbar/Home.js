import React from "react";
import './home.css';
import website from'./website.png';

const Home = ()=>{
    return(
<>
<div className="container-fluid">
  <div className="row">
    <div className="col-10 mx-auto">
   
        <p>
          <strong className="text">Welcome</strong>
      <h1><strong>increase</strong><br/>Your Knowledge</h1>

    
</p>




<div className="img">
<img src={website} className="img" alt="website" />

</div> 
 
 </div>
        </div>
        </div>
        </>
       
    );
}
export default Home;