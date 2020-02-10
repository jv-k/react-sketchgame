import { useContext } from "react";
import { RoundContext } from "../providers/RoundProvider";

export const useRoundContext = () => {
  const roundContext = useContext(RoundContext);
  return {
      state: roundContext[0],
      dispatch: roundContext[1]
  }
};