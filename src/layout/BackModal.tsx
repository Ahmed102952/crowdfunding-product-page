import React from "react";
import { Box } from "../compoenets/Box";
import close from "../../images/icon-close-modal.svg";
import { PriceCardModal } from "../compoenets/PriceCardModal";
import DATA from "../../data.json";
import { IData } from "../interface";

interface BackModalProps {
  setBackModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
  checked: number;
  setCompletedModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const BackModal = ({
  setBackModal,
  setChecked,
  checked,
  setCompletedModal,
}: BackModalProps) => {
  function closeHandler() {
    setBackModal(false);
  }
  return (
    <Box>
      <div className="relative w-full z-[40]">
        <button
          className="absolute -top-4 right-0 w-4 h-4"
          onClick={closeHandler}
        >
          <img src={close} alt="Close" width={16} height={16} />
        </button>
        <h2 className="text-base sm:text-lg text-black font-bold mb-3">
          Back this project
        </h2>
        <p className="text-sm text-black text-opacity-80 mb-8">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="space-y-5">
          {DATA.map((i: IData) => {
            return (
              <PriceCardModal
                setCompletedModal={setCompletedModal}
                setBackModal={setBackModal}
                title={i.title}
                description={i.description}
                remain={i.remain}
                id={i.id}
                index={checked}
                price={i.price}
                setChecked={setChecked}
                key={i.id}
              />
            );
          })}
        </div>
      </div>
    </Box>
  );
};
