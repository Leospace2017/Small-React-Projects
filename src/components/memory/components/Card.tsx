export default function Card({
    card,
    handleChoice,
    flipped,
    disabled,
}: {
    card: Card;
    handleChoice: any;
    flipped: boolean;
    disabled: boolean;
}) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };
    return (
        <div
            className={`card relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] place-self-center ${
                flipped ? "flipped" : ""
            }`}
        >
            <img
                className={`front absolute flex w-full h-full contrast-200 transition-all delay-100 duration-300`}
                src={card.src}
                alt="card-front"
            />
            <p
                onClick={handleClick}
                className={`back  cursor-pointer flex justify-center items-center text-5xl bg-black h-full w-full rounded-xl  transition-all delay-100 duration-300`}
            >
                ❔
            </p>
        </div>
    );
}
