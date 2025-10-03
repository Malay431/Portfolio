import React from "react";
import { projectInfo } from "../../api/projectInfo";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";

const AllProject = () => {
  return (
    <div className="p-10">
      <div className="ml-10 hover:translate-x-4 duration-700">
        <a
          href="/"
          className="border bg-black py-2 px-4 rounded-xl text-white hover:bg-white hover:text-black"
        >
          Visit Home
        </a>
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="mb-5 text-3xl">My Github Calender</span>
        <img
          src="http://ghchart.rshah.org/Malay431"
          alt="Malay431's Github chart"
        />
      </div>
      <div className="flex">
        {
        projectInfo.map((items,index)=>{
          return(
            <div>
              <div>One</div>
            <div>Two</div>
            <div>Three</div>
            </div>
          )
        })
      }
      </div>
    </div> 
  );
};

export default AllProject;
