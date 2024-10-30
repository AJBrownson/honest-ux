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
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="w-full container border border-[#474853] bg-[#232529] rounded-xl p-2">
              <div className="bg-[#D1D1D2] w-[242px] h-[224px] rounded-lg"></div>
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
