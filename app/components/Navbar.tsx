"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

import Arrow from "@/public/arrow-up-right-03.png";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-between lg:px-10 pt-5 pb-5 bg-[#121314]">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Honest's Logo"
            className="w-6 h-6 md:w-8 md:h-8 object-cover"
          />
          <p className="text-[#F5F5F5] text-[10px] md:text-sm md:hidden">Onest</p>
        </Link>

        <nav className="flex items-center gap-x-8">
          <ul className="flex gap-x-5">
            <Link href="/about">
              <li className="text-[#A7AAB4] font-poppins font-medium text-xs lg:text-sm">
                About
              </li>
            </Link>
            <Link href="/work">
              <li className="text-[#A7AAB4] font-poppins font-medium text-xs lg:text-sm">
                Work
              </li>
            </Link>
            <Link href="/creations">
              <li className="text-[#A7AAB4] font-poppins font-medium text-xs lg:text-sm">
                Creations
              </li>
            </Link>
          </ul>
          <Link href="/contact-me">
          <button className="flex items-center gap-x-2 text-[#0E0E0D] bg-[#FFFFFF] font-poppins font-medium text-xs lg:text-sm rounded-full py-2 px-3">
            Let's Talk
            <Image src={Arrow} alt="" />
          </button>
          </Link>
        </nav>
      </header>
    </>
  );
}
