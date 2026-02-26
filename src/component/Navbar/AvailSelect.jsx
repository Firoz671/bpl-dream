import React from "react";

const AvailSelect = ({ toggle, setToggle, selectedCount }) => {
  return (
    <>
      <div className="flex w-10/12 mx-auto justify-between items-center mt-5">
        <h1 className="font-bold text-2xl">
          {toggle ? "Available Players" : "Selected Players"}
        </h1>
        <div className="join">
          <button
            onClick={() => setToggle(true)}
            className={`btn join-item ${toggle ? "bg-[#e4fb29]" : ""} `}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn join-item ${!toggle ? "bg-[#e4fb29]" : ""} `}
          >
            Selected ({selectedCount})
          </button>
        </div>
      </div>
    </>
  );
};

export default AvailSelect;
