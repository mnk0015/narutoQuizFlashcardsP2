import React, { useState } from "react";

const Flashcard = ({ question, answer }) => {
  const [userGuess, setUserGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = () => {
    if (userGuess.trim().toLowerCase() === answer.toLowerCase()) {
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

  return (
    <div className={`Flashcard ${isCorrect !== null ? (isCorrect ? 'Correct' : 'Incorrect') : ''}`}>
      <div className="Question" onClick={toggleCard}>
        {question}
      </div>
      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        disabled={isCorrect !== null}
      />
      <button onClick={handleSubmit} disabled={isCorrect !== null}>
        Submit
      </button>
      {isCorrect !== null && <div className="Answer">{answer}</div>}
    </div>
  );
};

export default Flashcard;
