import React from 'react'
import { projectInfo } from '../../api/projectInfo';
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";

const AllProject = () => {
  return (
    <div className='p-10'>
      <div className='ml-10 hover:translate-x-4 duration-700'>
        <a href='/' className='border bg-black py-2 px-4 rounded-xl text-white hover:bg-white hover:text-black'>Visit Home</a>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <span className='mb-5 text-3xl'>My Github Calender</span>
        <img src="http://ghchart.rshah.org/Malay431" alt="Malay431's Github chart"/>
      </div>
      {
        <div className="flex flex-col p-10 w-full gap-7 items-center justify-center">
                {projectInfo.map((items, index) => {
                  return (
                    <div key={index} className="flex w-full p-1 border border-gray-50/20 rounded-2xl h-auto hover:scale-103  hover:shadow-[0_0_30px] shadow-purple-500 duration-500">
                      {/* Image Div */}
                      <div className="w-1/2 h-full md:h-70 border-r border-gray-50/20 p-1">
                        <img className="w-full h-full" src={items.image} />
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
      }
    </div>
  )
}

export default AllProject
