import React from "react";
import { Box } from "../components/Box";
import { PriceCard } from "../components/PriceCard";
import DATA from "../../data.json";
import { IData } from "../interface";

interface props {
  setBackModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
}
export const About = ({ setBackModal, setChecked }: props) => {
  return (
    <section id="about">
      <Box>
        <h3 className="text-black text-base font-bold mb-8">
          About this project
        </h3>
        <div className="space-y-8 sm:space-y-10 mb-8 sm:mb-10">
          <p className="text-black text-opacity-80">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="text-black text-opacity-80">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <div className="space-y-6">
          {DATA.map((i: IData) => {
            return (
              <PriceCard
                title={i.title}
                price={i.price}
                description={i.description}
                remain={i.remain}
                key={i.id}
                setBackModal={setBackModal}
                id={i.id}
                setChecked={setChecked}
              />
            );
          })}
        </div>
      </Box>
    </section>
  );
};
