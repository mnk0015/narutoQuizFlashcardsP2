import React, { useState } from "react";

const Flashcard = ({ question, answer }) => {
  const [userGuess, setUserGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = () => {
    const trimmedGuess = userGuess.trim().toLowerCase();
    const trimmedAnswer = answer.toLowerCase();

    if (trimmedGuess === trimmedAnswer || trimmedAnswer.includes(trimmedGuess)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const toggleCard = () => {
    // Only toggle the card if the user hasn't submitted an answer yet
    if (isCorrect === null) {
      setIsCorrect(!isCorrect);
    }
  };

  const resetCard = () => {
    setUserGuess("");
    setIsCorrect(null);
  };

  return (
    <div className={`Flashcard ${isCorrect !== null ? (isCorrect ? 'Correct' : 'Incorrect') : ''}`}>
      <div className="Question" onClick={toggleCard}>
        {question}
      </div>
      {isCorrect === null && (
        <div>
          <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {isCorrect !== null && (
        <div className="Answer" onClick={resetCard}>
          {isCorrect ? answer : "Incorrect, click to try again"}
        </div>
      )}
    </div>
  );
};

export default Flashcard;
