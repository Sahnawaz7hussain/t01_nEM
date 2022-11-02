import React from "react";
import "./Button.css";

const Buttons = ({ children, colorScheme, variant, onClick }) => {
  return (
    <button
      data-testid="customButton"
      onClick={onClick}
      className={`btn ${colorScheme || "red"} ${variant || "ghost"} `}
    >
      {children}
    </button>
  );
};

export default Buttons;
