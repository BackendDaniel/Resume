// Button.jsx

import React from "react";

const Button = ({ type, title, isDarkMode }) => {
  return (
    <button
      type={type}
      className={`py-3 px-4 rounded-full ${
        isDarkMode
          ? "bg-white text-black hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-black hover:text-white transition-all"
          : "bg-black text-white hover:shadow-[rgba(255,255,255,0.24)_0px_3px_8px] hover:bg-white hover:text-black transition-all"
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
