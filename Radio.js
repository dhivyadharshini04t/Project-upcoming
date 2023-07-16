import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Radio.css';

function AdminInterface() {
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
        options: options,
        selectedOption: ''
      };
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion('');
      setOptions([]);
      setCurrentOption('');
    }
  };

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedOption = options[optionIndex];
    setQuestions(updatedQuestions);
  };

  const handleSurveySubmit = () => {
    // In a real application, you should send the survey data to the server for processing
    console.log('Survey submitted:', questions);
    // Clear the questions and options after submission (optional)
    setQuestions([]);
  };

  return (
    <div className="container-admin-interface">
      <div className='home'><Link to="/Button">Home</Link></div>
      <h1>RADIO SURVEY</h1>

      <div className="content">
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
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <input
                type="radio"
                name={`option-${index}`}
                value={option}
                onChange={() => handleOptionSelect(questions.length, index)}
              />
              {option}
            </li>
          ))}
        </ul>
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>

      <div className="content">
        <h2>Questions List</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              {question.question}
              <ul>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={option === question.selectedOption}
                      onChange={() => handleOptionSelect(index, optionIndex)}
                    />
                    {option}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleSurveySubmit}>Submit</button>

    </div>
  );
}

export default AdminInterface;
