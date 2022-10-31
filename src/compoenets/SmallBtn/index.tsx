import React from "react";

interface props {
  text: string;
  disabled?: boolean;
  setBackModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}
export const SmallBtn = ({
  text,
  disabled,
  setBackModal,
  setChecked,
  value,
}: props) => {
  function clickHandler() {
    setChecked(value);
    setBackModal(true);
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }
  return (
    <button
      className={`w-[10rem] h-[3.125rem] shadow-md text-base text-white rounded-3xl bg-moderate enabled:hover:bg-darkCyan disabled:bg-darkGray disabled:bg-opacity-30`}
      ref={(el) => {
        if (disabled) {
          el ? (el.disabled = true) : null;
        }
      }}
      value={value}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};
