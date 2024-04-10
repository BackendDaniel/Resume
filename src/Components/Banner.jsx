import React, { useEffect, useState } from "react";
import img from "../assets/profile.jpg";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Aos from "aos";
import styled from "styled-components";
import "aos/dist/aos.css";

const Container = styled.div`
  margin: auto;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 4px;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  @media (min-width: 640px) {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 0.75rem;
  @media (min-width: 640px) {
    font-size: 2rem;
    margin-top: 1rem;
  }
`;

const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 0.25rem;
  @media (min-width: 640px) {
    font-size: 2rem;
    margin-top: 1rem;
  }
`;

const Description = styled.p`
  margin-top: 0.75rem;
  color: #666;
  text-align: justify;
  @media (min-width: 640px) {
    text-align: justify;
    font-size: 0.875rem;
  }
`;

const ImageContainer = styled.div`
  padding-left: 8px;
  z-index: -50;
  @media (min-width: 640px) {
    padding-left: 0;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 380px;
  border: 1px solid #000;
  border-radius: 50%;
  margin: auto;
  @media (min-width: 640px) {
    max-width: none;
    margin: 0;
  }
`;

const Banner = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2500, offset: window.innerHeight / 5 });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;

      // Adjust this value as needed
      const scrollThreshold = screenHeight * 0.5;

      setShowScrollToTop(scrollY > scrollThreshold);
      setShowScrollToBottom(
        scrollY < document.body.scrollHeight - screenHeight - scrollThreshold
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="container m-auto px-4 flex flex-col gap-4 sm:flex-row sm:gap-4 items-center">
        <div className="text-center sm:text-left">
          <h2 className="font-bold text-3xl">Hello! I'm Divinity,</h2>
          <h2 className="font-bold text-3xl mt-1 gradiant-text">
            Fullstack Developer
          </h2>
          <p className="mt-3 text-gray-400 text-justify sm:text-justify sm:text-sm md:text-md">
            I bring a blend of technical skills as an Enthusiastic Fullstack
            Developer with a passion for crafting seamless <br />
            and impactful digital experiences. My journey involves mastery in
            both front-end and back-end <br />
            technologies, ensuring efficiency and innovation in every project,
            seeking to apply competent development skills <br />
            with a focus on collaboration and passion.
          </p>
        </div>
        <div className="pl-8 -z-50">
          <img
            src={img}
            width={380}
            className=" mx-auto sm:mx-0 border rounded-full border-none z-10"
            alt="profile"
            data-aos="fade-up"
          />
        </div>
      </div>

      {/* Scroll buttons with dynamic visibility */}
      <div className="fixed bottom-[40%] right-10 flex flex-col items-center cursor-pointer pl-10">
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="text-blue-500 px-4 py-2 mb-10 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"
            aria-label="Scroll to Top"
          >
            <FaArrowUp />
          </button>
        )}
        {showScrollToBottom && (
          <button
            onClick={scrollToBottom}
            className="text-blue-500 px-4 py-2 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"
            aria-label="Scroll to Bottom"
          >
            <FaArrowDown />
          </button>
        )}
      </div>
    </section>
  );
};

export default Banner;
