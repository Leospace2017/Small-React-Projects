type Card = {
    src: string;
    matched: boolean;
    id?: number;
};

type StateType = {
    cards: any[];
    turns: number;
    actions: {
        firstCard: Card | null;
        secondCard: Card | null;
    };
    disabled: boolean;
};

type ActionObject = {
    SHUFFLE_CARDS: string;
    SELECT_CARD: string;
    RESET_TURN: string;
};

type ActionType = {
    type:
        | { type :ActionObject["SHUFFLE_CARDS"]; cardPayload: Card | null}
        | { type: ActionObject["SELECT_CARD"]; payload: Card }
        | ActionObject["RESET_TURN"]

    payload?: any;
    cardPayload?: any;
};





type MemoryContextValue = {
    memoryData: StateType;
    dispatch: React.Dispatch<ActionType>;
    handleChoice: (card: Card) => void;
    shuffleCards: (card: Card) => void;
    ACTIONS: ActionObject;
    cardsImages: Card[];
    isLoading: boolean;
} | null;
