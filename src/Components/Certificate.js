import React from "react";
import reactCert from "../assets/React Frontend Development.png";
import fullStackCert from "../assets/Python Full Stack Development.jpg";

const certificates = [
  {
    title: "Python Full Stack Development",
    issuer: "AchieversIT Institute",
    year: "Aug 2024 – Feb 2025",
    image: fullStackCert,
  },
  {
    title: "React Frontend Development",
    issuer: "GreatStack",
    year: "2024",
    image: reactCert,
  },
];

const Certificates = () => {
  return (
    <section className="bg-gray-900 text-white py-10" id="certificates">
      <h2 className="text-4xl font-bold text-center mb-3">Certifications</h2>
      <p className="text-center text-gray-400 mb-8">
        Industry-recognized certifications validating my skills
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transition"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="rounded mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-gray-400">
              {cert.issuer} | {cert.year}
            </p>
            <a
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-blue-400 hover:underline"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
