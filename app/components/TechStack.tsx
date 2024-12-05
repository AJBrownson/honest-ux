import Image from "next/image";

import PS from "@/public/adobe-photoshop.svg";
import AI from "@/public/illustrator.png";
import Figma from "@/public/figma.svg";
import GPT from "@/public/chatgpt.png";

export default function TechStack() {
  return (
    <>
      <h1 className="text-titleText font-poppins font-medium text-xs">
        Tech Stack
      </h1>

      <div className="mt-2">
        <div className="w-full inline-flex flex-nowrap overflow-hidden lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(10%-20px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-1 lg:[&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <Image src={Figma} alt="" className="w-8 h-8 object-contain" />
            </li>
            <li>
              <Image src={GPT} alt="" className="w-8 h-8 object-contain" />
            </li>
            <li>
              <Image src={AI} alt="" className="w-8 h-8 object-contain" />
            </li>
            <li>
              <Image src={PS} alt="" className="w-8 h-8 object-contain" />
            </li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-1 lg:[&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <Image src={Figma} alt="" className="w-8 h-8 object-contain" />
            </li>
            <li>
              <Image src={GPT} alt="" className="w-8 h-8 object-contain" />
            </li>
            <li>
              <Image src={AI} alt="" className="w-8 h-8 object-contain" />
            </li>
            <li>
              <Image src={PS} alt="" className="w-8 h-8 object-contain" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
