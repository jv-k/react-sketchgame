import { useContext } from "react";
import { GameContext } from "../providers/GameProvider";

export const useGameContext = () => {
  const gameContext = useContext(GameContext);
  return {
      state: gameContext[0],
      dispatch: gameContext[1]
  }
};