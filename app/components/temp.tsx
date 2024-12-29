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








import Image from "next/image";
import Steve from "@/public/steve.svg";
import Brown from "@/public/brown.svg";
import Morgan from "@/public/justus.svg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mr Morgan",
      role: "CEO Fitgeng",
      image: Morgan,
      quote:
        "Working with Honest was a game-changer for our project. His creativity and attention to detail exceeded our expectations! I'm glad I met you. Thank you.",
    },
    {
      name: "Mr Steve",
      role: "Manager",
      image: Steve,
      quote:
        "Working with Honest was a game-changer for our project. His creativity and attention to detail exceeded our expectations! I'm glad I met you. Thank you.",
    },
    {
      name: "Mr Brown",
      role: "Manager Phonecity",
      image: Brown,
      quote:
        "Working with Honest was a game-changer for our project. His creativity and attention to detail exceeded our expectations! I'm glad I met you. Thank you.",
    },
  ];

  return (
    <>
      {/* <div className="flex space-x-4 overflow-x-auto font-poppins">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-bg border border-stroke rounded-lg space-x-4"
        >
          <div className="w-full max-w-[515px] flex flex-col lg:flex-row">
          <div className="w-[32%] lg:border-r-[1px] border-r-stroke flex flex-col items-center">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={70}
              height={70}
              className="rounded-full"
            />
             <span className="flex flex-col items-center">
            <p className="text-titleText font-bold font-poppins text-xs md:text-sm">{testimonial.name}</p>
            <p className="text-bodyText font-poppins text-[10px] md:text-xs mt-1">{testimonial.role}</p>
          </span>
            </div>

            <div className="lg:px-6 w-full max-w-[325px]">
            <p className="font-poppins font-medium text-5xl lg:text-7xl lg:mt-8">
              “
            </p>
            <p className="font-poppins font-medium text-bodyText text-sm lg:text-[15px] max-w-[277px]">
              “{testimonial.quote}”
            </p>
          </div>
        </div>
        </div>
      ))}
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-white rounded-full">←</button>
        <button className="p-2 bg-white rounded-full">→</button>
      </div>
    </div> */}

      {/* <div className="flex space-x-4 overflow-x-auto">
        <div className="bg-bg flex flex-col lg:flex-row w-full max-w-[515px] border border-stroke py-4 rounded-xl">
          <div className="w-[32%] lg:border-r-[1px] border-r-stroke flex flex-col items-center">
            <Image
              src={Morgan}
              alt=""
              className="rounded-full w-8 h-8 lg:w-20 lg:h-20 mb-4 lg:mt-2"
            />
            <span className="flex flex-col items-center">
              <p className="text-titleText font-bold font-poppins text-xs md:text-sm">
                Mr Morgan
              </p>
              <p className="text-bodyText font-poppins text-[10px] md:text-xs mt-1">
                CEO Fitgeng
              </p>
            </span>
          </div>

          <div className="lg:px-6 w-full max-w-[325px]">
            <p className="font-poppins font-medium text-5xl lg:text-7xl lg:mt-8">
              “
            </p>
            <p className="font-poppins font-medium text-bodyText text-sm lg:text-[15px] max-w-[277px]">
              Working with Honest was a game-changer for our project. His
              creativity and attention to detail exceeded our expectations! I’m
              glad i met you Thank you.
            </p>
          </div>
        </div>

        <div className="bg-bg flex flex-col lg:flex-row w-full max-w-[515px] border border-stroke py-4 rounded-xl">
          <div className="w-[32%] lg:border-r-[1px] border-r-stroke flex flex-col items-center">
            <Image
              src={Steve}
              alt=""
              className="rounded-full w-8 h-8 lg:w-20 lg:h-20 mb-4 lg:mt-2"
            />
            <span className="flex flex-col items-center">
              <p className="text-titleText font-bold font-poppins text-xs md:text-sm">
                Mr Steve
              </p>
              <p className="text-bodyText font-poppins text-[10px] md:text-xs mt-1">
                Manager
              </p>
            </span>
          </div>

          <div className="lg:px-6 w-full max-w-[325px]">
            <p className="font-poppins font-medium text-5xl lg:text-7xl lg:mt-8">
              “
            </p>
            <p className="font-poppins font-medium text-bodyText text-sm lg:text-[15px] max-w-[277px]">
              Working with Honest was a game-changer for our project. His
              creativity and attention to detail exceeded our expectations! I’m
              glad i met you Thank you.
            </p>
          </div>
        </div>

        <div className="bg-bg flex flex-col lg:flex-row w-full max-w-[515px] border border-stroke py-4 rounded-xl">
          <div className="w-[32%] lg:border-r-[1px] border-r-stroke flex flex-col items-center">
            <Image
              src={Brown}
              alt=""
              className="rounded-full w-8 h-8 lg:w-20 lg:h-20 mb-4 lg:mt-2"
            />
            <span className="flex flex-col items-center">
              <p className="text-titleText font-bold font-poppins text-xs md:text-sm">
                Mr Brown
              </p>
              <p className="text-bodyText font-poppins text-[10px] md:text-xs mt-1">
              Manager Phonecity
              </p>
            </span>
          </div>

          <div className="lg:px-6 w-full max-w-[325px]">
            <p className="font-poppins font-medium text-5xl lg:text-7xl lg:mt-8">
              “
            </p>
            <p className="font-poppins font-medium text-bodyText text-sm lg:text-[15px] max-w-[277px]">
              Working with Honest was a game-changer for our project. His
              creativity and attention to detail exceeded our expectations! I’m
              glad i met you Thank you.
            </p>
          </div>
        </div>
      </div> */}

      <Carousel className="w-full max-w-xl font-poppins">
        <CarouselContent className="-ml-1 -z-40">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 basis-[80%]">
              <div className="p-1 flex">

                <div className="bg-bg flex flex-col lg:flex-row w-full lg:w-[650px] border border-stroke py-4 rounded-xl px-4 lg:px-0">
                  <div className="w-full lg:w-[32%] border-b-[1px] border-b-stroke lg:border-b-0 lg:border-r-[1px] border-r-stroke flex flex-col items-center">
                    <Image
                      src={Morgan}
                      alt=""
                      className="rounded-full w-8 h-8 lg:w-20 lg:h-20 mb-4 lg:mt-2"
                    />
                    <span className="flex flex-col items-center">
                      <p className="text-titleText font-bold font-poppins text-xs md:text-sm">
                        Mr Morgan
                      </p>
                      <p className="text-bodyText font-poppins text-[10px] md:text-xs mt-1">
                        CEO Fitgeng
                      </p>
                    </span>
                  </div>

                  <div className="px-3 lg:px-6 w-full max-w-[325px]">
                    <p className="font-poppins font-medium text-5xl lg:text-7xl lg:mt-8 text-titleText">
                      “
                    </p>
                    <p className="font-poppins font-medium text-bodyText text-sm lg:text-[15px] max-w-[277px]">
                      Working with Honest was a game-changer for our project.
                      His creativity and attention to detail exceeded our
                      expectations! I’m glad i met you Thank you.
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:flex justify-end space-x-3 pt-10">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
}
