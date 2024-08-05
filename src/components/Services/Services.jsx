/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";
const ServiceData = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Free Shipping on all order",
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
  },
  {
    id: 2,
    title: "24/7 Support",
    description: "Technical support 24/7.",
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
  },
  {
    id: 3,
    title: "Easy Returns",
    description: "30 days return policy.",
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
  },
  {
    id: 4,
    title: "Secure Payment",
    description: "All payment are secured and trusted.",
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
  },
];

const Services = () => {
  return (
    <div>
      <div className="container mt-14 md:mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center sm:flex-row gap-4 "
            >
              {data.icon}
              <div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
