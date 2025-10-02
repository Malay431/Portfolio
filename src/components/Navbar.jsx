import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-center items-center">
      <div className="fixed gap-2 left-4 top-6 flex text-xs">
        Current Status:
        <span>Under development</span>
        <p className="text-red-700 animate-pulse [animation-duration:700ms] flex items-center">
          <FaCircle />
        </p>
      </div>
      <div>
        <ul className="hidden md:flex md:gap-10 text-xl p-3 mt-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
