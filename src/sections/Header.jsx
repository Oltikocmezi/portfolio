import React from "react";
import "../App.css";
import profile from "../assets/profileRandom-removebg.png";
import Socials from "../components/Socials";
// w-full h-screen inset-0 backdrop-blur-2xl
function Header() {
  return (
    <div id="Home" className="min-w-80 w-full h-screen min-h-screen ">
      <div className="App-header flex justify-center items-center bg-cover bg-center bg-no-repeat text-white ">
        <section className=" flex flex-col justify-start items-center w-fit h-screen">
          <div className=" p-4 mt-24 flex flex-col justify-center items-center">
            <p className="text-md sm:text-lg font-sans font-medium cursor-default">
              Hello, I'm
            </p>
            <h1 className="name text-4xl sm:text-6xl font-sans font-medium cursor-default">
              Olt Koçmezi
            </h1>
            <p className="text-gray-300 text-md sm:text-lg font-sans font-medium mt-4 cursor-default">
              Front End Developer
            </p>
          </div>

          <div className="flex mt-8 justify-around items-center">
            <a
              href="/Olt Kocmezi CV (Resume).pdf"
              download="Olt_Kocmezi_CV.pdf"
              className="border hover:border-blue-900 border-blue-400 hover:bg-blue-900 duration-500 px-3 py-3 sm:px-6 sm:py-4 text-blue-400 text-lg sm:text-xl font-sans font-medium rounded-lg"
            >
              Download CV
            </a>
            <a
              href="#Contact"
              className="ml-10 bg-blue-800 hover:bg-blue-900 duration-500 px-3 py-3 sm:px-6 sm:py-4 text-white text-lg sm:text-xl font-sans rounded-lg"
            >
              Let's Talk
            </a>
          </div>
        </section>

        <div className=" min-w-fit absolute bottom-0 sm:bottom-6 bg-transparent/20 sm:w-96 sm:h-96 rounded-t-full">
          <img
            src={profile}
            alt="img"
            className=" min-w-64 w-64 rounded-t-full h-72 sm:w-full sm:h-full"
          />
        </div>

        <Socials />
      </div>
    </div>
  );
}

export default Header;
