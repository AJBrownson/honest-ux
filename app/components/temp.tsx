import Image from "next/image";
import Link from "next/link";
import Portrait from "@/public/portrait.png";
import PortraitHover from "@/public/portrait-hover.png";
import TechStack from "./TechStack";
import Socials from "./Socials";
import Dl from "@/public/download.png";
import Dlhover from "@/public/download-hover.png";

export default function Sidebar() {
  return (
    <>
      <section className="relative bg-bg flex flex-col border border-stroke rounded-lg px-2 pb-5 pt-2 font-poppins">
        <div className="absolute -top-14 -right-5 bg-[#1A1B1E] py-3 px-4 rounded-xl border border-stroke animate-bounce">
          <p className="text-titleText text-sm font-neuePower">
            hover <span className="text-bodyText">to see me</span> smile!
          </p>
          <div className="absolute -z-20 left-10 bottom-2 translate-x-[-50%] translate-y-full w-4 h-4 bg-[#1A1B1E] border-l border-b border-stroke rotate-45"></div>
        </div>

        <div className="relative group">
          <Image
            src={Portrait}
            alt="Profile picture"
            className="w-[309px] h-auto object-contain absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <Image
            src={PortraitHover}
            alt="Hover"
            className="w-[309px] h-auto object-contain absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />

          <div className="">
            <h1 className="mt-64 left-2 text-sm text-titleText font-semibold font-poppins absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
              Honest
            </h1>
            <p className="mt-[17.5rem] left-2 text-xs text-bodyText font-medium font-poppins absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
              Product Designer
            </p>

            <h1 className="mt-64 left-2 text-sm text-titleText font-semibold font-poppins absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              'Onest
            </h1>
            <p className="mt-[17.5rem] left-2 text-xs text-bodyText font-medium font-poppins absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              Caught you! Here's my smile
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 px-2 mt-80">
          <Link
            href="https://docs.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button className="group text-bodyText hover:text-titleText font-poppins text-xs font-medium w-full flex justify-between items-center py-2 px-4 gap-x-2 border border-stroke hover:bg-[#474853] rounded-full">
              View Resume
              <div className="relative">
                <Image src={Dl} alt="Download" className="w-6 h-6" />
                <Image
                  src={Dlhover}
                  alt="Download hover"
                  className="absolute top-0 left-0 w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </button>
          </Link>

          <div className="bg-[#1A1B1E] flex flex-col gap-y-1 py-2 px-4 rounded-xl mt-2">
            <TechStack />
            <Socials />
          </div>
        </div>
      </section>
    </>
  );
}
