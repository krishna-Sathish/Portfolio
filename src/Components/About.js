import React from "react";

const About = () => {
  const config = {
    line1:
      "Hi, my name is Sathish. I am a Full Stack Web Developer with experience in building responsive and user-friendly web applications.",
    line2:
      "I am proficient in frontend technologies such as HTML, CSS, JavaScript, React, Redux Toolkit, Axios, Bootstrap, SCSS, and Tailwind CSS.",
    line3:
      "On the backend, I have hands-on experience with Python.",
  };

  return (
    <section
      className="flex flex-col md:flex-row bg-gray-950 px-5 py-10"
      id="about"
    >
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          className="rounded-full my-3"
          src="https://image.lexica.art/full_webp/2a1295dc-c5d2-44fb-87e5-c849c4584b71"
          alt="Sathish - Full Stack Web Developer"
          loading="lazy"
        />
      </div>

     <div className="md:w-1/2 flex justify-center">
  <div className="flex flex-col justify-center ms-3 max-w-xl">
    <h1 className="text-white text-4xl border-b-4 mb-5 w-[170px] font-bold text-center mx-auto md:text-left md:mx-0">
      About Me
    </h1>
    <p className="text-white mt-3">{config.line1}</p>
    <p className="text-white mt-3">{config.line2}</p>
    <p className="text-white my-3">{config.line3}</p>
  </div>
</div>

    </section>
  );
};

export default About;
