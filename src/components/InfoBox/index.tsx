import React from "react";

interface props {
  h2: string;
  p: string;
  border?: boolean;
}
export const InfoBox = ({ h2, p, border }: props) => {
  return (
    <div className="text-center sm:text-left relative">
      <h2 className="text-3xl text-black font-bold mb-4">{h2}</h2>
      <p className="text-sm mb-7 text-black text-opacity-70 font-medium">{p}</p>
      {border ? (
        <div className="w-[80px] h-px bg-black bg-opacity-5 mt-6 mb-8 mx-auto sm:w-px sm:h-[70px] sm:mt-0 sm:mb-0 sm:mx-0 sm:absolute top-0 left-full"></div>
      ) : null}
    </div>
  );
};
