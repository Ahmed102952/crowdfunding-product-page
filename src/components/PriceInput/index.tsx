import React from "react";
import "./style.css";

interface props {
  min: number;
}
export const PriceInput = ({ min }: props) => {
  return (
    <div className="border border-black border-opacity-20 flex justify-center px-5 items-center w-24 rounded-3xl text-black text-opacity-60 text-sm font-bold h-[3rem]">
      $
      <input
        type="number"
        min={min}
        defaultValue={min}
        pattern="\d*"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        className="border-0 outline-none w-2/3 appearance-none ml-2 p-0"
      />
    </div>
  );
};
