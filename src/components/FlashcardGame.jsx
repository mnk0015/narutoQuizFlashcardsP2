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

  return (
    <div className={`Flashcard ${isCorrect !== null ? (isCorrect ? 'Correct' : 'Incorrect') : ''}`}>
      <div className="Question">{question}</div>
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
