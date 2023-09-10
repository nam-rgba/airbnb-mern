import { createContext, useState } from "react";

export const SearchbarContext = createContext({});

export function SearchbarContextProvider({ children }) {
  const [show, setShow] = useState(false);
  return (
    <SearchbarContext.Provider value={{ show, setShow }}>
      {children}
    </SearchbarContext.Provider>
  );
}
