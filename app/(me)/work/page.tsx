import Image from "next/image";
import Link from "next/link";

import Star from "@/app/public/Star 1.png";
import PersonalProjects from "@/app/components/PersonalCards";
import WorkProjects from "@/app/components/WorkCards";
import WorkspaceCarousel from "@/app/components/Carousel";

export default function Work() {
  return (
    <main className="lg:px-10 pb-20 lg:pb-16">
      <section className="flex flex-col">
        <h1 className="text-[#F9F9F9] text-xl lg:text-3xl font-neuePower">
          My Work Experience
        </h1>
        <p className="mt-3 font-poppins text-[10px] lg:text-sm font-medium text-[#A7AAB4]">
          A handpicked showcase of my latest projects
        </p>

        <div className="mt-6 flex">
          <WorkProjects />
        </div>
      </section>

      <section className="mt-20 lg:mt-10">
        <span className="flex justify-between items-center">
          <h1 className="text-[#F9F9F9] text-xl lg:text-3xl font-neuePower">
            Personal Projects
          </h1>
          <span className="flex items-center gap-x-2">
            <Image src={Star} alt="" />
            <p className="text-[#FFEB3B] font-poppins font-medium text-[10px] lg:text-sm">
              Case studies
            </p>
          </span>
        </span>

        <p className="mt-3 font-poppins text-[10px] lg:text-sm font-medium text-[#A7AAB4]">
          A handpicked collection of my creative projects
        </p>
        <div className="mt-6 flex">
          <PersonalProjects />
        </div>
      </section>

      <section className="mt-20 lg:mt-10">
        <h1 className="text-[#F9F9F9] text-xl lg:text-3xl font-neuePower">
          My Workspace
        </h1>
        <p className="mt-3 font-poppins text-[10px] lg:text-sm font-medium text-[#A7AAB4]">
          Here, I learn, experiment with designs, and try out new ideas.
        </p>

        <div className="mt-6 flex">
          <WorkspaceCarousel />
        </div>
      </section>

      <section className="mt-20 lg:mt-10">
        <h1 className="text-[#F9F9F9] text-xl lg:text-3xl font-neuePower">
          Testimonials
        </h1>
        <p className="mt-3 font-poppins text-[10px] lg:text-sm font-medium text-[#A7AAB4]">
          Here are thoughts from those I've worked with
        </p>
      </section>
    </main>
  );
}
