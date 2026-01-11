import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {

  console.log(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
);

  const config = {
    email: "romansathish3337@gmail.com",
    phone: "9025464168",
    location: "Krishnagiri",
  };

  // Initial input field values
  const input = { username: "", email: "", message: "" };
  const [inputField, setInputField] = useState(input);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const updateValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputField({ ...inputField, [name]: value }); 
    // Clear error message when user starts typing
    if (errorMessage) setErrorMessage("");
  };

  const submitForm = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!inputField.username.trim()) {
      setErrorMessage("Please enter your name");
      return;
    }
    if (!inputField.email.trim()) {
      setErrorMessage("Please enter your email");
      return;
    }
    if (!validateEmail(inputField.email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    if (!inputField.message.trim()) {
      setErrorMessage("Please enter your message");
      return;
    }
    if (inputField.message.trim().length < 10) {
      setErrorMessage("Message must be at least 10 characters long");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  
    const templateParams = {
      to_name: "Sathish",
      from_name: inputField.username,
      user_email: inputField.email,
      message: inputField.message,
    };
  
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setSuccessMessage(`Thank you ${inputField.username}! Your message has been sent successfully. I'll get back to you soon.`);
        setInputField({ username: "", email: "", message: "" });
        setLoading(false);
        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(""), 5000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setErrorMessage("Failed to send message. Please try again later or contact directly via email.");
        setLoading(false);
      });
  };
  

  return (
    <section className="bg-gray-800 px-5 py-5 md:py-10" id="contact">
      <h1 className="text-white text-4xl border-b-4 border-white w-[140px] mx-auto mb-5 font-bold text-center">
        Contact
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col items-center justify-center text-white">
          <p className="py-2">Don't hesitate to reach out for a deeper conversation.</p>
          <p className="py-2">
            <span className="font-bold">Email: </span>
            {config.email}
          </p>
          <p className="py-2">
            <span className="font-bold">Phone: </span>
            {config.phone}
          </p>
          <p className="py-2">
            <span className="font-bold">Location: </span>
            {config.location}
          </p>
          <a href="https://maps.app.goo.gl/PjCBnCBnViuB7HcRA" className="text-red-700 mt-3 text-2xl">
            <FaMapMarkerAlt />
          </a>
        </div>
        <div className="mt-5 md:mt-0 md:w-1/2 rounded 
                shadow-[0_10px_30px_rgba(0,0,0,0.6)] 
                transition-shadow duration-300">

        <p className="text-white text-lg md:text-xl text-center mt-2">Let’s Build Something Amazing Together!</p>
          <div className="md:w-96 p-6">            {successMessage && (
              <div className="mb-4 p-3 bg-green-600 text-white rounded text-sm">
                ✓ {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-600 text-white rounded text-sm">
                ✗ {errorMessage}
              </div>
            )}            <form onSubmit={submitForm}>
              <div className="mt-3">
                <label htmlFor="username" className="block text-base mb-2 text-white">
                  Your Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="username"
                  value={inputField.username}
                  onChange={updateValue}
                  required
                  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-800 rounded"
                />
              </div>

              <div className="mt-3">
                <label htmlFor="email" className="block text-base mb-2 text-white">
                  Your Email:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  value={inputField.email}
                  onChange={updateValue}
                  required
                  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-800 rounded"
                />
              </div>
              <div className="mt-3">
                <label className="block text-white text-base mb-2">Your Message:</label>
                <textarea
                  cols="43"
                  rows="4"
                  name="message"
                  value={inputField.message}
                  onChange={updateValue}
                  required
                  placeholder="We’d Love to Hear From You..."
                  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-800 rounded"
                ></textarea>
              </div>
              <div className="mt-3">
                <button className="px-8 py-2 rounded bg-gray-950 text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
