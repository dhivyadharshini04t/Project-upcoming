import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function App() {
  const handleClick = (buttonName) => {
    console.log(`Button ${buttonName} clicked`);
    // Perform desired actions here
  };

  return (
    <div className="Button-container">
      <Link to="/Home" className="home-button">Home</Link>
      <div className="container-app">
        <h1>SURVEY SYNC</h1>

        <div className="container-app2">
          <h2>Incorporate a mix of question types, such as multiple-choice, rating scales, open-ended questions, and Likert scales, to capture both quantitative and qualitative feedback. <br />This allows for a more comprehensive understanding of respondents' opinions and experiences.</h2>
        </div>
        <div className="button-container">
          <Link to="./Radio" target="_blank">
            <button className="myButton-radio" onClick={() => handleClick('1')}>Radio Survey</button>
          </Link>

          <Link to="./Rating" target="_blank">
            <button className="myButton-rating" onClick={() => handleClick('2')}>Rating Survey</button>
          </Link>

          <Link to="./Comment/" target="_blank">
            <button className="myButton-comment" onClick={() => handleClick('3')}>Comment Survey</button>
          </Link>

          <Link to="./Likert" target="_blank">
            <button className="myButton-likert" onClick={() => handleClick('3')}>Likert Survey</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
