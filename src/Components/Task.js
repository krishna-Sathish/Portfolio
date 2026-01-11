import React from "react";
import PropTypes from "prop-types";

const Task = ({ title, image, link }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-3 relative w-full">
        <img
          loading="lazy"
          src={image}
          alt={`${title} project screenshot`}
          className="h-[170px] w-full object-cover rounded"
        />

        <div className="project-ani">
          <div className="flex justify-center items-center h-[150px]">
            <a
              aria-label={`View ${title} project`}
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

Task.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Task;
