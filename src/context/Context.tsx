import React, { createContext, useReducer } from "react";
import { Context, State } from "./types";
import { reducer } from "./reducer";

export const InitialState: State = {
  contacts: [],
};

export const ContactsContext = createContext<Context>({
  state: InitialState,
  dispatch: () => null,
});

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContextProvider;
