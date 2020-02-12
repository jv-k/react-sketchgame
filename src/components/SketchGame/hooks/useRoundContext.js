import { useContext } from "react";
import { RoundContext } from "../providers";

export const useRoundContext = () => {
  return useContext(RoundContext);
};