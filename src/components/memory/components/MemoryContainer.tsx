import React, { useEffect } from "react";
import Card from "./Card";
import Header from "./Header";
import { useMemory } from "../context/MemoryProvider";



export default function MemoryContainer() {
  
  const { memoryData, dispatch, handleChoice, shuffleCards, ACTIONS} = useMemory();
  useEffect(() => {
    const { firstCard, secondCard } = memoryData.actions;
    console.log(memoryData.actions.firstCard)
    if (firstCard && secondCard) {
      if (firstCard.src === secondCard.src) {
        dispatch({ type: ACTIONS.RESET_TURN });
      } else {
        const timeoutID = setTimeout(() => {
          dispatch({ type: ACTIONS.RESET_TURN });
        }, 1000);
        return () => clearTimeout(timeoutID);
      }
    }
  }, [memoryData.actions.firstCard, memoryData.actions.secondCard]);


  return (
    <div className="flex flex-col mt-10 gap-1">
        <Header shuffleCards={shuffleCards} turns={memoryData.turns}/>
      <div className="card-container grid lg:grid-cols-6 grid-cols-4 w-screen gap-[2rem] place-content-center relative">
        {memoryData.cards.map((card:Card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={
              (memoryData.actions.secondCard && memoryData.actions.secondCard.id === card.id) ||
              (memoryData.actions.firstCard && memoryData.actions.firstCard.id === card.id) ||
              card.matched
            }
            disabled={memoryData.disabled}
          />
        ))}
      </div>
    </div>
  );
}


    //FIRST LOGIC
    //   const [cards, setCards] = useState([]);
    //   const [turns, setTurns] = useState(0);
    //   const [firstCard, setFirstCard] = useState(null);
    //   const [secondCard, setSecondCard] = useState(null);
    //   const [disabled, setDisabled] = useState(false);
    
    //   const shuffleCards = () => {
    //     const shuffledCards = [...cardsImages, ...cardsImages]
    //       .map((card) => ({ ...card, id: Math.random().toString(36).slice(2, 9) }))
    //       .sort(() => Math.random() - 0.5);
    //     setFirstCard(null);
    //     setSecondCard(null);
    //     setCards(shuffledCards);
    //     setTurns(0);
    //   };
    
    //   const handleChoice = (card) => {
    //     firstCard ? setSecondCard({ ...card }) : setFirstCard({ ...card });
    //     console.log(card);
    //     console.log(firstCard);
    //   };
    
    //   //compare 2cards
    //   useEffect(() => {
    //     if (firstCard && secondCard) {
    //       setDisabled(true);
    //       if (firstCard.src === secondCard.src) {
    //         setCards((prev) =>
    //           prev.map((card) => {
    //             if (card.src === firstCard.src) {
    //               return { ...card, matched: true };
    //             } else {
    //               return card;
    //             }
    //           })
    //         );
    //         resetTurn();
    //         console.log("cards match");
    //       } else {
    //         setTimeout(() => {
    //           resetTurn();
    //           console.log("xxxxx");
    //         }, 1000);
    
    //         return clearTimeout();
    //       }
    //     }
    //   }, [firstCard, secondCard]);
    
    //   const resetTurn = () => {
    //     setFirstCard(null);
    //     setSecondCard(null);
    //     setTurns((prev) => prev + 1);
    //     setDisabled(false);
    //   };
