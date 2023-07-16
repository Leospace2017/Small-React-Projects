import { useMemory } from "../context/MemoryProvider";


export default function Header({shuffleCards, turns} : {shuffleCards: (card:Card) => void, turns:number}) {

    const {cardsImages}:any  = useMemory()

    const handleShuffle = () => {
      shuffleCards(cardsImages)
    }
  return (
    <>
      <h2 className="text-3xl text-center font-bold text-red-400 mb-2">
        Memory Game
      </h2>
      <button
        onClick={handleShuffle}
        className="border-red-500 border-2 bg-green-300 w-[4rem] rounded mx-auto block"
      >
        Start
      </button>
      <p className="mx-auto my-4">Turns: {turns}</p>
    </>
  );
}
