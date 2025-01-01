"use client"
import { useState } from "react";
import Image from "next/image";
import Rectangle from "@/public/Rectangle 1.png";

const testimonials = [
  {
    image: Rectangle,
    text: "Learn UI",
  },
  {
    image: Rectangle,
    text: "Duolingo UI",
  },
  {
    image: Rectangle,
    text: "Web3 UI",
  },
];

export default function WorkspaceCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      {/* <div className="w-[80%]">
        <div className="w-full inline-flex flex-nowrap overflow-hidden lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(10%-20px),transparent_100%)]">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-1 lg:[&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start [&_li]:mx-1 lg:[&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
        <Image
          src={Rectangle}
          alt=""
          className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
        />
        <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">
          Learn UI
        </p>
      </div> */}

      <div
        className="relative w-full max-w-4xl mx-auto py-12 p-6 rounded-lg shadow-lg bg-gray-50">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)`}}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full p-8">
                <div
                  className="bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 p-6"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt=""
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold text-center text-gray-800"
                  >
                    {testimonial.text}
                  </h3>
                  <p
                    className="text-center text-sm font-semibold text-gray-500"
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                current === index ? "bg-green-600" : "bg-gray-300"
              } transition-all duration-300`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

        {/* Previous button */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            className="p-2 bg-green-500 hover:bg-green-600  text-white rounded-full transition-colors duration-300"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* Next button */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-300"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
