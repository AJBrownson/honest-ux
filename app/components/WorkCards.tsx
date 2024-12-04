import Image from "next/image";
import Link from "next/link";

import Locked from "@/public/locked.png";
import Links from "@/public/link-square-02.png";
import Rectangle from "@/public/Rectangle 1.png";

export default function WorkProjects() {
  const data = [
    {
      tag: "UX, UI & Brand Design",
      name: "Softcash Mobile Banking",
      status: "Under Development",
      icon: Locked,
    },
    {
      tag: "UI Design",
      name: "Solgacy",
      status: "Case Study",
      icon: Links,
    },
  ];

  return (
    <>
      {/* <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        {data.map((item, index) => (
          <div key={index} className="flex-1">
            <div className="w-full border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <div className="bg-[#D1D1D2] w-[242px] h-[224px] rounded-lg"></div>
              <div className="mt-3 px-2">
                <p className="font-poppins text-[10px] lg:text-xs text-[#A7AAB4]">
                  {item.tag}
                </p>
                <p className="text-[#F9F9F9] font-poppins font-semibold text-xs lg:text-base">
                  {item.name}
                </p>
              </div>
              <div className="my-3 px-2 flex justify-between items-center">
                <div className="p-2 border rounded-full bg-[#171717]">
                  <Image src={item.icon} alt="" width={20} height={20} />
                </div>
                <p className="text-[#A7AAB4] bg-[#171717] font-poppins font-medium text-[10px] lg:text-[11px] p-2 border rounded-full text-center">
                  {item.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="flex justify-between space-x-2 md:space-x-4">
        <div className="w-full border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
          <Image
            src={Rectangle}
            alt=""
            className="w-full h-60 md:w-60 md:h-60 object-cover rounded-lg"
          />

          <div className="mt-3 px-2">
            <p className="font-poppins text-[10px] lg:text-xs text-[#A7AAB4]">
              UX, UI & Brand Design
            </p>
            <p className="text-[#F9F9F9] font-poppins font-semibold text-xs lg:text-base mt-1">
              Softcash Mobile Banking
            </p>
          </div>

          <div className="mt-4 mb-3 px-2 flex justify-between items-center">
            <div className="py-2 px-4 border rounded-full bg-[#171717] hidden lg:block border-transparent">
              <Image src={Locked} alt="" width={20} height={20} />
            </div>
            <p className="text-[#8A8A8A] bg-[#171717] font-poppins font-medium text-[11px] lg:text-xs p-2 lg:py-2 lg:px-4 w-full max-w-[158px] border-transparent rounded-full text-center">
              Under Development
            </p>
          </div>
        </div>

        <div className="w-full border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
          <Image
            src={Rectangle}
            alt=""
            className="w-full h-60 md:w-60 md:h-60 object-cover rounded-lg"
          />

          <div className="mt-3 px-2">
            <p className="font-poppins text-[10px] lg:text-xs text-[#A7AAB4]">
             UI Design
            </p>
            <p className="text-[#F9F9F9] font-poppins font-semibold text-xs lg:text-base mt-1">
            Solgacy
            </p>
          </div>

          <div className="mt-4 mb-3 px-2 flex justify-between items-center">
            <div className="py-2 px-4 border border-[#292929] rounded-3xl hidden lg:block">
              <Image src={Links} alt="" width={20} height={20} />
            </div>
            <p className="mt-4 lg:mt-0 text-[#A8A8A8] font-poppins font-medium text-[11px] lg:text-xs p-2 lg:py-2 lg:px-10 w-full max-w-[158px] border border-[#292929] rounded-full text-center">
              Case study
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
