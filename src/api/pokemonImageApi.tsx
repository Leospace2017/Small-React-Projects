import { useEffect, useState } from "react";

function randomUrl(): string {
    const randomId = Math.ceil(Math.random() * 500);
    const base = `https://pokeapi.co/api/v2/pokemon/${randomId}/`;
    return base;
}

export default function pokemonImageApi() {
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [cardsImages, setCardImages] = useState<Card[]>([]);

    let imageLength = cardsImages.length < 8;

    const pokemonFetch = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(randomUrl());
            const pokemonIndex = await res.json();
            if (res.ok) {
                setCardImages((prev) => [
                    ...prev,
                    {
                        src: pokemonIndex.sprites.front_default,
                        matched: false,
                    },
                ]);
                console.log(pokemonIndex.sprites.front_default);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {

        if(imageLength){

            pokemonFetch();
        }
        
    }, [cardsImages]);

    return {cardsImages,isloading}
}
