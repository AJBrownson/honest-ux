import Image from "next/image";
import Rectangle from "@/public/Rectangle 1.png";

export default function WorkspaceCarousel() {
  return (
    <>
      {/* <div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(10%-20px),transparent_100%)]">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-1 lg:[&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start [&_li]:mx-1 lg:[&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
            <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
              <Image
                src={Rectangle}
                alt=""
                className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
              />
                <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">Learn UI</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="border border-[#474853] bg-[#0D0D0D] rounded-xl p-2">
        <Image
          src={Rectangle}
          alt=""
          className="rounded-lg w-40 h-60 md:w-60 md:h-60 object-cover"
        />
        <p className="font-poppins font-medium text-xs lg:text-sm mt-2 px-2 text-[#A8A8A8]">
          Learn UI
        </p>
      </div>
    </>
  );
}
