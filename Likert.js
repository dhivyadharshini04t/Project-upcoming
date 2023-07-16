// LikertScale.js
import React, { useState } from 'react';
import './Likert.css';
import { Link } from 'react-router-dom';

function LikertScale() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState('');

  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const handleOptionChange = (event) => {
    setCurrentOption(event.target.value);
  };

  const handleAddOption = () => {
    if (currentOption !== '') {
      setOptions([...options, currentOption]);
      setCurrentOption('');
    }
  };

  const handleAddQuestion = () => {
    if (currentQuestion !== '' && options.length >= 2) {
      const newQuestion = {
        question: currentQuestion,
        options: options.map((option) => ({
          text: option,
          selected: false,
        })),
      };
      setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
      setCurrentQuestion('');
      setOptions([]);
      setCurrentOption('');
    }
  };

  const handleOptionToggle = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options = updatedQuestions[questionIndex].options.map(
      (option, index) => {
        if (index === optionIndex) {
          return {
            ...option,
            selected: !option.selected,
          };
        }
        return option;
      }
    );
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    // Here you can handle the form submission or do any additional processing
    console.log('Submitted Likert Scale:', questions);
  };

  return (
    <div className="container-likert-scale">
      <Link to="/Button" className="home-button">Home</Link>
      <h1>Likert Scale Questions</h1>

      <div className="contentLikert">
        <h2>Create a Question</h2>
        <input
          type="text"
          value={currentQuestion}
          onChange={handleQuestionChange}
          placeholder="Enter your question"
        />
        <br />
        <input
          type="text"
          value={currentOption}
          onChange={handleOptionChange}
          placeholder="Enter an option"
        />
        <br />
        <button onClick={handleAddOption}>Add Option</button>
        <br />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>

      <div className="content">
        <h2>Questions List</h2>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question">
            <p>{question.question}</p>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label>
                    <input
                      type="checkbox"
                      checked={option.selected}
                      onChange={() => handleOptionToggle(questionIndex, optionIndex)}
                    />
                    {option.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default LikertScale;
