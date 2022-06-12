import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import { Burger } from "../compoenets/Burger";
import "../style.css";
import { Menu } from "../compoenets/Menu";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Backdrop } from "../compoenets/Backdrop";

const menuItems = ["About", "Discover", "Get Started"];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function setIsMenuOpenHandler() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      return;
    }
    setIsMenuOpen(true);
  }
  useEffect(() => {
    return isMenuOpen ? disableBodyScroll(document.body) : enableBodyScroll(document.body);

  }, [isMenuOpen])
  return (
    <header className="bg-hero-mobile sm:bg-hero-desktop bg-cover h-[18.75rem] sm:h-[25rem] px-6">
      <div className="flex justify-between pt-9 sm:pt-12 max-w-[70em] mx-auto">
        <div className="w-[130px] h-[25px] z-30">
          <img src={logo} alt="LOGO" width={130} height={25} />
        </div>
        <ul className="space-x-4 hidden sm:flex">
          {menuItems.map((item, i) => {
            return (
              <li key={i}>
                <button className="header-link border-0">
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
        <button
          onClick={setIsMenuOpenHandler}
          className="sm:hidden z-30"
        >
          <Burger isOpen={isMenuOpen} />
        </button>
        <div
          className={`w-full absolute left-0 px-6 -mt-[2000px] transition-all duration-500 z-30 ${
            isMenuOpen ? "mt-[70px]" : ""
          }`}
        >
          <Menu items={menuItems} setIsMenuOpenHandler={setIsMenuOpenHandler}/>
        </div>
      {isMenuOpen? <Backdrop zIndex={"20"}/> : null}
      </div>
    </header>
  );
};
