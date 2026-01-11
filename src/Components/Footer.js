import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white py-4 bg-gray-950 text-center">
      <h5 className="mt-2">Designed with Dedication 💞</h5>
      <p className="my-2">
        &copy; {new Date().getFullYear()} Sathish
      </p>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="btn my-2"
      >
        Go to top
      </button>
    </footer>
  );
};

export default Footer;
