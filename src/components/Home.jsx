import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";


const Home = ({id}) => {
  return (
    <main id={id}className="flex md:flex-row md:justify-between h-screen w-full md:items-center">
      {/* Text Section */}
      <div className="md:ml-20 w-1/2">
        <div className="mb-3">
          <span className="text-5xl font-bold text-[#FFA500]">
            <p className="text-green-400 text-sm mb-4">{"<> Hello World </>"}</p>
            <p className="text-sm text-green-400">{'<h1>'}</p>
            
            <Typewriter
              words={['Malay Chitodkar','Frontend Developer','Backend Developer', 'MERN Stack Developer']}
              loop='true'
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          <p className="text-sm text-green-400">{'<h1>'}</p>
          </span>
        </div>
        <div className="w-full mb-20">
          <p className="font-medium">
            <span className="text-green-400">{'<p> '}</span>
            A passionate and enthusiastic programmer with expertise in both
            frontend and backend development, dedicated to building scalable,
            high-performance web applications with clean code and seamless user
            experiences.
            <span className="text-green-400">{'</p>'}</span>
          </p>
          <ul className="flex mt-4 gap-3">
            <a className="text-3xl hover:text-green-400 hover:scale-125" href='https://github.com/Malay431' target="_blank"><FaGithub/></a>
            <a className="text-3xl hover:text-green-400 hover:scale-125" href="https://www.linkedin.com/in/malay431/" target="_blank"><FaLinkedin /></a>
          </ul>
        </div>
        <div className="flex gap-5 mt-4">
          <button
            className={`border-2 rounded-2xl m-2 py-2 px-3 w-1/2 cursor-pointer hover:border-green-300 hover:shadow-2xl hover:shadow-green-500`}
          >
            Hire Me
          </button>
          <button className="border-2 rounded-xl m-2 py-2 px-3 w-1/2 cursor-pointer hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500">Resume</button>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden w-1/2 p-2 md:flex justify-center">
        <img src="/avatar.png" className="w-50 md:w-1/2 rounded-3xl" />
      </div>
    </main>
  );
};

export default Home;
