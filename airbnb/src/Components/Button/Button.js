import { React } from "react";
import "./Button.css";
const Button = ({ children, icon }) => {
  return (
    <button className="pageBtn ">
      {icon ? icon : ""} {children}
    </button>
  );
};

export default Button;
