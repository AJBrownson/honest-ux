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
