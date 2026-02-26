import React from "react";
import ShowSelected from "./ShowSelected";

const Selected = ({ selected }) => {
  return (
    <>
      <div>
        {selected.map((datas) => (
          <ShowSelected datas={datas}></ShowSelected>
        ))}
      </div>
    </>
  );
};

export default Selected;
