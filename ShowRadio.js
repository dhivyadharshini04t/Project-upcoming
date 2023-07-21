import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShowRadio.css';

class ShowDetails extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      selectedOption: null
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/showRadioDetails')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleOptionChange = (event, questionId) => {
    const selectedOption = event.target.value;
    this.setState({
      selectedOption
    }, () => {
      console.log("Selected option:", selectedOption);
    });
  };

  handleSubmit = () => {
    const selectedOptionsData = this.state.data.map(question => ({
      id: question.id,
      selectedOption: question.selectedOption
    }));

    axios.post('http://127.0.0.1:8080/addUserDetails', selectedOptionsData)
      .then(response => {
        console.log('Selected options submitted successfully!');
      })
      .catch(error => {
        console.error('Error submitting selected options:', error);
      });
  };

  handleSelectedOption = (selectedOption) => {
    this.setState({
      selectedOption
    }, () => {
      console.log("Selected option:", selectedOption);
    });
  };

  render() {
    return (
      <div className="show-details-container">
        <h1>
          <center>ShowDetails</center>
        </h1>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          {this.state.data.map(user => (
            <div key={user.id} className="question-container">
              <h3>Question {user.id}</h3>
              <p>{user.question}</p>
              <label>
                <input
                  type="radio"
                  name={`option${user.id}`}
                  value={user.option1}
                  checked={this.state.selectedOption === user.option1}
                  onChange={(event) => this.handleOptionChange(event, user.id)}
                />
                {user.option1}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`option${user.id}`}
                  value={user.option2}
                  checked={this.state.selectedOption === user.option2}
                  onChange={(event) => this.handleOptionChange(event, user.id)}
                />
                {user.option2}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`option${user.id}`}
                  value={user.option3}
                  checked={this.state.selectedOption === user.option3}
                  onChange={(event) => this.handleOptionChange(event, user.id)}
                />
                {user.option3}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`option${user.id}`}
                  value={user.option4}
                  checked={this.state.selectedOption === user.option4}
                  onChange={(event) => this.handleOptionChange(event, user.id)}
                />
                {user.option4}
              </label>
              <br />
            </div>
          ))}

          <button type="submit" className="submit-btn">
            Submit Selected Options
          </button>
        </form>

        <Link to="./End">
          <button className="end-btn">
            Go to End
          </button>
        </Link>
      </div>
    );
  }
}

export default ShowDetails;
