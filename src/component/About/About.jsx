/* eslint-disable react/style-prop-object */
import React from "react";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <>
      <div>
        <div className="w-full h-[100%] flex flex-col shadow-sm  py-12 pb-16 md:grid-cols-2">
          {/* {leftside-content} */}
          <h2 className="text-5xl text-center font-semibold underline">
            <span>About</span> <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-[50px] justify-center  mx-auto rounded-2xl"></div>
          <div className="w-full p-5 items-center  text-xl ">
            <pre className="text-justify  text-blue-500 shadow-lg rounded-lg break-words whitespace-pre-line">
              <span>My</span> name is <span>Rishiraj Shinde</span> an Export in
              Full stack web Development , I Have over 7 project experiences
              with the journy . My specialty is Reactjs And Node js and creating
              attractive responsive website and web app using Reactjs and
              Tailwindcss, CSS, HTML, and Bootstrap, Node js and Express js and
              Mongo DB.
            </pre>
          </div>
        </div>
        <div className="w-full h-[100%]">
        <Skills/>
        </div>
        
      </div>

    </>
  );
};

export default About;
