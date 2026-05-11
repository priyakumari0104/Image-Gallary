import React from "react";
import "../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
 axios.post("http://localhost:3000/login/login-page", {
      email: formData.get("email"),
      password: formData.get("password")  })
      .then((res) => {
        alert("Login successful!");
        navigate("/create-post"); // Redirect to dashboard on successful login
      })
      .catch((err) => {
        console.log(err);
        alert("Login failed. Please check your credentials and try again.");
      });
   

  };

  return (
    <div className="auth-container">

      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Login</h1>

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

        <button type="submit">Login</button>
          <button type="button" onClick={() => navigate("/")}>
            Click here to sign up
          </button>
          </form>

    </div>
  );
}

export default Login;