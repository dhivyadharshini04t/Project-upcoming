import React from 'react';
import './Feedback.css';

const FeedbackForm = () => {
  return (
    <div className="Stef">
      <div className="feedbackFormContainer">
        <h1 className="formTitle">SURVEY FEEDBACK FORM</h1>
        <form id="form">
          
          <div className="formField">
            <label htmlFor="name" className="label-name">
              Name
            </label>
            <input type="text" id="name" className="input-name" placeholder="Enter your name" />
          </div>

          <div className="formField">
            <label htmlFor="email" className="label-email">
              Email
            </label>
            <input type="email" id="email" className="input-email" placeholder="Enter your email" />
          </div>

          <div className="formField">
            <label htmlFor="age" className="label-age">
              Age
            </label>
            <input type="text" id="age" className="input-age" placeholder="Enter your age" />
          </div>

          <div className="formField">
            <label htmlFor="role" className="label-role">
              Which option best describes you?
            </label>
            <select name="role" id="role" className="select-role">
              <option value="student">Student</option>
              <option value="intern">Intern</option>
              <option value="professional">Professional</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="formField">
            <label>
              Would you recommend Us to a friend?
            </label>
            <label htmlFor="recommend-1" className="recommend-label">
              <input
                type="radio"
                id="recommend-1"
                name="recommend"
                className="recommend-input"
              />
              Yes
            </label>
            <label htmlFor="recommend-2" className="recommend-label">
              <input
                type="radio"
                id="recommend-2"
                name="recommend"
                className="recommend-input"
              />
              No
            </label>
            <label htmlFor="recommend-3" className="recommend-label">
              <input
                type="radio"
                id="recommend-3"
                name="recommend"
                className="recommend-input"
              />
              Maybe
            </label>
          </div>
          <div className="formField">
            <label>
              How many rating you are giving to us?
              <small>(Check all that apply)</small>
            </label>
            <label htmlFor="inp-1" className="rating-label">
              <input type="checkbox" name="inp" className="rating-input" />
              *
            </label>
            <label htmlFor="inp-2" className="rating-label">
              <input type="checkbox" name="inp" className="rating-input" />
              **
            </label>
            <label htmlFor="inp-3" className="rating-label">
              <input type="checkbox" name="inp" className="rating-input" />
              ***
            </label>
            <label htmlFor="inp-4" className="rating-label">
              <input type="checkbox" name="inp" className="rating-input" />
              ****
            </label>
            <label htmlFor="inp-5" className="rating-label">
              <input type="checkbox" name="inp" className="rating-input" />
              *****
            </label>
          </div>

          <div className="formField">
            <label htmlFor="comment">
              Any comments or suggestions
            </label>
            <textarea
              name="comment"
              id="comment"
              className="input-comment"
              placeholder="Enter your comment here"
            ></textarea>
          </div>

          <button type="submit" className="submitButton" value="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
