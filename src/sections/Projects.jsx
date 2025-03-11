import React from "react";
import images from "../components/images";

function Projects() {
  return (
    <div
      id="Projects"
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <section className="mt-16">
        <p className="text-4xl xl:text-7xl font-mono font-bold">
          CHECK OUT MY{" "}
        </p>
        <p className="text-6xl w-fit text-blue-800 xl:text-9xl font-mono font-bold text-center md:ml-[80%]">
          WORK
        </p>
      </section>
      <div className="w-full h-fit xl:h-[80vh] flex flex-wrap justify-evenly items-center">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-96 xl:w-[30vw] xl:hover:w-[35vw] h-[50vh] hover:h-[55vh] m-2 bg-black/40 hover:bg-transparent/10 flex flex-col justify-center items-center duration-500 rounded-2xl"
            >
              <img
                className="rounded-xl w-[80%] h-[70%] "
                src={item.img}
                alt="img"
              />
              <div className=" mt-4 w-full rounded-2xl h-[8vh] text-white flex justify-around items-center">
                <p className="text-l xl:text-2xl tracking-wider ">
                  {item.title}
                </p>
                <a
                  href={"https://Oltikocmezi.github.io/TreasureYacht/"}
                  className=" cursor-pointer bg-blue-900 px-2 py-2 text-md font-mono tracking-wider xl:px-4 xl:py-3 rounded-lg border-blue-900 duration-500"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
