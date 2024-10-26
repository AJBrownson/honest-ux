import Image from "next/image";
import Link from "next/link";
import Portrait from "../public/portrait.png";
import TechStack from "./TechStack";
import Socials from "./Socials";


export default function Sidebar() {
  return (
    <>
      <section className="flex flex-col gap-5 border border-slate-700 rounded-lg px-2 pt-2 pb-5 font-poppins">
        <Image src={Portrait} alt="Profile picture" className="w-[309px] h-[280px] object-contain" />
        <div className="flex flex-col px-3">
          <h1 className="text-base text-[#F9F9F9] font-semibold">Honest</h1>
           <p className="text-sm text-[#A7AAB4] font-medium">
            Product Designer
          </p>
        </div>
        <div className="flex flex-col gap-y-3 px-3">
          <Link
            href="https://docs.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center py-2 px-4 gap-x-2 border border-[#2F3037] rounded-full"
          >
          
            <p className="text-[#A7AAB4] font-poppins text-sm font-medium">View Resume</p>
            <p>+</p>
          </Link>

          <div className="bg-[#1A1B1E] flex flex-col gap-y-4 py-2 px-4 rounded-xl">
            <TechStack />
            <Socials />
          </div>
        </div>
      </section>
    </>
  );
}
