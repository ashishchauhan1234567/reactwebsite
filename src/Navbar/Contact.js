import React from "react";
import './contact.css';
const Contact = ()=>{
    return(

     <>

<div className="name">
  <strong>Registration Form</strong>
</div>


<div className="form">



<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input  class="form-control" id="inputEmail4" placeholder="Enter The First Name" />
  </div>
  
  <div class="col-md-6">
    <label  class="form-label">Last Name</label>
    <input class="form-control" id="inputPassword4 /" placeholder="Enter The Last Name" />
  </div>

  <div class="col-md-6">
    <label for="Email" class="form-label">Email ID</label>
    <input   type="email" class="form-control" id="inputPassword4 /" placeholder="ex- 12345@gmail.com" />
  </div>
  <div class="col-md-6">
  <label for="inputPassword4" class="form-label">Contact Number</label>
  <input type="text" id="UserMobile" maxlength="10" data-fv-numeric="true" data-fv-numeric-message="Please enter valid phone numbers" data-fv-phone-country11="IN" required="required" data-fv-notempty-message="This field cannot be left blank." placeholder=" Enter The Mobile No. " class="form-control" name="data[User][mobile]" data-fv-field="data[User][mobile]"/>
  </div>



  <div class="col-md-4">
    <label for="inputState" class="form-label">Select Course</label>
    <select id="inputState" class="form-select">
      <option selected>Select Course</option>
      <option>Web Development</option>
      <option>Reactjs</option>
      <option>AngularJs</option>
      
    </select>
  </div>

  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter The Address" />
  </div>
  <div class="col-12">
    <label for="inputConformAddress" class="form-label">Confirm Address</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Enter The Permanent Address" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Select State</option>
      <option>Uttar Pradesh</option>
      <option>Delhi</option>
      <option>Bihar</option>
      <option>Madhya Pradesh</option>
      <option>Goa</option>
    </select>
  </div>
 
  <div class="col-12">
    <button type="submit" class="btn btn-outline-success">Submit Form</button>
  </div>
</form>
</div>

  </>
    );
}
export default Contact;