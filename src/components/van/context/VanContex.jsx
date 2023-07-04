import { createContext, useContext, useReducer } from "react";

import { ACTIONS, initialState, reducer } from "./data";


const VanTheme = createContext(null);

export function useVanContext() {
  return useContext(VanTheme);
}


export default function VanContext({ children }) {
  const [state, dispatchState] = useReducer(reducer, initialState());

  return (
    <VanTheme.Provider value={{ state, dispatchState, ACTIONS }}>
      {children}
    </VanTheme.Provider>
  );
}
