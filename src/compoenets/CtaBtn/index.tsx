import React from "react";

export const CtaBtn = ({text, setBackModal}: {text: string; setBackModal: React.Dispatch<React.SetStateAction<boolean>>}) => {
  function clickHandler() {
      setBackModal(true)
  }
  return (
    <button onClick={clickHandler} className="w-[13.4375rem] h-[3.5rem] shadow-md text-base font-medium rounded-[30px] bg-moderate hover:bg-darkCyan text-white">{text}</button>
  );
};
