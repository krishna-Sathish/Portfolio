import React from "react";

const Resume = () => {
  const config = {
    link: "https://sathishresume3773.tiiny.site",
  };

  return (
    <section
      className="flex flex-col bg-gray-950 px-5 py-5"
      id="resume"
    >
      {/* TITLE – ALWAYS CENTER */}
      <div className="w-full flex justify-center">
        <h1 className="text-white text-4xl border-b-4 mb-5 w-[140px] font-bold text-center">
          Resume
        </h1>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 py-5 flex justify-center md:justify-end">
          <img
            className="my-3 w-[230px] md:w-[250px]"
            src="https://image.lexica.art/full_webp/32b18dcd-ee11-427a-9e04-24a50bb31642"
            alt="Resume preview"
          />
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-white my-3">
              Feel free to view my <strong>Resume</strong>
            </p>
            <a
              href={config.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mx-3"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
