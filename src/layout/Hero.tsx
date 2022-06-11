import React from "react";
import { Box } from "../compoenets/Box";
import logo from "../../images/logo-mastercraft.svg"
import { CtaBtn } from "../compoenets/CtaBtn";
import { Bookmark } from "../compoenets/Bookmark";
interface props {
  setBackModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const Hero = ({setBackModal }: props) => {
  return (
    <section id="hero">
        <Box>
          <div className="w-[60px] h-[60px] rounded-full absolute top-0 left-1/2 -ml-[30px] -mt-[30px] mb-7">
            <img src={logo} alt="Mastercraft" width={60} height={60}/>
          </div>
          <h1 className="text-xl font-bold mb-4">Mastercraft Bamboo Monitor Riser</h1>
          <p className="text-sm mb-7 text-black text-opacity-70">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className="flex justify-between items-center">
            <CtaBtn text="Back this project" setBackModal={setBackModal}/>
            <Bookmark />
          </div>
        </Box>
    </section>
  );
};
