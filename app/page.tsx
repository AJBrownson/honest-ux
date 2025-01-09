import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import CarIcon from "@/public/car-05.png";
import Portrait from "@/public/home-portrait.png";
import Shop from "@/public/shop.png";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <section className="w-full lg:max-w-4xl flex flex-col justify-center items-center px-6 mx-auto font-poppins">
        <div className="max-w-[688px] flex flex-col justify-center items-center">
          {/* logo */}
          <div className="pt-10">
            <Image
              src={Logo}
              alt="Honest's Logo"
              className="w-8 h-8 lg:w-16 lg:h-16 object-contain"
            />
          </div>

          <p className="text-bodyText font-poppins font-medium text-justify md:text-center text-xs md:text-base mt-14">
            Hey, <span className="text-titleText">I’m Honest</span>, a{" "}
            <span className="text-titleText">UI/UX</span> and{" "}
            <span className="text-titleText">brand designer</span> who’s all
            about making life <span className="text-titleText">easier</span> for
            people using{" "}
            <span className="text-titleText">digital products</span>. I design
            cool
            <span className="text-titleText"> interfaces</span>,{" "}
            <span className="text-titleText">smooth experiences</span>, and{" "}
            <span className="text-titleText">
              create illustrations, design systems
            </span>
            , and <span className="text-titleText">brands</span> that stand out.
            This is my own spot in the big
            <span className="text-titleText"> design world</span>, where I turn{" "}
            <span className="text-titleText">ideas</span> into something{" "}
            <span className="text-titleText">real and useful</span>!
          </p>
        </div>

        <div className="mt-16 mb-[210px]">
          <div className="md:bg-[#171717] max-w-[1200px] rounded-lg md:py-6 md:px-[72px] flex flex-col">
            <div className="flex space-x-3 mb-4 md:mb-10">
              <Image src={CarIcon} alt="" className="" />
              <p className="text-titleText font-poppins font-medium">
                Pick Your Path, I’ll Take You There!
              </p>
            </div>

            <div className="flex gap-x-4 md:gap-x-8">
              <Link href="/about">
                <div className="group border border-stroke hover:border-bg rounded-lg p-2 bg-bg relative">
                  <Image
                    src={Portrait}
                    alt="Honest's Portrait"
                    className="lg:w-[242px] lg:h-[224px] object-contain"
                  />
                  <div className="pt-4 pb-2 px-2">
                    <p className="font-poppins text-bodyText text-[10px] md:text-xs">
                      About Honest
                    </p>
                    <p className="font-poppins font-semibold text-titleText text-xs md:text-base">
                      My Portfolio
                    </p>
                  </div>
                  <div className="flex justify-center relative">
                    <div className="absolute -bottom-[10px] p-[0.8px] w-[130px] bg-gradient-to-r from-[#2F3037] via-[#FFFFFF] to-[#2F3037] [background:linear-gradient(90deg,#2F3037 7%,#FFFFFF 53%,#2F3037 91%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </Link>

              <span>
                <div className="group border border-stroke hover:border-bg rounded-lg p-2 bg-bg relative">
                  <Image src={Shop} alt="Photo of a shopping bag" />
                  <div className="pt-4 pb-2 px-2">
                    <p className="font-poppins text-bodyText text-[10px] md:text-xs">
                      Accessories
                    </p>
                    <p className="font-poppins font-semibold text-titleText text-xs md:text-base">
                      Store
                    </p>
                  </div>
                  <div className="flex justify-center relative">
                    <div className="absolute -bottom-[10px] p-[0.8px] w-[130px] bg-gradient-to-r from-[#2F3037] via-[#FFFFFF] to-[#2F3037] [background:linear-gradient(90deg,#2F3037 7%,#FFFFFF 53%,#2F3037 91%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
