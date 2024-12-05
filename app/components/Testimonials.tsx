import Image from "next/image";
import Steve from "@/public/steve.svg";
import Brown from "@/public/brown.svg";
import Morgan from "@/public/justus.svg";

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
          className="flex flex-col md:flex-row bg-bg border border-stroke rounded-lg p-6 space-x-4"
        >
          <div className="w-[296px] lg:max-w-[515px] bg-red-500">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={70}
              height={70}
              className="rounded-full"
            />
            <p className="text-white font-bold">{testimonial.name}</p>
            <p className="text-[#A7AAB4]">{testimonial.role}</p>
          </div>
          <div>
            <p className="text-bodyText font-poppins font-medium text-xs md:text-sm mt-3">
              “{testimonial.quote}”
            </p>
          </div>
        </div>
      ))}
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-white rounded-full">←</button>
        <button className="p-2 bg-white rounded-full">→</button>
      </div>
    </div> */}
    <div className="flex space-x-4 overflow-x-auto">
      <div className="bg-bg">
        <div className="">
        <div className="w-[296px] lg:max-w-[515px]">
            <Image
              src={Morgan}
              alt=""
              width={70}
              height={70}
              className="rounded-full"
            />
            <p className="text-titleText font-bold font-poppins text-xs md:text-sm">Mr Morgan</p>
            <p className="text-bodyText font-poppins text-[10px] md:text-xs">CEO Fitgeng</p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
