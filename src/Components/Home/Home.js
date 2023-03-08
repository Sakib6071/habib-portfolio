import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import cv from './cv.pdf'
import "./Home.css";


const Home = () => {
  function handleDownloadCV() {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <div id="home" className="grid grid-cols-1 md:grid-cols-2 gap-y-20 py-36 px-2 md:px-20 custom-bg text-white">
        <div className="text-left">
          <div className="text-6xl font-bold">
            <p>I am</p>
          </div>

          <div className="text-3xl lg:text-5xl font-bold my-8">
            <p className=" text-green-400">
            <Typewriter
            words={['Habib Ullah', 'Front End Developer']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
            </p>
          </div>
          <div className="flex gap-10 mt-8 lg:mt-14 justify-center md:justify-start">
            <div>
              <a
                href="https://www.facebook.com/SakibHabibUllah"
                target={"_blank"}
                rel="noreferrer"
              >
                
                <FontAwesomeIcon
                  icon={faFacebook}
                  size={"3x"}
                  color={"#3b5998"}
                ></FontAwesomeIcon>
              </a>
            </div>

            <div>
              {" "}
              <a
                href="https://www.linkedin.com/in/habibullah6071/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon 
                  icon={faLinkedin}
                  size={"3x"}
                  color={"#0072b1"}
                ></FontAwesomeIcon>
              </a>{" "}
            </div>

            <div>
              {" "}
              <a
                href="https://github.com/Sakib6071"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size={"3x"}></FontAwesomeIcon>
              </a>
            </div>
          </div>
          <div className="text-center pt-16">
            <button onClick={handleDownloadCV} className="custom-shadow font-semibold px-10 py-5 text-2xl text-green-400">Download Resume/CV</button>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
          <div className="lg:absolute flip-box-front flex justify-center items-center">
          <img
            src={`https://i.ibb.co/bK0r7Kw/profile.jpg`}
            alt="Profile"
            className="rounded-full border-2 p-4 border-green-400 w-3/4 sm:w-1/2 flex items-center justify-center hover:border-blue-500"
          />
        </div>
        <div className="flip-box-back hidden lg:flex lg:absolute justify-center items-center">
        <img
            src={`https://i.ibb.co/k6MjbDY/IMG-20230304-132002-01-1.jpg`}
            alt="Profile"
            className="rounded-full border-2 p-4 border-green-400 w-1/2 flex items-center justify-center hover:border-blue-500"
          />
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
