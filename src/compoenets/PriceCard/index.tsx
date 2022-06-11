import React from "react";
import { SmallBtn } from "../SmallBtn";

interface props {
  title: string;
  price: number;
  description: string;
  remain: number;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
  setBackModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number
}
export const PriceCard = ({
  title,
  price,
  description,
  remain,
  setBackModal,
  setChecked,
  id
}: props) => {
  return (
    <div
      className={`border border-black border-opacity-20 py-6 px-6 rounded-lg shadow-md ${
        remain == 0 ? "opacity-50" : ""
      }`}
    >
      <div className="mb-8 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-base text-black font-bold sm:text-lg">{title}</h4>
        {price > 0 ? (
          <p className="text-xs text-moderate">Pledge ${price} or more</p>
        ) : null}
      </div>
      <p className="text-xs text-black text-opacity-80 mb-8 sm:mb-7 text-left ">
        {description}
      </p>
      <div className={`sm:flex sm:items-center  ${!(price > 0)? "sm:justify-end" : "sm:justify-between"}`}>
        {!(price == 0) ? (
          <div className="flex items-center space-x-2 mb-6 sm:mb-0">
            <h3 className="text-2xl text-black font-bold">{remain}</h3>
            <span className="text-sm text-black text-opacity-80">left</span>
          </div>
        ) : null}
        <div className={`flex items-start`}>
          <SmallBtn
            text={remain == 0 ? "Out of Stock" : "Select Reward"}
            disabled={remain == 0 ? true : false}
            setBackModal={setBackModal}
            setChecked={setChecked}
            value={id}
          />
        </div>
      </div>
    </div>
  );
};
