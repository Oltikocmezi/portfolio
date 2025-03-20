import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const info = [
  {
    url: "mailto:oltikocmezii@gmail.com",
    img: <IoIosMail className="text-blue-400 text-2xl md:text-3xl" />,
    title: "Email",
    subtitle: "Oltikocmezii@gmail.com",
  },
  {
    url: "https://www.linkedin.com/in/olt-ko%C3%A7mezi-3381a8249/",
    img: <FaLinkedin className="text-blue-400 text-2xl md:text-3xl" />,
    title: "Linkedin",
    subtitle: "Oltikocmezi",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Olt",
      from_name: e.target.name.value,
      message: e.target.message.value,
      email: e.target.email.value,
    };

    emailjs
      .send(
        "service_rel4a8e",
        "template_6bmy68b",
        templateParams,
        "r0wTqud3t_ELjo8WQ"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="Contact"
      className="w-full h-full flex flex-col mt-6 items-center"
    >
      <p className="text-xl text-gray-400 font-sans">Get In Touch</p>
      <p className="text-4xl text-blue-400 mt-2 font-medium font-sans">
        Contact Me
      </p>
      <div className="w-full h-[60vh] flex justify-center ">
        <form
          className="flex flex-col justify-between items-center w-full h-full py-8"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            className="bg-transparent border border-blue-300 rounded-lg pl-4 w-72 md:w-1/3 py-4 text-left"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className="bg-transparent border border-blue-300 rounded-lg pl-4 w-72 md:w-1/3 py-4 text-left"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="bg-transparent border border-blue-300 rounded-lg pl-4 w-72 md:w-1/3 py-4 text-left"
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button
            className="border w-64 hover:border-blue-900 border-blue-400 hover:bg-blue-900 duration-500 px-3 py-3 sm:px-6 sm:py-4 text-blue-400 text-lg sm:text-xl font-sans font-medium rounded-lg"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex flex-wrap justify-center w-full h-[60vh] md:h-[40vh]">
        {info.map((item, index) => {
          return (
            <a key={index} href={item.url} className="px-6">
              <div className="w-48 h-48 md:w-64 md:h-52 border border-blue-700/20 bg-blue-700/20 backdrop-blur-sm hover:border-blue-700 cursor-pointer hover:backdrop-blur-none hover:bg-transparent hover:duration-500 rounded-xl flex flex-col justify-center items-center">
                {item.img}
                <p className="font-sans text-white font-medium md:text-2xl mt-4">
                  {item.title}
                </p>
                <p className="font-sans text-gray-200 md:text-md mt-4">
                  {item.subtitle}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
