import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Image1 from "@/public/Image1.png";
import Image2 from "@/public/Image2.png";
import Image2Mobile from "@/public/Image2-mobile.png";
import Image3 from "@/public/Image3.png";
import Dl from "@/public/download.png";
import Accordion from "@/app/components/Accordion";

export const metadata: Metadata = {
  title: "About Me",
};

export default function About() {
  return (
    <main className="px-6 lg:px-24 pt-24 pb-[156px] lg:pb-32 bg-semiBg">
      <section>
        <p className="text-bodyText text-[10px] md:text-xs font-poppins font-medium">
          Dieter Rams
        </p>
        <p className="font-neuePower text-xl lg:text-3xl text-titleText">
          Good Design is Long Lasting
        </p>
      </section>

      <section className="mt-10 lg:mt-5 flex flex-col lg:flex-row justify-between items-center lg:gap-x-12">
        <Image
          src={Image1}
          alt="Honest sitting in a bar with arms crossed"
          className="lg:w-[288px] lg:h-[224px] object-contain"
        />

        <div className="lg:order-first mt-10 lg:mt-0 flex flex-col gap-y-3 font-poppins font-medium">
          <p className="text-titleText text-xs lg:text-sm">My Story</p>
          <p className="text-xs lg:text-sm text-bodyText tracking-wide leading-tight">
            I was born and raised in Abuja, Nigeria. Growing up, I was an active
            kid into sports, making crafts, sketching and of course, trying new
            foods! Oh, wait… did I forget to mention I love food? My bad! 😂
            <br />
            Since I was little, I&apos;ve always loved spicy meals. So, if you ever
            want to catch my attention, just invite me for a spicy lunch. That&apos;s
            my weakness!
          </p>
        </div>
      </section>

      <section className="mt-20 lg:mt-16 flex flex-col lg:flex-row justify-between items-center lg:gap-x-16">
        <Image
          src={Image2}
          alt="Honest working on his laptop"
          className="hidden lg:block lg:w-[336px] lg:h-[400px] object-contain"
        />
        <Image
          src={Image2Mobile}
          alt="Honest working on his laptop"
          className="lg:hidden"
        />
        <div className="lg:order-last mt-10 lg:mt-0 flex flex-col gap-y-3 font-poppins font-medium">
          <p className="text-titleText text-xs lg:text-sm">
            How Design Won Me Over
          </p>
          <p className="text-xs lg:text-sm text-bodyText tracking-wide leading-tight">
            In 2021, I joined my school&apos;s internship program and tried
            everything from coding, data analysis, and even cyber security.
            Honestly, I was just throwing things around to see what stuck. But
            that same year, design caught my eye, probably because I&apos;ve always
            loved art.
          </p>
          <p className="pt-1 text-xs lg:text-sm text-bodyText tracking-wide leading-tight">
            One day, I stumbled upon a Figma post filled with threads labeled
            #design. Curious, I dove in and found myself solving user problems
            by dragging shapes around. It was a bit strange, but I loved it!{" "}
          </p>
          <p className="pt-1 text-xs lg:text-sm text-bodyText tracking-wide leading-tight">
            When my internship ended, I realized design was my path. I took some
            Udemy courses (thanks, Dan Walter Scott!) and spent the last two
            years improving my skills and getting quick with the tools.
          </p>
        </div>
      </section>

      <section className="mt-20 lg:mt-16 flex flex-col lg:flex-row justify-between items-center lg:gap-x-16">
        <Image
          src={Image3}
          alt="Honest working on his laptop"
          className="lg:w-[336px] lg:h-[372px] object-contain"
        />
        <div className="lg:order-first mt-10 lg:mt-0 flex flex-col gap-y-3 font-poppins font-medium">
          <p className="text-titleText text-xs lg:text-sm">
            When I&apos;m Not Designing
          </p>
          <p className="text-xs lg:text-sm text-bodyText tracking-wide leading-tight">
            In my free time, you&apos;ll catch me jamming to my favorite playlist,
            brainstorming new ideas, and keeping up with the latest design
            trends. Gotta keep things fresh! Right now, I&apos;m diving into motion
            design and Web3 design. Who knew design could be so lively?
          </p>
          <p className="pt-1 text-xs lg:text-sm text-bodyText tracking-wide leading-tight">
            When I&apos;m not designing, you&apos;ll find me watching movies, hitting the
            gym (trying to balance all those snacks), and staying updated on
            what&apos;s new in the design world. After all, I can&apos;t let my creativity
            go flat!{" "}
          </p>
          <p className="text-xs lg:text-sm text-titleText tracking-wide leading-tight">
            Thanks for taking a peek into my world!
          </p>
        </div>
      </section>

      <section className="mt-16 lg:mt-20">
        <p className="text-titleText text-xl lg:text-3xl font-neuePower mb-6">
          My Work Experience
        </p>
        <Accordion />

        <div className="mt-6 lg:hidden">
          <Link
            href="https://docs.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button className="bg-bg text-titleText font-poppins text-xs font-medium w-full flex justify-center items-center py-2 px-4 gap-x-2 border border-[#4A4A4A] rounded-full">
              View Resume
              <Image src={Dl} alt="Download" className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
