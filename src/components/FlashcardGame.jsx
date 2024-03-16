import React from "react";
import FlashcardGame from "./components/FlashcardGame";
import "./App.css";

const App = () => {
  const cards = [/* Add your card data here */];

  return (
    <div className="App">
      <h1 className="Title">Flashcard Game</h1>
      <FlashcardGame cards={cards} />
    </div>
  );
};

export default App;