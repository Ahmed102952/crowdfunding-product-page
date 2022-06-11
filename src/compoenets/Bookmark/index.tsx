import React, { useState } from "react";
import icon from "../../../images/bookmark.svg";

export const Bookmark = () => {
  const [isActive, setIsActive] = useState(false)
  function clickHandler() {
    if(isActive) {
      setIsActive(false)
      return
    }
    setIsActive(true)
  }
  return (
    <button className="ml-1" onClick={clickHandler}>
      <div className="rounded-[30px] flex items-center bg-black bg-opacity-5 shadow-md">
        <div className={`w-14 h-14 rounded-full grid place-items-center ${isActive? "bg-darkCyan": "bg-black"} overflow-hidden`}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`scale-50 ${isActive? "fill-white" : "fill-darkGray"}`} viewBox="0 0 512 512"><title>Bookmark</title><path d="M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z"/></svg>
        </div>
        <p
          className={`text-base p-3 hidden sm:block font-medium ${
            isActive ? "text-darkCyan" : "text-darkGray"
          }`}
        >
          Bookmark
        </p>
      </div>
    </button>
  );
};
