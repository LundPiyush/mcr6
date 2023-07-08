import { restaurantsData } from "../data";

export const restaurantsReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIALIZE":
      return { ...state, restaurants: payload };
    case "FILTER":
      return {
        ...state,
        restaurants: restaurantsData.filter(
          ({ cuisine_id }) => cuisine_id === payload
        ),
      };
    default:
      return state;
  }
};
