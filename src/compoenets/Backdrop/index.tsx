import React from "react";

interface props {
  zIndex?: string;
}
export const Backdrop = ({zIndex} :props) => {
  return (
    <div className={`w-screen h-screen fixed top-0 left-0 bg-gradient-to-b from-black to-white opacity-40 z-${zIndex}`}></div>
  );
};
