import Image from "next/image";
import Link from "next/link";
import Logo from "./public/logo.png";
import CarIcon from "./public/car-05.png";
import Portrait from "./public/home-portrait.png";
import Shop from "./public/shop.png";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <section className="w-full lg:max-w-4xl flex flex-col justify-center items-center px-6 mx-auto font-poppins">
        <div className="max-w-[688px] flex flex-col justify-center items-center">
          {/* logo */}
          <div className="pt-10">
            <Image src={Logo} alt="Honest's Logo" className="w-8 h-8 lg:w-16 lg:h-16 object-contain" />
          </div>

          <p className="text-[#A7AAB4] font-medium text-justify md:text-center text-xs md:text-base mt-14">
            Hey, <span className="text-[#F9F9F9]">I’m Honest</span>, a{" "}
            <span className="text-[#F9F9F9]">UI/UX</span> and{" "}
            <span className="text-[#F9F9F9]">brand designer</span> who’s all
            about making life <span className="text-[#F9F9F9]">easier</span> for
            people using{" "}
            <span className="text-[#F9F9F9]">digital products</span>. I design
            cool
            <span className="text-[#F9F9F9]"> interfaces</span>,{" "}
            <span className="text-[#F9F9F9]">smooth experiences</span>, and{" "}
            <span className="text-[#F9F9F9]">
              create illustrations, design systems
            </span>
            , and <span className="text-[#F9F9F9]">brands</span> that stand out.
            This is my own spot in the big
            <span className="text-[#F9F9F9]"> design world</span>, where I turn{" "}
            <span className="text-[#F9F9F9]">ideas</span> into something{" "}
            <span className="text-[#F9F9F9]">real and useful</span>!
          </p>
        </div>

        <div className="mt-16 mb-[210px]">
          <div className="md:bg-[#1A1B1E] max-w-[1200px] rounded-lg md:py-6 md:px-[72px] flex flex-col">
            <div className="flex space-x-3 mb-4 md:mb-10">
              <Image src={CarIcon} alt="" className="" />
              <p>Pick Your Path, I’ll Take You There!</p>
            </div>

            <div className="flex gap-x-4 md:gap-x-8">
              <Link href="/about">
                <div className="border border-[#232529] rounded-lg p-2 bg-[#232529]">
                  <Image src={Portrait} alt="Honest's Portrait" className="lg:w-[242px] lg:h-[224px] object-contain " />
                  <div className="pt-4 pb-2 px-2">
                    <p className="text-[#A7AAB4] text-[10px] md:text-xs">
                      About Honest
                    </p>
                    <p className="font-semibold text-[#F9F9F9] text-xs md:text-base">
                      My Portfolio
                    </p>
                  </div>
                </div>
              </Link>

              <div className="border border-[#232529] rounded-lg p-2 bg-[#232529]">
                <Image src={Shop} alt="Photo of a shopping bag" />
                <div className="pt-4 pb-2 px-2">
                  <p className="text-[#A7AAB4] text-[10px] md:text-xs">
                    Accessories
                  </p>
                  <p className="font-semibold text-[#F9F9F9] text-xs md:text-base">
                    Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
