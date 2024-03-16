import React, { useState } from "react";

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const toggleCard = () => {
    setShowAnswer(!showAnswer);
  };

  const handleSubmit = () => {
    if (userGuess.trim().toLowerCase() === answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className={`Flashcard ${isCorrect !== null ? (isCorrect ? 'Correct' : 'Incorrect') : ''}`} onClick={toggleCard}>
      {showAnswer ? (
        <div className="Answer">{answer}</div>
      ) : (
        <div className="Question">
          {question}
          <input type="text" value={userGuess} onChange={(e) => setUserGuess(e.target.value)} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
