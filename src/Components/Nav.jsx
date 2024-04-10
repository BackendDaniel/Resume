// Navbar.jsx

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import DarkModeButton from "./DarkModeButton";

const Nav = ({ toggleDarkMode, isDarkMode }) => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  const darkModeClass = isDarkMode ? "dark-mode" : "";
  const darkModeBackgroundClass = isDarkMode ? "bg-black" : "bg-gray-200"; // Explicitly set white background for light mode
  const darkModeTextClass = isDarkMode ? "" : "text-black";
  return (
    <div>
      <div
        className={`flex flex-row justify-between items-center p-4 px-3 md:px-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex-no-wrap fixed top-0 w-full pb-2 pt-2 ${darkModeClass} ${darkModeBackgroundClass}`}
      >
        <div className="flex flex-row items-center justify-between ">
          <ScrollLink
            to="home"
            className="font-semibold text-2xl p-1 cursor-pointer flex items-center ml-4"
          >
            <span className="self-center whitespace-nowrap text-xl text-gray-600  font-semibold">
              Daniel's Portfolio
            </span>
          </ScrollLink>
        </div>
        <div className="flex items-center ml-auto pr-2">
          <div className="flex items-center ml-auto">
            <DarkModeButton
              toggleDarkMode={toggleDarkMode}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
        <nav
          className={`hidden md:flex gap-3 p-1 text-lg font-semibold cursor-pointer -z-50 ${darkModeTextClass}`}
        >
          <ScrollLink
            to="banner"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-yellow-500 transition-all cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-yellow-500 transition-all cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="technologies"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-yellow-500 transition-all cursor-pointer"
          >
            Technologies
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-yellow-500 transition-all cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:text-yellow-500 transition-all cursor-pointer"
          >
            Contact
          </ScrollLink>
        </nav>
        <div
          className="md:hidden sm:hidden flex p-4 pr-1 mt-0 cursor-pointer"
          onClick={handleChange}
        >
          <div className="p-2 mr-2 cursor-pointer">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      {menu && (
        <div className="fixed w-full h-full z-50 cursor-pointer top-0 left-0">
          <div
            className={`flex flex-col items-center justify-center mt-[-10px] p-4 z-50`}
          >
            <div
              className={`flex flex-col gap-4 text-center w-[150%] z-50 cursor-pointer ${
                isDarkMode ? "bg-black" : "bg-gray-200"
              } hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
                isDarkMode ? "hover:bg-brightGreen" : "hover:bg-black"
              } hover:text-white transition-all  cursor-pointer text-${
                isDarkMode ? "white" : "black"
              }`}
            >
              <ScrollLink
                to="banner"
                className=" text-2xl hover:text-yellow-400 animate-pulse"
                onClick={handleChange}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                duration={300}
                className=" text-2xl hover:text-yellow-400 animate-pulse"
                onClick={handleChange}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="technologies"
                spy={true}
                smooth={true}
                duration={300}
                className=" text-2xl hover:text-yellow-400 animate-pulse"
                onClick={handleChange}
              >
                Technologies
              </ScrollLink>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={300}
                className=" text-2xl hover:text-yellow-400 animate-pulse"
                onClick={handleChange}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={300}
                className=" text-2xl hover:text-yellow-400 animate-pulse"
                onClick={handleChange}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
