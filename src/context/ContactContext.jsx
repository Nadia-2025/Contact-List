import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../reducers/store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  return useContext(StoreContext);
}
