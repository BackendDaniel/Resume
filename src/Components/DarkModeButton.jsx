import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeButton = ({ toggleDarkMode, isDarkMode }) => {
  const tooltipText = isDarkMode ? "Light Mode" : "Dark Mode";
  const iconStyle = {
    color: isDarkMode ? "#ffffff" : "#000000", // Adjust the colors to your preference
  };
  return (
    <div
      className={`dark-mode-button p-1 pr-2 pl-2 cursor-pointer ${
        isDarkMode ? "bg-black" : "bg-white"
      } rounded-full hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
        isDarkMode ? "hover:bg-brightGreen" : "hover:bg-black"
      } hover:text-white transition-all  cursor-pointer text-${
        isDarkMode ? "white" : "black"
      }`}
      onClick={toggleDarkMode}
      style={iconStyle}
      title={tooltipText}
    >
      {isDarkMode ? (
        <FaSun className="hover:fill-black" />
      ) : (
        <FaMoon className="hover:fill-white" />
      )}
    </div>
  );
};

export default DarkModeButton;
