import React from "react";

interface props {
  name: string;
  checked?: boolean;
  id: number;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
  disabled: boolean;
}
export const RadioBtn = ({
  name,
  checked,
  id,
  setChecked,
  disabled,
}: props) => {
  const setChoiseHandler = React.useCallback(() => {
    setChecked(id);
  }, []);
  return (
    <div className="w-[25px] h-[25px] overflow-hidden">
      <input
        className="invisible absolute w-0 h-0 "
        type="radio"
        name={name}
        id={`a${id}`}
        value={id}
        onChange={setChoiseHandler}
        disabled={disabled}
      />

      <label
        htmlFor={`a${id}`}
        className={`block w-full h-full rounded-full p-1 border-2 border-black border-opacity-10 ${
          disabled ? "" : "cursor-pointer"
        }`}
      >
        <div
          className={`w-full h-full rounded-full ${
            checked ? "bg-moderate" : "bg-white"
          }`}
        ></div>
      </label>
    </div>
  );
};
