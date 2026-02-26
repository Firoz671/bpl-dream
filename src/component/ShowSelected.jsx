import React from "react";

const ShowSelected = ({ datas }) => {
  return (
    <>
      <div className="w-10/12 mx-auto flex justify-between items-center mt-5 p-5 shadow-2xl">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-2xl">{datas.name}</div>
          <div className="badge badge-primary">{datas.role}</div>
          <div className="badge badge-primary">{datas.country}</div>
        </div>
        <img className="w-25" src={datas.playerImage} alt="" />
      </div>
    </>
  );
};

export default ShowSelected;
