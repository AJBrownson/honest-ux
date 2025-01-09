"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import MenuIcon from "@/public/menu-11.png";
import CancelIcon from "@/public/cancel-01.png";
import Arrow from "@/public/arrow-up-right-03.png";
import Dl from "@/public/download.png";

import TechStack from "./TechStack";
import Socials from "./Socials";

export default function Navbar() {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <header className="flex items-center justify-between px-6 lg:px-10 h-14 lg:h-[4.8rem] bg-bg">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Honest's Logo"
            className="w-6 h-6 md:w-8 md:h-8 object-cover"
          />
          <p className="text-titleText font-neuePower text-base md:text-sm lg:hidden">
            Onest
          </p>
        </Link>

        {/* larger screens navigation */}
        <nav className="hidden md:flex items-center gap-x-8">
          <ul className="flex gap-x-5">
            <Link href="/about" className="relative group">
              <li
                className={`lg:py-7 lg:border-b-[1px] border-transparent text-bodyText font-poppins font-medium text-xs lg:text-sm`}
              >
                About
              </li>
              {/* Conditional Gradient Div for Large Screens */}
              {pathname === "/about" ? (
                <div className="hidden lg:block p-[0.9px] bg-gradient-to-r from-[#2F3037] via-[#FFEB3B] to-[#2F3037] [background:linear-gradient(90deg,#2F3037 0%,#FFEB3B 55%,#2F3037 100%)] group-hover:opacity-100 transition-opacity duration-300"></div>
              ) : (
                <div className="hidden lg:block p-[0.9px] bg-gradient-to-r from-[#2F3037] via-[#FFFFFF] to-[#2F3037] [background:linear-gradient(90deg,#2F3037 7%,#FFFFFF 53%,#2F3037 91%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>

            <Link href="/work" className="relative group">
              <li
                className={`lg:py-7 lg:border-b-[1px] border-transparent text-bodyText font-poppins font-medium text-xs lg:text-sm`}
              >
                Work
              </li>
              {/* Conditional Gradient Div for Large Screens */}
              {pathname === "/work" ? (
                <div className="hidden lg:block p-[0.8px] bg-gradient-to-r from-[#2F3037] via-[#FFEB3B] to-[#2F3037] [background:linear-gradient(90deg,#2F3037 0%,#FFEB3B 55%,#2F3037 100%)] group-hover:opacity-100 transition-opacity duration-300"></div>
              ) : (
                <div className="hidden lg:block p-[0.8px] bg-gradient-to-r from-[#2F3037] via-[#FFFFFF] to-[#2F3037] [background:linear-gradient(90deg,#2F3037 7%,#FFFFFF 53%,#2F3037 91%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>

            <Link href="/creations" className="relative group">
              <li
                className={`lg:py-7 lg:border-b-[1px] border-transparent text-bodyText font-poppins font-medium text-xs lg:text-sm`}
              >
                Creations
              </li>
              {/* Conditional Gradient Div for Large Screens */}
              {pathname === "/creations" ? (
                <div className="hidden lg:block p-[0.8px] bg-gradient-to-r from-[#2F3037] via-[#FFEB3B] to-[#2F3037] [background:linear-gradient(90deg,#2F3037 0%,#FFEB3B 55%,#2F3037 100%)] group-hover:opacity-100 transition-opacity duration-300"></div>
              ) : (
                <div className="hidden lg:block p-[0.8px] bg-gradient-to-r from-[#2F3037] via-[#FFFFFF] to-[#2F3037] [background:linear-gradient(90deg,#2F3037 7%,#FFFFFF 53%,#2F3037 91%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
          </ul>

          <Link href="/contact-me">
            <button className="flex items-center gap-x-2 text-[#0E0E0D] bg-[#E8E8E8] font-poppins font-medium text-xs lg:text-sm rounded-full py-2 px-3">
              Let's Talk
              <Image src={Arrow} alt="" />
            </button>
          </Link>
        </nav>

        {/* hamburger icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <Image src={CancelIcon} alt="" className="w-5 h-5" />
          ) : (
            <Image src={MenuIcon} alt="" className="w-5 h-5" />
          )}
        </div>

        {/* Mobile menu */}
        <nav
          className={
            nav
              ? `fixed md:hidden left-0 top-14 border-t-[1px] border-stroke w-full h-full bg-bg ease-in-out duration-500`
              : `ease-in-out w-full duration-500 fixed top-14 border-t-[1px] border-stroke bottom-0 left-[-100%]`
          }
        >
          <ul className="flex flex-col gap-y-5 px-6">
            <Link
              href="/about"
              className={`pt-10 ${
                pathname === "/about" ? "text-titleText" : "text-bodyText"
              }`}
              onClick={handleNav}
            >
              <li className="font-poppins font-medium text-xs lg:text-sm">
                About
              </li>
            </Link>
            <Link
              href="/work"
              className={`pt-5 ${
                pathname === "/work" ? "text-titleText" : "text-bodyText"
              }`}
              onClick={handleNav}
            >
              <li className="font-poppins font-medium text-xs lg:text-sm">
                Work
              </li>
            </Link>
            <Link
              href="/creations"
              className={`py-5 ${
                pathname === "/creations" ? "text-titleText" : "text-bodyText"
              }`}
              onClick={handleNav}
            >
              <li className="font-poppins font-medium text-xs lg:text-sm">
                Creations
              </li>
            </Link>

            <div className="flex flex-col space-y-3">
              <Link href="/contact-me" onClick={handleNav}>
                <button className="w-full flex items-center justify-between bg-titleText text-bg font-poppins font-medium text-sm py-4 px-4 rounded-full">
                  Let’s Talk <Image src={Arrow} alt="" />
                </button>
              </Link>
              <button className="flex items-center justify-between bg-semiBg text-titleText border border-stroke font-poppins font-medium text-sm py-4 px-4 rounded-full">
                View Resume{" "}
                <Image src={Dl} alt="Download" className="w-6 h-6" />
              </button>
            </div>

            <div className="px-2 pt-4 pb-2 rounded-lg border border-stroke mt-5">
              <div className="flex flex-col px-2 mb-5">
                <h1 className="text-base text-titleText font-semibold font-poppins">
                  Honest
                </h1>
                <p className="text-sm text-bodyText font-medium font-poppins">
                  Product Designer
                </p>
              </div>

              <div className="bg-[#1A1B1E] flex flex-col gap-y-1 py-2 px-4 rounded-xl mt-2">
                <TechStack />
                <Socials />
              </div>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
