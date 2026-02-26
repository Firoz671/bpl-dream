import React, { useState } from "react";
import { toast } from "react-toastify";

const ShowPlayer = ({ data, coin, setCoin, selected, setSelected }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = () => {
    const availableCoin = price.split(",").join("").split("$").join("");
    if (coin < availableCoin) {
      toast("Not enough coin");

      return;
    }
    if (selected.length === 6) {
      toast("Six player already selected");
    }
    setIsSelected(!isSelected);
    setCoin(coin - availableCoin);
    setSelected([...selected, data]);
  };
  const {
    name,
    country,
    role,
    playerImage,
    rating,
    battingStyle,
    bowlingStyle,
    price,
  } = data;

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm h-full">
        <figure>
          <img
            className="rounded-xl h-100 w-full object-cover"
            src={playerImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{role}</div>
            <div className="badge badge-primary">{country}</div>
          </h2>
          <div>
            <h2>Rating: {rating}</h2>
            <h2>
              <span className="font-bold">Batting Style:</span> {battingStyle}
            </h2>
            <h2>
              <span className="font-bold">Bowling Style:</span> {bowlingStyle}
            </h2>
            <div className="flex justify-between items-center">
              <h2>Price:{price}</h2>
              <button
                disabled={isSelected}
                onClick={() => {
                  handleSelected();
                }}
                className={`btn  rounded-lg ${isSelected ? "bg-red-500 text-white" : "bg-[#e4fb29]"}`}
              >
                {isSelected ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPlayer;
