/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Detail */}
          <div>
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum id vero ab recusandae totam.
            </p>
            <p className="text-gray-500 mt-4">
                Made With 💖 by MuchaFuuker
            </p>
            <a
            href="https://github.com/Adityadj01" target="blank" 
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full hover:scale-105 duration-300 "
            >
                Visit GitHub
            </a>
          </div>
          {/* Footer Links */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
