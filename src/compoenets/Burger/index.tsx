import React from "react";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import "./style.css"

export const Burger = ({isOpen}: {isOpen: boolean}) => {
  return (
    <div className={`burger burger-squeeze ${isOpen? "open" : ""}`}>
      <div className="burger-lines"></div>
    </div>
  );
};
