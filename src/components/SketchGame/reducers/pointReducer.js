export const pointReducer = (pointsState, action) => {
  switch (action.type) {
    case "RESET_POINTS":
      return 0;
    case "ADD_POINTS":
      return pointsState + 1;
    case "REMOVE_POINTS":
      return pointsState - 1;
    default:
      return pointsState;
  }
};