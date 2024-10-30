import Image from "next/image";
import Steve from "@/app/public/steve.svg"
import Brown from "@/app/public/brown.svg"
import Justus from "@/app/public/justus.svg"


export default function Testimonials() {
  const testimonials = [
    {
        name: "Mr Morgan",
        role: "CEO Fitgeng",
        image: "/public/portrait.png",
        quote:
          "Working with Honest was a game-changer for our project. His creativity and attention to detail exceeded our expectations! I'm glad I met you. Thank you.",
      },
    {
      name: "Mr Steve",
      role: "Manager",
      image: "/public/steve.svg",
      quote:
        "Working with Honest was a game-changer for our project. His creativity and attention to detail exceeded our expectations! I'm glad I met you. Thank you.",
    },
    {
      name: "Mr Brown",
      role: "Manager Phonecity",
      image: "/public/brown.svg",
      quote:
        "Working with Honest was a game-changer for our project. His creativity and attention to detail exceeded our expectations! I'm glad I met you. Thank you.",
    },
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto font-poppins">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[340px] bg-[#1A1B1E] rounded-lg p-6 flex space-x-4"
        >
          <div className="flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={70}
              height={70}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-white font-bold">{testimonial.name}</p>
            <p className="text-[#A7AAB4]">{testimonial.role}</p>
            <p className="text-white mt-3">“{testimonial.quote}”</p>
          </div>
        </div>
      ))}
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-white rounded-full">←</button>
        <button className="p-2 bg-white rounded-full">→</button>
      </div>
    </div>
  );
}
