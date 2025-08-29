import React from "react";
import {FaRocket} from "react-icons/fa";

const Button = ({variant = "", text, icon: Icon, onClick, className = ""}) => {
  let style = variant || "bg-red-400 hover:bg-red-500 text-white"; // Default to 'red' variant if none provided
  return (
    <button
      onClick={onClick}
      className={` ${style} flex items-center gap-2 px-6 py-2   rounded-full shadow-md transition-all ${className}`}
    >
      {text} {(Icon && <Icon size={16} />) || <FaRocket size={16} />}
    </button>
  );
};

export default Button;
