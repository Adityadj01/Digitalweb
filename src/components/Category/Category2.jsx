/* eslint-disable no-unused-vars */
import React from "react";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";
const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first colomn  */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end hover:scale-[105%] hover:shadow-lg duration-500">
            <div className="space-y-3">
              <div className="mb-4">
                <p className=" text-white">Enjoy</p>
                <p className="text-2xl  font-semibold">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Console
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt="image"
              className="w-[250px] absolute top-1/2 -translate-y-1/2 right-10 hover:scale-[135%] duration-500"
            />
          </div>
          {/* second colomn  */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/50 text-white rounded-3xl relative h-[320px] flex items-start hover:scale-[105%] hover:shadow-lg duration-500">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl mb-[2px] font-semibold">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Oculus
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen "}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="image"
              className="w-[200px] absolute bottom-2 right-0 
            hover:scale-[125%] hover:translate-x-[-5%] hover:translate-y-[-5%] 
            duration-500"
            />
          </div>
          {/* third colomn  */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start
            hover:scale-[105%] hover:shadow-lg duration-500"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl mb-[2px] font-semibold">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Speaker
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="image"
              className="w-[200px] absolute bottom-2 right-3 
              hover:scale-[125%] hover:translate-x-[-5%] hover:translate-y-[-5%] 
              duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
