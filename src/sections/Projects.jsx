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
      <div className="w-full h-fit xl:pl-6 flex flex-wrap justify-start ">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full xl:w-[48%] m-2 bg-black/40 hover:bg-transparent/10 flex flex-col justify-center items-center duration-500 rounded-2xl"
            >
              <img
                className="rounded-2xl w-full h-full p-2"
                src={item.img}
                alt="img"
              />
              <div className="m-2 w-full h-full rounded-2xl text-white flex justify-around items-center">
                <p className="text-l xl:text-2xl tracking-wider font-mono  ">
                  {item.title}
                </p>
                <a
                  href={item.url}
                  className="text-16 rounded-lg border border-blue-950 bg-sky-800 hover:bg-blue-800 duration-300 px-4 py-2 text-white font-mono shadow-form cursor-pointer "
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
