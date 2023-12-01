// File: App.js

import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which programming language is this app built with?',
    options: ['Java', 'Python', 'JavaScript', 'C++'],
    correctAnswer: 'JavaScript',
  },
  {
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Lion'],
    correctAnswer: 'Blue Whale',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
    correctAnswer: 'Tokyo',
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score}</h2>
          <button onClick={restartGame}>Restart</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                className={`option ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
