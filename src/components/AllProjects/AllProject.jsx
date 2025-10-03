import React from "react";
import { projectInfo } from "../../api/projectInfo";
import { FaArrowAltCircleLeft, FaArrowLeft, FaExternalLinkAlt, FaLink } from "react-icons/fa";

const AllProject = () => {
  return (
    <div className="p-10">
        <a
          href="/"
          className="flex items-center gap-3 w-fit ml-5 mb-2 md:ml-10 hover:translate-x-4 duration-700 border bg-black py-2 px-4 rounded-xl text-white hover:bg-white hover:text-black"
        >
          <FaArrowLeft/> Back Home
        </a>
    

      <div className="hidden md:flex flex-col items-center justify-center">
        <span className="mb-5 text-3xl">My Github Calender</span>
        <img
          src="http://ghchart.rshah.org/Malay431"
          alt="Malay431's Github chart"
        />
      </div>
      <p className="mt-10 text-center md:text-start text-3xl underline underline-offset-4">All Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 mt-10">
        {projectInfo.map((items, index) => {
          return (
            <div
              key={index}
              className=" bg-gray-500/20 backdrop-blur-xl flex flex-col w-full p-1 border border-gray-50/20 rounded-2xl h-auto hover:scale-103  hover:shadow-[0_0_30px] shadow-purple-500 duration-200"
            >
              {/* Image Div */}
              <div className="w-full h-full md:h-70 border-gray-50/20 p-1">
                <img className="w-full h-full rounded-2xl" src={items.image} />
              </div>
              {/* Text Div */}
              <div className="m-2 p-2 w-full">
                <p className="font-bold text-purple-400 my-1">
                  Title :{" "}
                  <span className="text-cyan-300 font-medium">
                    {items.title}
                  </span>
                </p>

                <div className="border"></div>

                <p className="font-bold text-purple-400 mt-3">Tech:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {items.stack.map((lang, i) => (
                    <span
                      key={i}
                      className="bg-purple-50/20 text-white text-sm border font-light border-purple-400 px-2 py-1 rounded-xl"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <p className="text-blue-400 flex mt-4">
                  <span className="mr-2">Link: </span>
                  {items.link ? (
                    <a
                      href={items.link}
                      target="_blank"
                      className="flex items-center gap-2 w-fit"
                    >
                      <FaExternalLinkAlt className="text-sm" /> Visit Project
                    </a>
                  ) : (
                    <a
                      href={items.github}
                      target="_blank"
                      className="flex items-center gap-2 w-fit"
                    >
                      <FaLink className="text-sm" /> Visit Github
                    </a>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProject;
