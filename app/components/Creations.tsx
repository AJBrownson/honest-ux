import Image from "next/image";
import Rectangle from "@/public/Rectangle 1.png"


export default function Creatives() {
  const data = [
    {
      tag: "NFT UI",
    },
    {
      tag: "NFT UI",
    },
    {
      tag: "NFT UI",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-x-2 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0">
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="w-full container border border-[#292929] bg-[#0D0D0D] rounded-xl p-2">
              {/* <div className="bg-[#D1D1D2] w-[242px] h-[224px] rounded-lg"></div> */}
              <Image src={Rectangle} alt="" />
              <div className="mt-3 px-2">
                <p className="font-poppins text-[10px] lg:text-xs text-[#A7AAB4]">
                  {item.tag}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
