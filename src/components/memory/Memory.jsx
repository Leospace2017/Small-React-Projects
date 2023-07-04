import React, { useState, useEffect } from "react";
import { cardsImages } from "./data.js";
import Card from "./components/Card.jsx";
import "./Memory.scss";

export default function Memory() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardsImages, ...cardsImages]
      .map((card) => ({ ...card, id: Math.random().toString(36).slice(2, 9) }))
      .sort(() => Math.random() - 0.5);
    setFirstCard(null);
    setSecondCard(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    firstCard ? setSecondCard({ ...card }) : setFirstCard({ ...card });
    console.log(card);
    console.log(firstCard);
  };

  //compare 2cards
  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.src === secondCard.src) {
        setCards((prev) =>
          prev.map((card) => {
            if (card.src === firstCard.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          })
        );
        resetTurn();
        console.log("cards match");
      } else {
        setTimeout(() => {
          resetTurn();
          console.log("xxxxx");
        }, 1000);

        return clearTimeout();
      }
    }
  }, [firstCard, secondCard]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl text-center font-bold text-red-400 mb-2">
        Memory Game
      </h2>
      <button
        onClick={shuffleCards}
        className="border-red-500 border-2 bg-green-300 w-[4rem] rounded mx-auto block"
      >
        Start
      </button>
      <p className="mx-auto my-4">Turns: {turns}</p>
      <div className="card-container grid lg:grid-cols-6 grid-cols-3 w-screen gap-[2rem] place-content-center relative">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={
              (secondCard && secondCard.id === card.id) ||
              (firstCard && firstCard.id === card.id) ||
              card.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}
