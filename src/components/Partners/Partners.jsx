/* eslint-disable no-unused-vars */
import React from "react";
import brand1 from "../../assets/brand/br-1.png";
import brand2 from "../../assets/brand/br-2.png";
import brand3 from "../../assets/brand/br-3.png";
import brand4 from "../../assets/brand/br-4.png";

/**
 * Partners component displays a grid of partner logos.
 *
 * @returns {JSX.Element} The Partners component.
 */
const Partners = () => {
  return (
    // Container for the grid of partner logos
    <div className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10">
      <div className="container">
        {/* Grid layout for partner logos */}
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-50 ">
          {/* Display the first partner logo */}
          <img src={brand1} alt="Brand" className="w-[80px] dark:invert" />
          {/* Display the second partner logo */}
          <img src={brand2} alt="Brand" className="w-[80px] dark:invert" />
          {/* Display the third partner logo */}
          <img src={brand3} alt="Brand" className="w-[80px] dark:invert" />
          {/* Display the fourth partner logo */}
          <img src={brand4} alt="Brand" className="w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
