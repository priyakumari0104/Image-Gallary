import React from "react";
import "../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
 
  const navigate= useNavigate();
 
 const handleSubmit= async(e)=>{
  e.preventDefault();
  const formdata= {
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value
  };
  await axios.post("http://localhost:3000/auth/signup",formdata)
  .then((res)=>{
    alert("Signup successful! Please login to continue.");
navigate("/login");
  })  
.catch((err)=>{
  console.log(err);
   alert(err.response.data.message);
})

  }
  return (
    <div className="auth-container">

      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />

        <button type="submit">Sign Up</button>
         <button type="submit" onClick={() => navigate("/login")}>
          Click here for login
        </button>
      </form>
       
    </div>
  );
}

export default Signup;