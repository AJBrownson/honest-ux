import Image from "next/image";
import Link from "next/link";
import Portrait from "@/public/portrait.png";
import TechStack from "./TechStack";
import Socials from "./Socials";
import Dl from "@/public/download.png";
import Dlhover from "@/public/download-hover.png";

export default function Sidebar() {
  return (
    <>
      <section className="relative bg-[#121314] flex flex-col border border-slate-700 rounded-lg px-2 pb-5 pt-2 font-poppins">
       <div className="absolute -top-16 -right-5 bg-[#1A1B1E] py-3 px-4 rounded-xl border border-[#292929]">
        <p className="text-[#E3E3E3] text-sm font-neuePower">hover <span className="text-[#A8A8A8]">to see me</span> smile!</p>
       </div>
       
        <Image
          src={Portrait}
          alt="Profile picture"
          className="w-[309px] h-auto object-contain"
        />
        <div className="flex flex-col px-2 mt-3 mb-5">
          <h1 className="text-base text-[#F9F9F9] font-semibold">Honest</h1>
          <p className="text-sm text-[#A7AAB4] font-medium">Product Designer</p>
        </div>
        <div className="flex flex-col gap-y-3 px-2">
          <Link
            href="https://docs.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button className="group text-[#A7AAB4] hover:text-[#F9F9F9] font-poppins text-sm font-medium w-full flex justify-between items-center py-2 px-4 gap-x-2 border border-[#2F3037] hover:bg-[#474853] rounded-full">
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
