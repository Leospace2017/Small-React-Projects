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
    CARDS_MATCHED: string;
    TOGGLE: string;
};

type ActionType = {
    type:
        | ActionObject["SHUFFLE_CARDS"] 
        | { type: ActionObject["SELECT_CARD"]; payload: Card }
        | ActionObject["RESET_TURN"]

    payload?: any;
};





type MemoryContextValue = {
    memoryData: StateType;
    dispatch: React.Dispatch<ActionType>;
    handleChoice: (card: Card) => void;
    shuffleCards: () => void;
    ACTIONS: ActionObject;
} | null;
