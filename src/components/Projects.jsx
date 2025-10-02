import React from "react";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { projectInfo } from "../api/projectInfo";
const Projects = ({ id }) => {
  return (
    <div
      id={id}
      className="flex flex-col items-center justify-center w-full mb-5"
    >
      <div className="text-center">
        <h1 className="text-5xl m-5 underline underline-offset-8">PROJECTS</h1>
      </div>

      <div className="flex flex-col p-10 w-full gap-7 items-center justify-center">
        {projectInfo.slice(0,3).map((items, index) => {
          return (
            <div key={index} className="flex w-full p-1 border border-gray-50/20 rounded-2xl h-auto hover:scale-103  hover:shadow-[0_0_30px] shadow-purple-500 duration-500">
              {/* Image Div */}
              <div className="w-1/2 h-full md:h-70 border-r border-gray-50/20 p-1">
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
                <p className="font-bold text-purple-400 ">Description : </p>
                <p className="mb-2">{items.description}</p>

                <div className="border"></div>

                <p className="font-bold text-purple-400 mt-3">
                  Tech:
                  {items.stack.map((lang, i) => (
                    <span key={i} className="bg-purple-50/20 text-white text-sm border font-light border-purple-400 p-1 rounded-xl mx-1">
                      {lang}
                    </span>
                  ))}
                </p>
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
      <a href='/projects'>
      <div className="border border-gray-700/50 p-2 rounded-2xl bg-gray-950 font-bold cursor-pointer">
        <div className="bg-gray-700/10 text-slate-100 p-2 rounded-2xl ">
          View all projects
        </div>
      </div>
      </a>
      <div className="text-gray-500 mt-2">
        Showing 3 out of {projectInfo.length} projects
      </div>
    </div>
  );
};

export default Projects;
