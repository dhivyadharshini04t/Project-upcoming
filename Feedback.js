import React, { useState } from 'react';
import './Feedback.css';
import { Link } from 'react-router-dom';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    survey: '',
    hearaboutus: '',
    ratings: '',
    comment: '',
  });

  const { name, email, age, survey, hearaboutus, ratings, comment } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = () => {
    return name && email && age && survey && hearaboutus && ratings && comment;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      // Submit the form data
      console.log("Form submitted successfully!");
    } else {
      console.error("Please fill in all the fields.");
    }
  };

  return (
    <div className="Stef">
      <div className="feedbackFormContainer">
        <h1 className="formTitle">SURVEY FEEDBACK FORM</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="formField">
            <label htmlFor="name" className="label-name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-name"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <label htmlFor="email" className="label-email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <label htmlFor="age" className="label-age">
              Age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              className="input-age"
              placeholder="Enter your age"
              value={age}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <label htmlFor="survey" className="label-age">
              Would You Like this Survey?
            </label>
            <input
              type="text"
              id="survey"
              name="survey"
              className="input-age"
              placeholder="Yes or No"
              value={survey}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <label htmlFor="hearaboutus" className="label-age">
              Where did you first hear about us?
            </label>
            <input
              type="text"
              id="hearaboutus"
              name="hearaboutus"
              className="input-age"
              placeholder="Enter your answer"
              value={hearaboutus}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <label htmlFor="ratings" className="label-age">
              How many ratings are you giving to us?
            </label>
            <input
              type="text"
              id="ratings"
              name="ratings"
              className="input-age"
              placeholder="*****"
              value={ratings}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <label htmlFor="comment">
              Any comments or suggestions for our survey app?
            </label>
            <textarea
              name="comment"
              id="comment"
              className="input-comment"
              placeholder="Enter your comment here"
              value={comment}
              onChange={handleChange}
            ></textarea>
          </div>

          {(!isFormValid() && (
            <div className="error-message">
              Please fill in all the fields.
            </div>
          ))}

          <div className="submitButton-container">
            <Link to="./End">
              <button
                type="submit"
                className="submitButton"
                value="submit"
                disabled={!isFormValid()}
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
