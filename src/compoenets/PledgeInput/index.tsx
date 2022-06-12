import React from "react";
import { PriceInput } from "../PriceInput";
import { SmallBtn } from "../SmallBtn";
interface props {
  price: number;
  setCompletedModal: React.Dispatch<React.SetStateAction<boolean>>;
  setBackModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const PledgeInput = ({
  price,
  setCompletedModal,
  setBackModal,
}: props) => {
  function clickHandler() {
    setCompletedModal(true);
    setBackModal(false);
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  }
  return (
    <div
      className={`border-t border-black border-opacity-20 w-full pt-6 px-6 sm:flex sm:items-end justify-between`}
    >
      <p className="text-sm text-black text-opacity-80 w-fit mx-auto sm:mx-0">
        Enter your pledge
      </p>

      <div
        className={`flex items-center mt-4 sm:mt-0 space-x-4 "justify-between"`}
      >
        <PriceInput min={price} />
        <button
          onClick={clickHandler}
          className="w-[8rem] h-[3rem] shadow-md text-base text-white rounded-3xl bg-moderate enabled:hover:bg-darkCyan disabled:bg-darkGray disabled:bg-opacity-30"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
