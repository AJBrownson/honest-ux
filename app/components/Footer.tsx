import Image from "next/image";
import Logo from "../public/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="w-full md:max-w-[700px] flex justify-between items-center border-t-[1px] border-[#2F3037] py-3 mx-auto">
        <div className="flex items-center divide-x-2 divide-[#2F3037] gap-x-5">
          <span className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt="Honest's Logo"
              className="w-6 h-6 md:w-8 md:h-8 object-cover"
            />
            <p className="text-[#F5F5F5] text-[10px] md:text-sm">Onest</p>
          </span>
          <p className="text-[#A7AAB4] text-[10px] md:text-sm">
            Designed on <span className="text-[#F5F5F5]">Figma</span>
          </p>
        </div>

        <div>
          <p className="text-[#A7AAB4] text-[10px] md:text-sm">&copy; 2024</p>
        </div>
      </footer>
    </>
  );
}
