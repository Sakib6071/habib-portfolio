import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="project" className="custom-bg py-16 text-white">
      <div className="text-center">
        <p className="text-4xl font-semibold my-5 text-green-400 border-b-4 pb-3 border-green-400 inline-block text-center">
          Projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-x-5 p-5 md:px-20">
        <div data-aos="zoom-in" className="custom-shadow p-3 image-container relative">
          <img
            src={"https://i.ibb.co/K20Btws/project1.png"}
            alt="project banner"
          />

          <div className="overlay ease-in duration-300 absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 ">
            <div className="inner-item">
                <span className="text-center text-2xl font-semibold">eLearning Project</span>
                <div className="mt-2">
                    <a className="mr-3 rounded-md bg-emerald-800 px-3 py-1 text-xl" href="https://elearning-d88d4.web.app/" target="_blank" rel="noreferrer">Live</a>
                    <a className="ml-3 rounded-md bg-emerald-800 px-3 py-1 text-xl" href="https://github.com/Sakib6071/elearning" target="_blank" rel='noreferrer'>Code</a>
                </div>

            </div>
          </div>
        </div>

        <div data-aos="zoom-in" className="custom-shadow p-3 image-container relative">
          <img
            src={"https://i.ibb.co/y8Bfw5r/project2.png"}
            alt="project banner"
          />
          <div className="overlay ease-in duration-300 absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 ">
            <div className="inner-item">
                <span className="text-center text-2xl font-semibold">Know The Nation</span>
                <div className="mt-2">
                    <a className="mr-3 rounded-md bg-emerald-800 px-3 py-1 text-xl" href="https://know-the-nation.netlify.app/" target="_blank" rel="noreferrer">Live</a>
                    <a className="ml-3 rounded-md bg-emerald-800 px-3 py-1 text-xl" href="https://github.com/Sakib6071/know-the-nation" target="_blank" rel='noreferrer'>Code</a>
                </div>

            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="custom-shadow p-3 image-container relative">
          <img
            src={"https://i.ibb.co/W6D75sS/project3.png"}
            alt="project banner"
          />
          <div className="overlay ease-in duration-300 absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 ">
            <div className="inner-item">
                <span className="text-center text-2xl font-semibold">Furniture Mania</span>
                <div className="mt-2">
                    <a className="mr-3 rounded-md bg-emerald-800 px-3 py-1 text-xl" href="https://furniture-mania.netlify.app/" target="_blank" rel="noreferrer">Live</a>
                    <a className="ml-3 rounded-md bg-emerald-800 px-3 py-1 text-xl" href="https://github.com/Sakib6071/furniture-mania" target="_blank" rel='noreferrer'>Code</a>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
