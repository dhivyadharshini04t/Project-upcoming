import React from 'react';
import './Start.css';
import { Link } from 'react-router-dom';

function ImagePage() {
  return (
    <div className="image-container">
      <Link to="/nextpage">
        <img
          src="https://www.paleodata.com/wp-content/uploads/2020/09/chart-frequency-survey.jpg"
          alt="Next Page"
          className="clickable-image"
        />
      </Link>
    </div>
  );
}

export default ImagePage;