import { useReducer, useEffect, createContext, useContext } from "react";


const cardsImages = [
  { src: "images/icons8-css3-64.png", matched: false },
  { src: "images/icons8-html-5-64.png", matched: false },
  {
    src: "images/icons8-javascript-64.png",
    matched: false,
  },
  { src: "images/icons8-mongodb-64.png", matched: false },
  { src: "images/icons8-nodejs-64.png", matched: false },
  {
    src: "images/icons8-react-native-64.png",
    matched: false,
  },
  { src: "images/icons8-sass-64.png", matched: false },
  {
    src: "images/icons8-tailwind-css-64.png",
    matched: false,
  },
];




const MemoryContext = createContext(null);

export function useMemory() {
  return useContext(MemoryContext);
}

const ACTIONS = {
  SHUFFLE_CARDS: "SHUFFLE_CARDS",
  SELECT_CARD: "SELECT_CARD",
  RESET_TURN: "RESET_TURN",
  CARDS_MATCHED: "CARDS_MATCHED",
  TOGGLE: "TOGGLE",
};

function memoryInitial() {
  return {
    cards: [],
    turns: 0,
    actions: {
      firstCard: null,
      secondCard: null,
    },
    disabled: false,
  };
}
// function compareCards(firstCard, secondCard) {
//   if (firstCard && secondCard) {
//     dispatch({type: ACTIONS.TOGGLE})
//     if (firstCard.src === secondCard.src) {
//       console.log("cards match");
//       dispatch({type: ACTIONS.RESET_TURN})
//       return { matched: true };
//     } else {
//       console.log("xxxxx");
//       dispatch({type: ACTIONS.RESET_TURN})
//       return { matched: false };
//     }
//   }
// }

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SHUFFLE_CARDS:
      const shuffledCards = [...cardsImages, ...cardsImages]
        .map((card) => ({
          ...card,
          id: Math.random().toString(36).slice(2, 9),
        }))
        .sort(() => Math.random() - 0.5);
      return {
        ...state,
        cards: shuffledCards,
        turns: 0,
        actions: { ...state.actions, firstCard: null, secondCard: null },
        disabled:false
      };

    case ACTIONS.SELECT_CARD:
    const { firstCard } = state.actions;
    console.log(action.payload.src)

    if (firstCard) {
      const cardsMatched = firstCard.src === action.payload.src;
      return {
        ...state,
        actions: {...state.actions,secondCard: action.payload,},
        disabled: true,
        cards: state.cards.map((c) => (c.src === action.payload.src ? { ...c, matched: cardsMatched } : c)),
      };
    } else {
      return { ...state, actions:{...state.actions,firstCard: action.payload}};
    }


    case ACTIONS.RESET_TURN:
      return {
        ...state,
        turns: state.turns + 1,
        actions: { ...state.actions, firstCard: null, secondCard: null },
        disabled: false,
      };

    case ACTIONS.TOGGLE:
      return { ...state, disabled: !state.disabled };

    default:
      return { ...state };
  }
}

export default function MemoryProvider({ children }) {
  const [memoryData, dispatch] = useReducer(reducer, memoryInitial());

  const handleChoice = (card) => {
console.log(card)
    return dispatch({ type: ACTIONS.SELECT_CARD, payload: card });
  };

  const shuffleCards = () => {
    return dispatch({ type: ACTIONS.SHUFFLE_CARDS });
  };

  const toggleDisable = () => {
    return dispatch({ type: ACTIONS.TOGGLE });
  };

  return (
    <MemoryContext.Provider
      value={{
        memoryData,
        dispatch,
        handleChoice,
        shuffleCards,
        toggleDisable,
        ACTIONS
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
