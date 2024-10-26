"use client";

import { useState, SetStateAction } from "react";

export default function Accordion() {
  const data = [
    {
      project: "Softcash",
      title: "Product Designer",
      duration: "Sept 2024 - Present",
      description: "lorem",
    },
    {
      project: "Solgacy",
      title: "UXUI Designer",
      duration: "July 2024 - Aug 2024",
      description: "lorem",
    },
    {
      project: "Hydra",
      title: "UXUI Designer",
      duration: "Nov 2022 - March 2023",
      description: "lorem",
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
                <p className="font-medium text-[#A7AAB4] font-poppins text-[10px] lg:text-sm">{item.duration}</p>
                <span>
              {openIndex === index ? <p>-</p> : <p>+</p>}
              </span>
              </div>
            </div>
            {openIndex === index && (
              <div className="pb-3">
                <p className="font-medium text-[#A7AAB4] font-poppins text-[10px] lg:text-sm">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
