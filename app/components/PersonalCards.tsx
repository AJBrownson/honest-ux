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
      <div>
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="w-full container border border-[#474853] bg-[#232529] rounded-xl p-2">
              <div className="bg-[#D1D1D2] w-[242px] h-[224px] rounded-lg"></div>
              <div className="mt-3 px-2">
                <p className="font-poppins text-[10px] lg:text-xs text-[#A7AAB4]">
                  {item.tag}
                </p>
                <p className="text-[#F9F9F9] font-poppins font-semibold text-xs lg:text-base">
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}