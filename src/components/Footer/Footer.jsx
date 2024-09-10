/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Detail */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              id vero ab recusandae totam.
            </p>
            <p className="text-gray-500 mt-4">Made With 💖 by Aditya</p>
            <a
              href="https://github.com/Adityadj01"
              target="blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full hover:scale-105 duration-300 "
            >
              Visit GitHub
            </a>
          </div>
          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Address links
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>XXXX, XXXXX</p>
                  <p>XxXxXxX</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+XX XXX XXX XXXX</p>
                </div>
                {/* Social Links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <FaInstagram className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
