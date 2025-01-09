"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import Success from "@/public/mail-validation-01.png";
import Error from "@/public/mail-remove-02.png";


export function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="container pt-4 lg:pt-8 pb-5 lg:pb-10 px-3 lg:px-6 bg-bg flex flex-col w-[90%] lg:w-[552px] border border-stroke rounded-lg justify-center text-center items-center">
          <Image src={Success} alt="" className="w-12 h-12 lg:w-20 lg:h-20" />
          <h1 className="font-neuePower text-titleText text-xl lg:text-2xl mt-2 mb-3 lg:mb-6">
            Message Sent!
          </h1>
          <p className="font-poppins text-bodyText mb-6 lg:mb-10 font-medium text-sm">
            Your email has been successfully delivered, and I’ll get back to you
            shortly to discuss your project.
          </p>
          <Button
            onClick={onClose}
            className="mb-3 lg:mb-6 w-full rounded-full bg-titleText text-[#121314] hover:bg-titleText font-poppins font-medium text-sm py-6"
          >
            Ok
          </Button>
          <p className="text-bodyText font-poppins font-medium text-sm">
            Need a quick reply?{" "}
            <Link href="https://x.com/onlyhonesst" target="_blank" rel="noopener noreferrer" className="text-[#FFEB3B] hover:underline">
              Chat on X!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export function ErrorModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="container pt-4 lg:pt-8 pb-5 lg:pb-10 px-3 lg:px-6 bg-bg flex flex-col w-[90%] lg:w-[552px] border border-stroke rounded-lg justify-center text-center items-center">
          <Image src={Error} alt="" className="w-12 h-12 lg:w-20 lg:h-20" />
          <h1 className="font-neuePower text-titleText text-xl lg:text-2xl mt-2 mb-3 lg:mb-6">
            Message Not Sent!
          </h1>
          <p className="font-poppins text-bodyText mb-6 lg:mb-10 font-medium text-sm">
            There was an issue sending your message. Please try again or check
            your internet connection.
          </p>
          <Button
            onClick={onClose}
            className="mb-3 lg:mb-6 w-full rounded-full bg-titleText text-[#121314] hover:bg-titleText font-poppins font-medium text-sm py-6"
          >
            Try again
          </Button>
          <p className="text-bodyText font-poppins font-medium text-sm">
            Need a quick reply?{" "}
            <Link href="https://x.com/onlyhonesst" target="_blank" rel="noopener noreferrer" className="text-[#FFEB3B] hover:underline">
              Chat on X!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
