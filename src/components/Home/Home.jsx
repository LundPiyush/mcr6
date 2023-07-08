import React from "react";
import { cuisineData } from "../../data";
import { useRestaurant } from "../../context/restaurant-context";
import Menu from "../Menu/Menu";

const Home = () => {
  const {
    restaurant: { restaurants },
    dispatchRestaurant,
  } = useRestaurant();

  return (
    <div className="text-center">
      <p className="text-center text-2xl font-bold">Food Ordering App</p>
      {cuisineData.map(({ id, name, averageRating, reviews }) => (
        <button
          className="border-2 m-2 p-2 border-red-700 bg-pink-100 rounded-md"
          key={id}
          onClick={() => dispatchRestaurant({ type: "FILTER", payload: id })}>
          {name}
        </button>
      ))}
      <div className="text-left">
        {restaurants.map((restaurant) => {
          return (
            <div key={restaurant?._id}>
              <p className="font-bold">Dishes by {restaurant?.name}</p>
              <div className="flex items-center justify-evenly gap-6 flex-wrap">
                {restaurant?.menu.map((item, index) => (
                  <Menu menu={item} key={index} id={restaurant?.id} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
