import React from "react";

const BeverageCard = ({ beverage }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <div className="flex justify-center mb-5">
        <img
          src={beverage.photoUrl}
          alt={beverage.name}
          className="h-52 w-full object-cover"
        />
      </div>
      <h2 className="text-lg font-bold">{beverage.name}</h2>
      <p className="text-gray-500">{beverage.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-bold text-xl">Rs. {beverage.price}</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BeverageCard;
