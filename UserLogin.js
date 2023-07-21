import React, { useState } from 'react';
import './UserLogin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    if (enteredEmail && !isValidEmail(enteredEmail)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);

    if (enteredPassword.length > 0 && enteredPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data={
      email:email,
      password:password
    }
    
    axios.post('http://127.0.0.1:8080/addDetails', data);
    
    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    
    if (password.length > 0 && password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }
    
    // Rest of the validation and login logic...
    alert('Login successful!');
  };
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Determine if the login button should be enabled
  const isLoginEnabled = isValidEmail(email) && password.length >= 6;

  return (
    <div className="bg-img">
      <div className="contentUser">
        <h1>SURVEY SYNC</h1>
        <h2>User Login</h2><br></br>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Email or Phone"
            />
          </div>
          {emailError && <div className="error-msg red">{emailError}</div>}
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
            <span className="show">SHOW</span>
          </div>
          {passwordError && <div className="error-msg red">{passwordError}</div>}
          
          <div className="field">
            <Link to="./AfterUserLogin">
              <input type="submit" value="LOGIN" disabled={!isLoginEnabled} />
            </Link>
          </div>
        </form>
        <div className="login">Or login with</div>
        <div className="links">
        </div>
        <div className="signup">
          Don't have an account?
          <a href="#">
            <Link to="./UserRegister">Signup Now</Link>
          </a>
        </div>
      </div>
    </div>
  );
}
export default App;
