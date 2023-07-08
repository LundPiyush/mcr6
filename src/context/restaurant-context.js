import { createContext, useContext, useReducer } from "react";
import { restaurantsData } from "../data";
import { restaurantsReducer } from "../reducers/restaurant-reducer";

const RestaurantContext = createContext(null);
export const RestaurantProvider = ({ children }) => {
  const [restaurant, dispatchRestaurant] = useReducer(restaurantsReducer, {
    restaurants: restaurantsData,
  });

  return (
    <RestaurantContext.Provider value={{ restaurant, dispatchRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);
