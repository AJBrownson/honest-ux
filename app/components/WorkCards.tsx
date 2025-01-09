import Image from "next/image";

import Locked from "@/public/locked.png";
import Links from "@/public/link-square-02.png";
import Rectangle from "@/public/Rectangle 1.png";

export default function WorkProjects() {
  return (
    <>
      <div className="flex justify-between space-x-2 md:space-x-4">
        <div className="w-full border border-stroke bg-bg rounded-xl p-2">
          <Image
            src={Rectangle}
            alt=""
            className="w-full h-60 md:w-60 md:h-60 object-cover rounded-lg"
          />

          <div className="mt-3 px-2">
            <p className="font-poppins text-[10px] lg:text-xs text-bodyText">
              UX, UI & Brand Design
            </p>
            <p className="text-titleText font-poppins font-semibold text-xs lg:text-base mt-1">
              Softcash Mobile Banking
            </p>
          </div>

          <div className="mt-4 mb-3 px-2 flex justify-between items-center">
            <div className="py-2 px-4 border rounded-full bg-semiBg hidden lg:block border-transparent">
              <Image src={Locked} alt="" width={20} height={20} />
            </div>
            <p className="text-softBodyText bg-semiBg font-poppins font-medium text-[11px] lg:text-xs p-2 lg:py-2 lg:px-4 w-full max-w-[158px] border-transparent rounded-full text-center">
              Under Development
            </p>
          </div>
        </div>

        <div className="w-full border border-stroke bg-bg rounded-xl p-2">
          <Image
            src={Rectangle}
            alt=""
            className="w-full h-60 md:w-60 md:h-60 object-cover rounded-lg"
          />

          <div className="mt-3 px-2">
            <p className="font-poppins text-[10px] lg:text-xs text-bodyText">
             UI Design
            </p>
            <p className="text-titleText font-poppins font-semibold text-xs lg:text-base mt-1">
            Solgacy
            </p>
          </div>

          <div className="mt-4 mb-3 px-2 flex justify-between items-center">
            <div className="py-2 px-4 border border-[#292929] rounded-3xl hidden lg:block">
              <Image src={Links} alt="" width={20} height={20} />
            </div>
            <p className="mt-4 lg:mt-0 text-bodyText font-poppins font-medium text-[11px] lg:text-xs p-2 lg:py-2 lg:px-10 w-full max-w-[158px] border border-stroke rounded-full text-center">
              Case study
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
