import React from "react";
import HeroImg from "../assets/Sathish.jpg";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Hero = () => {
  const config = {
    subtitle: "Full Stack Web Developer",
    social: {
      linkedin: "https://www.linkedin.com/in/krishnasathish3773",
      github: "https://github.com/krishna-Sathish",
    },
  };

  return (
    <section
      className="flex flex-col md:flex-row justify-center px-5 py-8 md:py-32 bg-gray-800"
      id="hero"
    >
      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-white text-6xl font-hero-font">
          Hi, <br /> I'm <span className="name_design">Sathish</span>
        </h1>

        <p className="text-white text-2xl mt-2">{config.subtitle}</p>

        <div className="flex py-10 text-gray-400">
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="pr-5 hover:text-white"
          >
            <AiOutlineLinkedin size={40} />
          </a>

          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-white"
          >
            <AiOutlineGithub size={40} />
          </a>
        </div>
      </div>

      <div className="md:w-1/3 flex flex-col items-center">
        <img
          className="h-56 hero-img"
          src={HeroImg}
          alt="Sathish - Full Stack Web Developer"
          loading="lazy"
        />
        <p className="text-white text-center mt-5 text-xl">B.E / EEE</p>
      </div>
    </section>
  );
};

export default Hero;
