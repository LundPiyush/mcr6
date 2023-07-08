import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ menu, id }) => {
  const { name, imgSrc, price, qty } = menu;
  return (
    <Link to={`/${id}`}>
      <div className="border-2 border-gray-500 rounded-lg flex flex-col items-center">
        <img
          src={imgSrc}
          className="h-[200px] w-[200px] object-contain"
          alt="res"
        />
        <p>{name}</p>
        <p>Price- {price}</p>
        <p>QTY- {qty}</p>
      </div>
    </Link>
  );
};

export default Menu;
