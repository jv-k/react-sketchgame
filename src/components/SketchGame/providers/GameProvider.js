import React from "react";

export const GameContext = React.createContext();
GameContext.displayName = 'GameContext';
export const GameProvider = GameContext.Provider;