import { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function Contact() {
  return (
    <main className="px-6 lg:px-24 pt-24 pb-[156px] lg:pb-32 bg-semiBg">
        <div className="w-full max-w-lg">
      <h1 className="text-titleText text-xl lg:text-3xl font-neuePower">
        Get in touch
      </h1>
      <p className="mt-3 font-poppins text-[10px] lg:text-sm font-medium text-bodyText">
        I'm excited to discuss new opportunities, whether it's a{" "}
        <span className="text-titleText">full-time role</span>,{" "}
        <span className="text-titleText">partnership</span>, or{" "}
        <span className="text-titleText">freelance project</span> - just send me
        a message!
      </p>
      </div>
      
      <div className="mt-6">
        <ContactForm />
      </div>
    </main>
  );
}
