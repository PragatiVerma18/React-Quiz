import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import Question from "./Components/Question";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src="https://media.giphy.com/media/YqukXc3tzSUoL4bgQg/giphy.gif"
            className="App-logo"
            alt="logo"
          />
        </div>
        <h1>React Quiz</h1>
        <Question content="What is your favourite food?" />
      </div>
    );
  }
}

export default App;
