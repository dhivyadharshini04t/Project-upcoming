import React, { useState } from 'react';
import './UserRegister.css';
import { Link } from 'react-router-dom';

function UserRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setIsFirstNameValid(isValidName(e.target.value));
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setIsLastNameValid(isValidName(e.target.value));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(isValidEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(isValidPassword(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsConfirmPasswordValid(e.target.value === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      alert('Registration successful!');
    } else {
      alert('Please fill in all the fields with valid details.');
    }
  };

  const isValidName = (name) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  return (
    <div className="bg-img">
      <div className="contentRegister">
        <h1>SURVEY SYNC</h1>
        <h2>User Regsiter</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              required
              placeholder="First Name"
            />
            {!isFirstNameValid && (
              <p className="error-message">Please enter a valid first name.</p>
            )}
          </div>
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              required
              placeholder="Last Name"
            />
            {!isLastNameValid && (
              <p className="error-message">Please enter a valid last name.</p>
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
            {!isEmailValid && (
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
            {!isPasswordValid && (
              <p className="error-message">Password must be at least 6 characters long.</p>
            )}
          </div>
          <div className="field space">
            <span className="fa fa-lock"></span>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="pass-key"
              required
              placeholder="Confirm Password"
            />
            {!isConfirmPasswordValid && (
              <p className="error-message">Passwords do not match.</p>
            )}
          </div>
          <div className="field">
            <Link to="./Home">
              <input
                type="submit"
                value="REGISTER"
                disabled={
                  !isFirstNameValid ||
                  !isLastNameValid ||
                  !isEmailValid ||
                  !isPasswordValid ||
                  !isConfirmPasswordValid
                }
              />
            </Link>
          </div>
        </form>
        <div className="login">
          Already have an account? <Link to="/UserLogin">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
