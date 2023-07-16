import React from 'react';
import './App.css';
import './FrontPage.css';
import Login from './Login';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="background-image"></div>
        <div className="button-container">
          <Link to="/UserLogin">
          <button className="app-animated-button">User Login</button></Link>
          <Link to="/AdminLogin">
            <button className="app-animated-button">Admin Login</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default App;
