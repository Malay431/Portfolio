import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import AllProject from "./components/AllProjects/AllProject";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div
      className={`relative min-h-screen font-mono overflow-hidden text-slate-50 bg-black`}
    >
      <div className="absolute inset-0 stars z-0"></div>
      {/* Main Content */}
      <div className="hidden md:block relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <About id="about" />
                <Experience/>
                <Projects id="projects" />
                <Contact id="contact"/>
              </>
            }
          />
          <Route path="/projects" element={<AllProject />} />
        </Routes>
        <Footer/>

      </div>
      <div className="flex md:hidden items-center justify-center h-screen px-6 text-center">
        <div className="space-y-6">
          {/* Emoji Illustration */}
          <div className="text-6xl animate-spin ">📱</div>

          {/* Heading */}
          <h1 className="text-3xl font-bold">Oops! Mobile Detected</h1>

          {/* Message */}
          <p className="text-gray-300 text-lg">
            This portfolio is optimized for desktop screens only. <br />
            I am working on making this responsive.
            Please visit it on a larger device for the best experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
