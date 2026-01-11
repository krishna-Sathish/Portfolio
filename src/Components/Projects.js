import React from "react";
import ProjectSlider from "../Slider/ProjectSlider";
import { config } from "../data/data";

const Projects = () => {
  return (
    <section
      className="flex flex-col px-5 py-10 md:py-10 justify-center text-white bg-gray-800"
      id="project"
    >
      <div className="w-full">
  <div className="flex flex-col px-5 py-2 md:px-10 md:py-6 lg:py-2">
    <h1 className="text-4xl border-b-4 mb-5 w-[140px] font-bold text-center mx-auto">
      Projects
    </h1>
    <p className="text-gray-400 text-center">
      These are some of my projects built using frontend technologies.
      Feel free to explore them.
    </p>
  </div>
</div>


      <div className="w-full">
        <div className="flex flex-col md:flex-row px-5 md:px-10 gap-5">
          {config[0].projects.map((project, index) => (
            <div
              className="relative w-full md:w-1/2 lg:w-1/3"
              key={index}
            >
              <img
                loading="lazy"
                className="h-[170px] w-full object-cover rounded"
                src={project.image}
                alt={`${project.title} project screenshot`}
              />

              <div className="project-ani">
                <p className="text-center py-5 px-5">
                  {project.description}
                </p>
                <div className="flex justify-center">
                  <a
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-10">
        <ProjectSlider />
      </div>
    </section>
  );
};

export default Projects;
