import React from "react";
import { Box } from "../Box";
import check from "../../../images/icon-check.svg";

interface props {
  setCompletedModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CompletedModal = ({setCompletedModal} : props) => {
  function clickHandler() {
    setCompletedModal(false)
    
  }
  return (
    <Box>
      <div className="text-center">
        <div className="mx-auto w-fit">
          <img src={check} alt="Check" />
        </div>
        <h3 className="text-lg mb-3">Thanks for your support!</h3>
        <p className="text-base text-black text-opacity-70 mb-8">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button onClick={clickHandler} className="w-[7rem] h-[3rem] shadow-md text-base font-medium rounded-[30px] bg-moderate hover:bg-darkCyan text-white mx-auto">Got it!</button>
      </div>
    </Box>
  );
};
