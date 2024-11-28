import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const config = {
    email: "romansathish3337@gmail.com",
    phone: "9025464168",
    location: "Krishnagiri",
  };

  // Initial input field values
  const input = { username: "", email: "", message: "" };
  const [inputField, setInputField] = useState(input);

  const updateValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputField({ ...inputField, [name]: value }); 
  };

  const submitForm = (e) => {
    e.preventDefault();
    const serviceId = "service_nzkedk3";
    const templateId = "template_wf0bnpk";
    const publicKey = "mg0YDqIUhsbZ3n86J";
  
    const templateParams = {
      to_name: "Sathish",
      from_name: inputField.username,
      user_email: inputField.email,
      message: inputField.message,
    };
  
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Thank you! Your message has been delivered", response);
        alert("Thank you! Your message has been delivered");
        setInputField({ username: "", email: "", message: "" }); 
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Unable to send your message. Kindly retry");
      });
  };
  

  return (
    <section className="bg-gray-800 px-5 py-5 md:py-24" id="contact">
      <h1 className="text-white text-4xl border-b-4 border-white w-[140px] mx-auto mb-5 font-bold text-center">
        Contact
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col items-center justify-center text-white">
          <p className="py-2">Feel free to contact me for a more detailed discussion.</p>
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
          <a href="/" className="text-red-700 ms-2 text-2xl">
            <FaMapMarkerAlt />
          </a>
        </div>
        <div className="md:w-1/2 shadow-2xl rounded">
          <p className="text-white text-xl text-center">Let’s Build Something Amazing Together!</p>
          <div className="md:w-96 p-6">
            <form onSubmit={submitForm}>
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
