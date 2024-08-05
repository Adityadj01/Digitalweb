/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    id: 1,
    title: "How to use a Smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    published: "Dec 12, 2022 By Garry Andy Newman Dave",
    image: Img1,
  },
  {
    id: 2,
    title: "Daily life Electronics",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    published: "Dec 12, 2022 By Garry Andy Newman Dave",
    image: Img2,
  },
  {
    id: 3,
    title: "How To Choose Perfect VR Headset",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    published: "Dec 12, 2022 By Garry Andy Newman Dave",
    image: Img3,
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header Section */}
        <Heading title="Latest News" subtitle="Explore Our Articles" />

        {/* Blog Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card */}
          {BlogData.map((data) => (
            <div key={data.id} className="bg-white dark:bg-gray-900">
              <div className="overflow-hidden rounded-xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[180px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
                {/* Content Button */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-500">{data.published}</p>
                  <p className="font-bold line-clamp-1">{data.title}</p>
                  <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400 ">{data.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
