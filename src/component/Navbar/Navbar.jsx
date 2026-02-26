import React from "react";

const Navbar = ({ coin }) => {
  return (
    <>
      <div className="mt-5 flex justify-between w-10/12 mx-auto">
        <div>
          <img src="/src/assets/logo.png" alt="" />
        </div>
        <div className="flex gap-5">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <p>
            <span>{coin}</span> Coin🪙{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
