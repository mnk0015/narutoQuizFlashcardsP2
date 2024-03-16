import React, { useState } from "react";
import Flashcard from "./Flashcard";

const FlashcardGame = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [
    {
      question: "What is the name of the village hidden in the Rain?",
      answer: "Amegakure"
    },
    {
      question: "What are the names of the three legendary Sannin?",
      answer: "Jiraiya, Orochimaru, Tsunade"
    },
    {
      question: "What is the name of Naruto's mother's clan?",
      answer: "Uzumaki"
    },
    {
      question: "Who sealed the Nine-Tailed Fox inside Naruto?",
      answer: "Fourth Hokage, Minato Namikaze"
    },
    {
      question: "What is the name of Naruto's sensei for the Rasengan?",
      answer: "Jiraiya"
    },
    {
      question: "What is the name of the Akatsuki member who has a puppet body?",
      answer: "Sasori"
    },
    {
      question: "Who is the leader of the Akatsuki?",
      answer: "Pain (Nagato Uzumaki)"
    },
    {
      question: "What is the name of the Nine-Tailed Fox?",
      answer: "Kurama"
    },
    {
      question: "Who was the first ninja to successfully become a Jinchuriki?",
      answer: "Hagoromo Ōtsutsuki (Sage of Six Paths)"
    },
    {
      question: "What is the name of the technique used to bring someone back to life?",
      answer: "Edo Tensei (Summoning: Impure World Reincarnation)"
    }
  ];

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="FlashcardGame">
      <h2>Naruto Quiz!</h2>
      <div className="CardContainer">
        <Flashcard {...cards[currentCardIndex]} />
      </div>
      <button onClick={handleNextCard}>Next</button>
    </div>
  );
};

export default FlashcardGame;
