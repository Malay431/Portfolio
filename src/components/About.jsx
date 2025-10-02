import { FaCss3, FaCss3Alt, FaGithub, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMui, SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";


const About = ({ id }) => {
  return (
    <div id={id} className="flex flex-col w-full mb-30">
      {/*About Section*/}
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-center text-5xl m-5 underline underline-offset-8">
            About Me
          </h1>
          <p className="text-lg font-medium my-9 max-w-5xl">
            A <span className="text-purple-400 font-bold">Passionate</span> and{" "}
            <span className="text-purple-400 font-bold">Motivated</span> fresher
            with a strong interest in coding and eager to showcase my skills in
            the tech industry. I have experience in both{" "}
            <span className="text-yellow-300 font-bold">Frontend</span> and{" "}
            <span className="text-yellow-300 font-bold">
              Backend development
            </span>{" "}
            and enjoy creating modern, responsive, and user-friendly
            applications. I am ready and motivated to contribute to{" "}
            <span className="text-orange-400 font-bold">
              An Exciting Job Opportunity{" "}
            </span>{" "}
            or take on freelance opportunities to further develop and showcase
            my skill. With strong teamwork and professional communication
            skills, I thrive in collaborative environments. I am continuously
            learning new technologies to stay up-to-date in this fast-paced tech
            industry.
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="m-3 mx-10 flex flex-col justify-center items-center">
        <div className="text-3xl text-center">Technologies</div>
        <div className="mt-6 flex w-full justify-center">
          <div className="p-4 rounded">
            <span className="underline underline-offset-2 text-xl"></span>
            <div className="flex flex-row gap-9">
              
              {/* Programming Languages */}
              <div className="my-5">
                <p className="flex items-center gap-2 text-xl my-2">
                  <FaHtml5 className="text-orange-400" /> Html
                </p>
                <p className="flex items-center gap-2 text-xl my-2">
                  <FaCss3Alt className="text-blue-400" /> CSS
                </p>
                <p className="flex items-center gap-2 text-xl my-2">
                  <IoLogoJavascript className="text-yellow-400" /> Javascript
                </p>
                <p className="flex items-center gap-2 text-xl my-2">
                  <FaJava className="text-white" />
                  Java
                </p>
              </div>

              <div className="my-5">
                <p className="flex items-center gap-2 text-xl my-2">
                  <FaReact className="text-blue-400" /> React
                </p>
                <p className="flex items-center gap-2 text-xl my-2">
                  <FaNodeJs className="text-green-400" /> Node
                </p>
                <p className="flex items-center gap-2 text-xl my-2">
                  <SiExpress className="text-white-400" /> Express
                </p>
                <p className="flex items-center gap-2 text-xl my-2">
                  <RiTailwindCssFill  className="text-blue-400" /> Tailwind
                </p>
              </div>

              <div className="my-5">
                <p className="flex items-center gap-2 text-xl my-2">
                  <SiShadcnui className="text-white-400" /> ShadCN
                </p>
                <p className="flex items-center gap-2 text-xl my-2">
                  <SiMui className="text-blue-400" /> MaterialUI
                </p>
              </div>

              <div className="my-5">
                <p className="flex items-center gap-2 text-xl my-2">
                  <SiMongodb className="text-green-400" /> MongoDB
                </p>
              </div>

              <div className="my-5" >
                <p className="flex items-center gap-2 text-xl my-2">
                  <FaGithub className="text-black-400" /> Github
                </p>
                <p className="flex items-center gap-2 text-xl my-2">
                  <VscVscode className="text-blue-400" /> Visual Studio Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
