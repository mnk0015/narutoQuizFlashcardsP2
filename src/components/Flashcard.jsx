import React, { useState } from "react";

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleCard = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="Flashcard" onClick={toggleCard}>
      {showAnswer ? <div className="Answer">{answer}</div> : <div className="Question">{question}</div>}
    </div>
  );
};

export default Flashcard;
