"use client";

import Image from "next/image";
import { useState, SetStateAction } from "react";

import ArrowUp from "@/app/public/arrow-up.png";
import ArrowDown from "@/app/public/arrow-down.png";

export default function Accordion() {
  const data = [
    {
      project: "Softcash",
      title: "Product Designer",
      duration: "Sept 2024 - Present",
      description:
        "For the SofCash fintech product, I single handedly developed the brand identity, conducted user research, designed the mobile app interface, and created the marketing landing page. This work ensured a strong visual presence and effective user experience.",
    },
    {
      project: "Solgacy",
      title: "UXUI Designer",
      duration: "July 2024 - Aug 2024",
      description:
        "For Solgacy, a web3 roulette platform for stakers, I designed the user interface after researching web3 operations. I aimed to create a simple and engaging experience for users.",
    },
    {
      project: "Hydra",
      title: "UXUI Designer",
      duration: "Nov 2022 - March 2023",
      description:
        "I worked with a design team to gather user feedback for the Hydra app. I created user flows, wireframes, and prototypes, and designed user-friendly interfaces. I also collaborated with developers and stakeholders to ensure our designs were effective and met technical requirements.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: number | SetStateAction<null>) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <>
      <div className="w-full mx-auto">
        {data.map((item, index) => (
          <div key={index} className=" border-b-[1px] border-stroke">
            <div
              className={`py-4 flex justify-between items-center cursor-pointer ${
                openIndex === index
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex flex-col gap-y-1">
                <p className="text-[#F9F9F9] font-poppins font-semibold text-xs lg:text-base">
                  {item.project}
                </p>
                <p className="font-medium text-[#A7AAB4] font-poppins text-[10px] lg:text-sm">
                  {item.title}
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <p className="font-medium text-[#A7AAB4] font-poppins text-[10px] lg:text-sm">
                  {item.duration}
                </p>
                <span>{openIndex === index ? <Image src={ArrowUp} alt="" className="w-4 h-4" /> : <Image src={ArrowDown} alt="" className="w-4 h-4" />}</span>
              </div>
            </div>
            {openIndex === index && (
              <div className="pb-3">
                <p className="font-medium text-[#A7AAB4] font-poppins text-[10px] lg:text-sm">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
