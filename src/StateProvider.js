import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const StateContext = createContext();

export const StateProvider = ({ reducer, inititalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, inititalState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
