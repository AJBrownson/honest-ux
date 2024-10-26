import ContactForm from "@/app/components/ContactForm";

export default function Contact() {
  return (
    <main className="lg:px-10 pb-[156px] lg:pb-32">
        <div className="w-full max-w-lg">
      <h1 className="text-[#F9F9F9] text-xl lg:text-3xl font-neuePower">
        Get in touch
      </h1>
      <p className="mt-3 font-poppins text-[10px] lg:text-sm font-medium text-[#A7AAB4]">
        I'm excited to discuss new opportunities, whether it's a{" "}
        <span className="text-[#F9F9F9]">full-time role</span>,{" "}
        <span className="text-[#F9F9F9]">partnership</span>, or{" "}
        <span className="text-[#F9F9F9]">freelance project</span> - just send me
        a message!
      </p>
      </div>
      
      <div className="mt-6">
        <ContactForm />
      </div>
    </main>
  );
}
