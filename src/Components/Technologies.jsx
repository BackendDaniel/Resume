import { useState, useEffect } from "react";
import {
  FaMicrosoft,
  FaPencilRuler,
  FaUsers,
  FaGit,
  FaClipboardList,
  FaLightbulb,
  FaComments,
} from "react-icons/fa";

const Technologies = () => {
  const [index, setIndex] = useState(0);
  const technologies = [
    { skill: "HTML" },
    { skill: "CSS, Sass, Tailwind, Scss" },
    { skill: "Javascript, Typescript & JQuery" },
    { skill: "UI/UX Design" },
    { skill: "MySQL MongoDB" },
    { skill: "ReactJS" },
    { skill: "NodeJS" },
  ];
  const additionalSkills = [
    {
      skill: "Microsoft Suite",
      icon: <FaMicrosoft size={24} style={{ color: "blue" }} />,
    },
    {
      skill: "CorelDRAW",
      icon: <FaPencilRuler size={24} style={{ color: "blue" }} />,
    },
    {
      skill: "Desktop Publishing",
      icon: <FaClipboardList size={24} style={{ color: "blue" }} />,
    },
    { skill: "Git", icon: <FaGit size={24} style={{ color: "blue" }} /> },
    {
      skill: "Teamwork",
      icon: <FaUsers size={24} style={{ color: "blue" }} />,
    },
    {
      skill: "Quick Learning",
      icon: <FaLightbulb size={24} style={{ color: "blue" }} />,
    },
    {
      skill: "Communication Skill",
      icon: <FaComments size={24} style={{ color: "blue" }} />,
    },
  ];
  const numberOfItems = technologies.length + additionalSkills.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % numberOfItems);
    }, 2000); // Adjust the delay (in milliseconds) between each item
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className=" m-auto px-4 py-12">
        <div className="container m-auto px-4">
          <h2 className="text-2xl font-semibold">Tecnologies</h2>
          <div className="mt-14">
            <div>
              <div className="flex justify-between items-center">
                <h2 className=" font-semibold">HTML</h2>
                <p className="text-gray-500">Advanced</p>
              </div>
              <span className="w-[78%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md "></span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h2 className=" font-semibold">CSS, Sass, Tailwind, Scss </h2>
                <p className="text-gray-500">Intermediate</p>
              </div>
              <span className="w-[66%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md "></span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">
                  Javascript, Typescript & JQuery
                </h2>
                <p className="text-gray-500">Intermediate</p>
              </div>
              <span className="w-[71%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md "></span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">UI/UX Design </h2>
                <p className="text-gray-500">Intermediate</p>
              </div>
              <span className="w-[55%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md "></span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">MySQL MongoDB</h2>
                <p className="text-gray-500">Improoving</p>
              </div>
              <span className="w-[41%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md "></span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h2 className=" font-semibold">ReactJS</h2>
                <p className="text-gray-500">Intermediate</p>
              </div>
              <span className="w-[65%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md "></span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h2 className=" font-semibold"> NodeJS</h2>
                <p className="text-gray-500">Intermediate</p>
              </div>
              <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md "></span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto px-4 py-14">
          <h2 className="text-2xl font-semibold">
            Additional Technologies & Skills
          </h2>
          <div className="mt-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  skill: "Microsoft Suite",
                  icon: <FaMicrosoft size={24} style={{ color: "blue" }} />,
                  key: "ms",
                },
                {
                  skill: "CorelDRAW",
                  icon: <FaPencilRuler size={24} style={{ color: "blue" }} />,
                  key: "coreldraw",
                },
                {
                  skill: "Desktop Publishing",
                  icon: <FaClipboardList size={24} style={{ color: "blue" }} />,
                  key: "publishing",
                },
                {
                  skill: "Git",
                  icon: <FaGit size={24} style={{ color: "blue" }} />,
                  key: "git",
                },
                {
                  skill: "Teamwork",
                  icon: <FaUsers size={24} style={{ color: "blue" }} />,
                  key: "teamwork",
                },
                {
                  skill: "Quick Learning",
                  icon: <FaLightbulb size={24} style={{ color: "blue" }} />,
                  key: "learning",
                },
                {
                  skill: "Communication Skill",
                  icon: <FaComments size={24} style={{ color: "blue" }} />,
                  key: "communication",
                },
              ].map(({ skill, icon, key }, index) => (
                <li
                  key={key}
                  className=" -z-50 text-center falling-ball-item"
                  style={{
                    animation: `drop 1s ease-out ${index * 0.5}s infinite `,
                  }}
                >
                  {icon}
                  <p className="-z-50 font-bold mt-2 text-sky-500">{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
