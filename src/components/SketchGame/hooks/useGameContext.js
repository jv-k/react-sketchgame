import { useContext } from "react";
import { GameContext } from "../providers";

export const useGameContext = () => {
  return useContext(GameContext);
};