import React, { use } from "react";
import ShowPlayer from "./ShowPlayer";

const Player = ({ dataPromise, coin, setCoin, selected, setSelected }) => {
  const theData = use(dataPromise);
  return (
    <>
      <div className="grid grid-cols-3 mt-5 w-10/12 mx-auto">
        {theData.map((data) => (
          <ShowPlayer
            selected={selected}
            setSelected={setSelected}
            coin={coin}
            setCoin={setCoin}
            data={data}
            key={data.name}
          ></ShowPlayer>
        ))}
      </div>
    </>
  );
};

export default Player;
