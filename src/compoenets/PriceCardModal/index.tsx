import React from "react";
import { PledgeInput } from "../PledgeInput";
import { RadioBtn } from "../RadioBtn";

interface props {
  title: string;
  description: string;
  price: number;
  remain?: number;
  id: number;
  index: number;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
  setCompletedModal: React.Dispatch<React.SetStateAction<boolean>>;
  setBackModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const PriceCardModal = ({
  title,
  description,
  id,
  index,
  price,
  remain,
  setChecked,
  setCompletedModal,
  setBackModal
}: props) => {
  return (
    <div className="">
      <div className={remain == 0 ? `opacity-50` : ``}>
        <div
          className={` py-7 rounded-lg shadow-md ${
            index == id
              ? "outline outline-2 outline-moderate border-white border"
              : "border border-black border-opacity-20"
          }`}
        >
          <div className="grid grid-cols-2col gap-x-3 gap-y-5 items-center px-6 sm:grid-cols-3col mb-8">
            <RadioBtn
              name="price"
              id={id}
              setChecked={setChecked}
              checked={index == id}
              disabled={remain == 0}
            />
            <div className="sm:flex">
              <h3 className="text-base font-bold text-black sm:mr-5">
                {title}
              </h3>
              {(price as number) > 0 ? (
                <p className="text-sm text-moderate">Pledge ${price} or more</p>
              ) : null}
            </div>
            <p className="text-sm text-black text-opacity-80 col-start-1 col-span-2 sm:col-start-2">
              {description}
            </p>
            {price ? (
              <div className="flex items-center sm:row-start-1 sm:col-start-3 sm:justify-self-end">
                <h3 className="text-2xl font-bold mr-4">{remain}</h3>
                <span className="text-base text-black text-opacity-80">
                  left
                </span>
              </div>
            ) : null}
          </div>
          {index == id ? <PledgeInput setBackModal={setBackModal} price={price} setCompletedModal={setCompletedModal} /> : null}
        </div>
      </div>
    </div>
  );
};
