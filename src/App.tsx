import React, { useState } from "react";
import { Info } from "./layout/Info";
import { Header } from "./layout/Header";
import { Hero } from "./layout/Hero";
import { About } from "./layout/About";
import { BackModal } from "./layout/BackModal";
import { Backdrop } from "./compoenets/Backdrop";
import { CompletedModal } from "./compoenets/CompletedModal";
import Attr from "./compoenets/attr";

const App = () => {
  const [backModal, setBackModal] = useState(false);
  const [checked, setChecked] = useState(0);
  const [completedModal, setCompletedModal] = useState(false);
  return (
    <>
      <Header />
      <div className="w-full max-w-[46rem] mx-auto px-6 relative -mt-14 sm:-mt-20 text-center">
        <Hero setBackModal={setBackModal} />
        <Info />
        <About setBackModal={setBackModal} setChecked={setChecked} />
      </div>
      {backModal || completedModal ? <Backdrop zIndex={30} /> : null}
      {backModal ? (
        <div className="absolute top-48 left-0 w-full px-6 z-50">
          <div className="max-w-[46em] shadow-md mx-auto">
            <BackModal
              setBackModal={setBackModal}
              setChecked={setChecked}
              checked={checked}
              setCompletedModal={setCompletedModal}
            />
          </div>
        </div>
      ) : null}
      {completedModal ? (
        <div className="absolute top-96 left-0 w-full px-6 z-50">
          <div className="max-w-[33.75em] shadow-md mx-auto">
            <CompletedModal setCompletedModal={setCompletedModal} />
          </div>
        </div>
      ) : null}
      <Attr />
    </>
  );
};

export default App;
