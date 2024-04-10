import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  AiFillSkype,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import classnames from "classnames";
import mountains from "../assets/mountains.png";

const Footer = ({ isDarkMode }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const textElement = document.querySelector(".typing-text");
    if (textElement) {
      textElement.classList.add("start-typing");
    }

    setText("Code With Divinity");
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`footer ${isDarkMode ? "bg-blue-900" : "bg-black"} p-8`}
      style={{
        backgroundImage: `url(${mountains})`, // Set the background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="about mb-8 md:mb-0">
          <div className="logo mb-4">
            <h3 className="-z-50 font-semibold text-sky-500 pr-4 typing-text">
              {/* Use Typewriter component for animated typing text */}
              <Typewriter
                options={{
                  strings: [text],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>
          <div className="detail">
            <Link
              to="home"
              className="font-normal text-lg italic cursor-pointer hover:text-orange-500 text-white"
            >
              ddivinity@gmail.com
            </Link>
            <h3 className="text-white text-lg mt-3 font-semibold ">
              Office Address
            </h3>
            <p className="text-white mt-2 font-normal text-sm italic">
              10A Jehovah Jireh Plaza, 128, <br />
              Ago Palace Way, Okota, Lagos
            </p>
            <ul className="icon flex gap-5 mt-6">
              <li className="mr-4 hover:text-orange-500 text-white text-xl">
                <a
                  href="https://join.skype.com/invite/MNjHfh7esmnD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillSkype />
                </a>
              </li>
              <li className="mr-4 hover:text-orange-500 text-white text-xl">
                <a
                  href="https://twitter.com/Divinit70173300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterSquare />
                </a>
              </li>
              <li className="mr-4 hover:text-orange-500 text-white text-xl">
                <a
                  href="https://www.linkedin.com/in/daniel-obinna-b6a149187/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="hover:text-orange-500 text-white text-xl">
                <a
                  href="https://github.com/BackendDaniel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`services mb-8 md:mb-0 ${
            isDarkMode ? "bg-gray-800" : "bg-black"
          }`}
        >
          <h3 className="text-white text-lg font-normal">What I do</h3>
          <ul className="mt-4 font-normal text-sm">
            <li className="text-white hover:text-orange-500 mb-2 cursor-pointer">
              Frontend Development
            </li>
            <li className="text-white hover:text-orange-500 mb-2 cursor-pointer">
              Backend Development
            </li>
            <li className="text-white hover:text-orange-500 mb-2 cursor-pointer">
              Database Management
            </li>
            <li className="text-white hover:text-orange-500 mb-2 cursor-pointer">
              Server Management etc.
            </li>
          </ul>
          <p className="text-sm font-normal mt-7 text-white">
            <span className="text-sm font-sans italic">Copyright</span> © Code
            With Divinity. All Rights Reserved {currentYear}.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg">Pages</h3>
          <ul className="mt-2 font-normal text-sm bg-none">
            <li>
              <Link
                spy={true}
                smooth={true}
                to="banner"
                className="link text-white hover:text-orange-500 mb-2 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                to="projects"
                className="link text-white hover:text-orange-500 mb-2 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                to="technologies"
                className="link text-white hover:text-orange-500 mb-2 cursor-pointer"
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                to="about"
                className="link text-white hover:text-orange-500 mb-2 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                to="contact"
                className="link text-white hover:text-orange-500 mb-2 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
