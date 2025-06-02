import React from "react";

export default function StanderdLayout() {
  return (
    <div className="w-[300px] h-[300px] overflow-hidden bg-white-400 border border-gray-300 shadow-md rounded-md flex flex-col">
      <div className="bg-gray-300 w-[100px] h-full flex flex-col ">
        <div className="bg-gray-400 w-full h-[20px] text-center text-sm  border-b">
          logo
        </div>
        <div className="p-1 flex flex-col gap-1">
          <div className="flex bg-sky-100">Home</div>
          <div className="flex bg-sky-200">product</div>
          <div className="flex bg-sky-300">cart</div>
        </div>
      </div>
    </div>
  );
}
