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
    case "ADD_REVIEW":
      const updatedRes = state?.restaurants?.map((item) =>
        Number(item.id) === Number(payload.resId)
          ? { ...item, ratings: [...item.ratings, payload.reviewInput] }
          : item
      );
      console.log(updatedRes);
      return {
        ...state,
        restaurants: updatedRes,
      };

    default:
      return state;
  }
};
