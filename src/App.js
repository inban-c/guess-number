import React, { useState } from "react";
import "./App.css";

function GuessTheNumber() {
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100));
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const [showAttempts, setShowAttempts] = useState(false);

  const startGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100));
    setGuess("");
    setAttempts(0);
    setMessage("Welcome to Guess the Number!\nI'm thinking of a number between 0 and 99.");
    setShowAttempts(false);
  };

  const checkGuess = () => {
    const parsedGuess = parseInt(guess);
    setGuess("");
    setAttempts((prevAttempts) => prevAttempts + 1);

    if (parsedGuess < secretNumber) {
      setMessage("Too low! Try again.");
    } else if (parsedGuess > secretNumber) {
      setMessage("Too high! Try again.");
    } else {
      setMessage("Congratulations! You guessed the number.");
      setShowAttempts(true);
    }
  };

  return (
    <div className="guess-the-number">
      <h1>Guess the Number</h1>
      <input className="input" type="number" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Enter your guess" />
      <button className="button" onClick={checkGuess}>Guess</button>
      <button className="button" onClick={startGame}>Start Over</button>
      <div className="message">{message}</div>
      {showAttempts && <div className="attempts">Number of attempts: {attempts}</div>}
    </div>
  );
}

export default GuessTheNumber;


