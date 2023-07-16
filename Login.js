import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    // If both email and password are valid
    setErrorMessage("");
    console.log("Login submitted:", { email, password });
    // Perform further login actions
  };

  return (
    <div className="login-register-container">
      <div className="form-container login-form-container">
        <h1>SURVEY SYNC</h1>
        <h2>LOGIN</h2>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <label htmlFor="login-email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your email@gmail.com"
            id="login-email"
            name="login-email"
          />
          <label htmlFor="login-password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="login-password"
            name="login-password"
          />
          <button type="submit" className="login-button">
            <Link to="/Home">Log In</Link>
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        <br />
        <Link to="/Register">
          <button className="link-button">Don't have an account? Register here.</button>
        </Link>
      </div>
    </div>
  );
};
export default Login 