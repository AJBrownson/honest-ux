import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Note from "@/public/note.png";
import PersonalProjects from "@/app/components/PersonalCards";
import WorkProjects from "@/app/components/WorkCards";
import WorkspaceCarousel from "@/app/components/Carousel";
import Testimonials from "@/app/components/Testimonials";

export const metadata: Metadata = {
  title: "My Work",
};

export default function Work() {
  return (
    <main className="px-6 lg:px-24 pb-20 lg:pb-16 pt-24 bg-semiBg">
      <section className="flex flex-col">
        <h1 className="text-titleText text-xl lg:text-3xl font-neuePower">
          Work
        </h1>
        <p className="mt-3 font-poppins text-[10px] lg:text-sm font-medium text-bodyText">
          A handpicked showcase of my latest projects
        </p>

        <div className="mt-6 flex">
          <WorkProjects />
        </div>
      </section>

      <section className="mt-20 lg:mt-10">
        <span className="flex space-x-5 lg:space-x-7">
          <h1 className="text-titleText text-xl lg:text-3xl font-neuePower">
            Personal Projects
          </h1>
          <span className="flex items-center gap-x-2">
            <Image src={Note} alt="" className="w-4 h-4 lg:w-5 lg:h-5" />
            <p className="text-[#FFEB3B] font-poppins font-medium text-[10px] lg:text-sm">
              Case studies
            </p>
          </span>
        </span>

        <p className="mt-3 font-poppins text-[10px] lg:text-sm font-medium text-bodyText">
          A handpicked collection of my creative projects
        </p>
        <div className="mt-6 flex">
          <PersonalProjects />
        </div>
      </section>

      <section className="mt-20 lg:mt-10">
        <h1 className="text-titleText text-xl lg:text-3xl font-neuePower">
          My Workspace
        </h1>
        <p className="mt-3 font-poppins text-[10px] lg:text-sm font-medium text-bodyText">
          Here, I learn, experiment with designs, and try out new ideas.
        </p>

        <div className="mt-6 flex">
          <WorkspaceCarousel />
        </div>
      </section>

      <section className="mt-20 lg:mt-10">
        <h1 className="text-titleText text-xl lg:text-3xl font-neuePower">
          Testimonials
        </h1>
        <p className="my-3 font-poppins text-[10px] lg:text-sm font-medium text-bodyText">
          Here are thoughts from those I've worked with
        </p>
        <Testimonials />
      </section>
    </main>
  );
}
