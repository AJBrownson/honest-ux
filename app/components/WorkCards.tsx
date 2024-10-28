import Image from "next/image";
import Link from "next/link";

export default function WorkProjects() {
  const data = [
    {
      tag: "UX, UI & Brand Design",
      name: "Softcash Mobile Banking",
      status: "Under Development",
    },
    {
      tag: "UI Design",
      name: "Solgacy",
      status: "Case Study",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        {data.map((item, index) => (
          <div key={index} className="flex-1">
            <div className="w-full border border-[#474853] bg-[#232529] rounded-xl p-2">
              <div className="bg-[#D1D1D2] w-[242px] h-[224px] rounded-lg"></div>
              <div className="mt-3 px-2">
                <p className="font-poppins text-[10px] lg:text-xs text-[#A7AAB4]">
                  {item.tag}
                </p>
                <p className="text-[#F9F9F9] font-poppins font-semibold text-xs lg:text-base">
                  {item.name}
                </p>
              </div>
              <div className="my-3 px-2">
                <p className="text-[#A7AAB4] font-poppins font-medium text-[10px] lg:text-[11px] p-2 border rounded-full text-center">
                  {item.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
