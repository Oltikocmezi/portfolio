import React from "react";
import { FaAward } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import profile from "../assets/profileRandom-removebg.png";

const info = [
  {
    img: <FaAward className="text-blue-400 text-3xl" />,
    title: "Education",
    subtitle: "Bachelor Degree - Present",
  },
  {
    img: <FaHandshake className="text-blue-400 text-3xl" />,
    title: "Certificates",
    subtitle: "7+",
  },
  {
    img: <FaFolderOpen className="text-blue-400 text-3xl" />,
    title: "Projects",
    subtitle: "3+ Finished",
  },
];

function About() {
  return (
    <section id="About" className="About w-full h-fit  flex flex-col">
      <div className="w-full h-[10vh] flex flex-col justify-center items-center">
        <p className="text-xl text-gray-400 font-sans">Get To Know</p>
        <p className="text-4xl text-blue-400 mt-2 font-medium font-sans">
          About Me
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className=" justify-center items-center hidden md:block w-1/3 h-full">
          <img className="w-96 h-96 xl:ml-32" src={profile} alt="img" />
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 xl:py-28 h-full">
          <div className=" w-full h-1/2 flex flex-wrap justify-around items-center">
            {info.map((item, index) => {
              return (
                <div
                  className="w-64 h-52 m-2 border border-blue-700/20 bg-blue-700/20 backdrop-blur-sm hover:border-blue-700 cursor-default hover:backdrop-blur-none hover:bg-transparent hover:duration-500 rounded-xl flex flex-col justify-center items-center"
                  key={index}
                >
                  {item.img}
                  <p className="font-sans text-white font-medium text-2xl mt-4">
                    {item.title}
                  </p>
                  <p className="font-sans text-gray-200 text-md mt-4">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <p className="font-sans px-10 md:px-0 font-medium md:w-1/2 h-1/3 flex text-gray-300 text-lg justify-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a
          className="bg-blue-800 cursor-pointer w-fit hover:bg-blue-900 duration-500 px-3 mt-4 py-3 sm:px-6 sm:py-4 text-white text-lg sm:text-xl font-sans rounded-lg"
          href="#Contact"
        >
          Let's Talk
        </a>
      </div>
    </section>
  );
}

export default About;
