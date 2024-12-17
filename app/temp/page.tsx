import React from "react"
import Image from "next/image"
import Link from "next/link"
import Success from "@/public/mail-validation-01.png"
import Failure from "@/public/mail-remove-02.png"
import { Button } from "../components/ui/button"

export default function TestModal() {
    return (
        <main className="flex justify-center items-center min-h-screen">
        {/* <div className="container pt-4 lg:pt-8 pb-5 lg:pb-10 px-3 lg:px-6 bg-bg flex flex-col lg:w-[552px] border border-stroke rounded-lg justify-center text-center items-center">
            <Image src={Success} alt="" className="lg:w-20 lg:h-20" />
            <h1 className="font-neuePower text-titleText text-2xl mt-2 mb-3 lg:mb-6">Message Sent!</h1>
            <p className="font-poppins text-bodyText mb-6 lg:mb-12 font-medium text-sm">Your email has been successfully delivered, and I’ll get back to you shortly to discuss your project.</p>
            <Button className="mb-3 lg:mb-6 w-full rounded-full bg-titleText text-[#121314] hover:bg-titleText font-poppins font-medium text-sm py-6">Ok</Button>
            <p className="text-bodyText font-poppins font-medium text-sm">Need a quick reply? <span className="text-[#FFEB3B]">Chat on X!</span></p>
        </div> */}

<div className="container pt-4 lg:pt-8 pb-5 lg:pb-10 px-3 lg:px-6 bg-bg flex flex-col lg:w-[552px] border border-stroke rounded-lg justify-center text-center items-center">
            <Image src={Failure} alt="" className="lg:w-20 lg:h-20" />
            <h1 className="font-neuePower text-titleText text-2xl mt-2 mb-3 lg:mb-6">Message Not Sent!</h1>
            <p className="font-poppins text-bodyText mb-6 lg:mb-12 font-medium text-sm">There was an issue sending your message. Please try again or check your internet connection.</p>
            <Button className="mb-3 lg:mb-6 w-full rounded-full bg-titleText text-[#121314] hover:bg-titleText font-poppins font-medium text-sm py-6">Try again</Button>
            <p className="text-bodyText font-poppins font-medium text-sm">Need a quick reply? <span className="text-[#FFEB3B]">Chat on X!</span></p>
        </div>
        </main>
    )
}