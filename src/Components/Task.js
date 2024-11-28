import React from "react";

const Task = (props) => {
  const { title, image, link } = props;
  return (
    <>
    
    <div className="flex flex-col items-center gap-3 relative">
      <img
        src={image}
        alt={title}
        className="h-[170px] w-[500px] object-cover rounded"
      />
      <div className="project-ani"> 
        <div className="flex justify-center items-center h-[150px]">

          <a
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
          >
            View page
          </a>
        </div>

      </div>
    </div>
        <p className="text-center mt-2">{title}</p>
    </>

  );
};

export default Task;
