import Image from "next/image";
import Link from "next/link";

export default function PersonalProjects() {
  const data = [
    {
      tag: "UI Design",
      name: "Digital Agency Website",
    },
    {
      tag: "UIUX Design",
      name: "Winee3 Social App",
    },
    {
      tag: "UI Design",
      name: "Moniepoint Banking App",
    },
    {
      tag: "UI Design",
      name: "Memecoin Landing Page",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="w-full border border-[#292929] bg-[#0D0D0D] rounded-xl p-2">
            <div className="bg-[#D1D1D2] w-full h-[224px] rounded-lg"></div>
            <div className="my-3 px-2">
              <p className="mb-1 font-poppins text-[10px] lg:text-xs text-[#A7AAB4]">
                {item.tag}
              </p>
              <p className="text-[#F9F9F9] font-poppins font-semibold text-xs lg:text-base">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
