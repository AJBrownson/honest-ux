"use client";

import Image from "next/image";
import Logo from "../public/logo.png";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Honest's Logo"
            className="w-6 h-6 md:w-8 md:h-8 object-cover"
          />
          <p className="text-[#F5F5F5] text-[10px] md:text-sm">Onest</p>
        </div>
      </header>
    </>
  );
}
