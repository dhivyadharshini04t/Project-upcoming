import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './UserRegister.css';

function UserRegister() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsUsernameValid(isValidUsername(e.target.value));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(isValidEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(isValidPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (isUsernameValid && isEmailValid && isPasswordValid) {
      // Do the registration logic here, e.g., API call, etc.
      console.log('Registration successful!');

      // Redirect to the desired page after successful registration.
      history.push('/UserRegister');
    } else {
      console.log('Please fill in all the fields with valid details.');
    }
  };

  const isValidUsername = (username) => {
    const usernameRegex = /^[a-zA-Z]+$/;
    return usernameRegex.test(username);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const isFormValid = () => {
    return isUsernameValid && isEmailValid && isPasswordValid;
  };

  return (
    <div className="bg-img">
      <div className="contentRegister">
        <h1>SURVEY SYNC</h1>
        <h2>Admin Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
              placeholder="Username"
            />
            {!isUsernameValid && formSubmitted && (
              <p className="error-message">Please enter a valid username.</p>
            )}
          </div>
          <div className="field">
            <span className="fa fa-envelope"></span>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Email"
            />
            {!isEmailValid && formSubmitted && (
              <p className="error-message">Please enter a valid email address.</p>
            )}
          </div>
          <div className="field space">
            <span className="fa fa-lock"></span>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="pass-key"
              required
              placeholder="Password"
            />
            {!isPasswordValid && formSubmitted && (
              <p className="error-message">Password must be at least 6 characters long.</p>
            )}
          </div>
          <Link to="./AdminLogin">
          <div className="field">
            <input
              type="submit"
              value="REGISTER"
              disabled={!isFormValid()}
            />
          </div></Link>
        </form>
        <div className="login">
          Already have an account? <Link to="/AdminLogin">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
