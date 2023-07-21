import React, { useState } from 'react';
import './AddComment.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is installed and imported

const Post = () => {
  const [formData, setFormData] = useState({
    id: '',
    enteryourquestion: '',
    answer: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isDataValid = (data) => {
    // Implement your data validation logic here
    // For example, check if all required fields are filled
    return true; // Return true if data is valid, otherwise return false
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: formData.id,
      enteryourquestion: formData.enteryourquestion,
      answer: formData.answer
    };

    if (isDataValid(data)) {
      axios.post('http://localhost:8080/addCommentDetails', data)
        .then((response) => {
          // Handle success if needed
          console.log("Question added successfully!");
        })
        .catch((error) => {
          // Handle error if needed
          console.error("Error adding Question:", error);
        });
    } else {
      console.error("Invalid data, please fill in all fields.");
    }
  };

  return (
    <div className="ram">
      <div className="feedbackFormContainer1">
        <h1 className="formTitle1">SURVEY SYNC</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="formField1">
            <input
              type="text"
              name="id"
              className="input-name1"
              placeholder="Enter ID"
              value={formData.id}
              onChange={handleChange}
            />
          </div>
          <div className="formField1">
            <input
              type="text"
              name="enteryourquestion"
              className="input-name1"
              placeholder="Enter your question here"
              value={formData.question}
              onChange={handleChange}
            />
          </div>
          <div className="formField1">
            <input
              type="text"
              name="answer"
              className="input-name"
              placeholder="Enter your answer"
              value={formData.option1}
              onChange={handleChange}
            />
          </div>
          
          
         
          <button type="submit" className="submitButton1">
            Submit
          </button>
        </form>
        <Link to="./End">Go to End</Link>
      </div>
    </div>
  );
};

export default Post;
