
export default function Card({card, handleChoice, flipped, disabled}) {



    const handleClick = () => {
      if(!disabled){
        handleChoice(card)

      };
    }
  return (
    <div 
      className={`card relative w-[200px] h-[200px] place-self-center ${flipped ? "flipped" : ""}`}
      >
      <img 
      className={`front absolute flex w-full h-full contrast-200 transition-all delay-100 duration-300`} src={card.src} alt="card-front" 
      />
      <p
      onClick={handleClick} 
      className={`back  cursor-pointer flex justify-center items-center text-5xl bg-black h-full w-full rounded-xl  transition-all delay-100 duration-300`}>
        ❔
      </p>
    </div>
  );
}
