import React from 'react';
import ProjectSlider from '../Slider/ProjectSlider';
import { config } from '../data/data';
const Projects = () => {
   return (
    <section
      className="flex flex-col px-5 py-10 md:py-20 justify-center text-white bg-gray-800"
      id="project"
    >
      <div className="w-full">
        <div className="flex flex-col px-5 py-5 md:px-10">
          <h1 className="text-4xl border-b-4 mb-5 w-[140px] font-bold">Projects</h1>
          <p className="text-white">
            These are some of my projects. I have built them using frontend technologies. Check them out!
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row  px-5 md:px-10 gap-5">
          {config[0].projects.map((project, index) => (
                <div className="relative" key={index}>
                   <img
                className="h-[170px] w-[500px] object-cover rounded"
                src={project.image}
                alt={project.title}
                   />
              <div className="project-ani">
                <p className="text-center py-5 px-5">{project.description}</p>
                <div className='flex justify-center'>
               <a className='btn' target='_blank' rel="noopener noreferrer" href={project.link}>View Project</a>
              </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
      <div className='w-full'>
      <ProjectSlider/>
         
      </div>
    </section>
  );
};

export default Projects;
