type Card = {
    src: string,
    matched: boolean,
    id:number
}

type StateType = {
    cards: (Card)[],
    turns: number,
    actions:  {
      firstCard: Card | null,
      secondCard: Card | null,
    },
    disabled: boolean,
}

type ActionObject = {
    SHUFFLE_CARDS: string,
    SELECT_CARD: string,
    RESET_TURN: string,
    CARDS_MATCHED: string,
    TOGGLE: string,
}


type ActionType = 
    {type: ActionObject["SHUFFLE_CARDS"] | ActionObject["SELECT_CARD"] | ActionObject["RESET_TURN"] | ActionObject["CARDS_MATCHED"] | ActionObject["TOGGLE"], payload: Card}


type MemoryContextValue = {
    memoryData: StateType,
    dispatch : React.Dispatch<ActionType>,
    handleChoice: () => void,
    shuffleCards: () => void,
    ACTIONS: ActionObject
} | null