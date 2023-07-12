import React from "react";

export default function Header({shuffleCards, turns} : {shuffleCards: () => void, turns:number}) {
  return (
    <>
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
    </>
  );
}
