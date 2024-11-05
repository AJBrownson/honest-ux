"use client"

import { useState } from "react";
import Image from "next/image";
import Sent from "@/public/sent.png"
import { contactEmailTemplate } from "@/emailTemplates/contactTemplate";


export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("Sending...");

    const emailBody = contactEmailTemplate(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          emailBody,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!. I'll be in touch");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again");
      }
    } catch (error) {
      setStatus("Error occurred. Please try again");
    }

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };
  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-y-5 bg-[#232529] border border-slate-700 p-4 rounded-xl"
      >
      <div className="flex flex-col gap-y-3">
          <label className="text-[#F9F9F9] text-xs lg:text-sm font-poppins font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#121314] text-[#A7AAB4] font-poppins font-medium text-xs lg:text-sm p-3"
            placeholder="Mark John"
            required
          />
        </div>

        <div className="flex flex-col gap-y-3">
          <label className="text-[#F9F9F9] text-xs lg:text-sm font-poppins font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#121314] text-[#A7AAB4] font-poppins font-medium text-xs lg:text-sm p-3"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="flex flex-col gap-y-3">
          <label className="text-[#F9F9F9] text-xs lg:text-sm font-poppins font-medium">How can i help you?</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={8}
            className="bg-[#121314] text-[#A7AAB4] font-poppins font-medium text-xs lg:text-sm p-3"
            placeholder="Share your challenges or vision with me. I'm here to help you bring it to life!"
            required
          ></textarea>
        </div>

        <div className="flex justify-center lg:justify-end">
          <button className="lg:hidden w-full justify-center text-center flex items-center gap-x-2 py-2 px-8 bg-[#C6C6C6] rounded-full text-[#0E0E0D] font-poppins font-medium text-xs lg:text-sm">
            Send Message
            <Image src={Sent} alt="" />
          </button>
          <button className="hidden lg:flex items-center gap-x-2 py-2 px-8 bg-[#C6C6C6] rounded-full text-[#0E0E0D] font-poppins font-medium text-xs lg:text-sm">
            Send Message
            <Image src={Sent} alt="" />
          </button>
        </div>
        <div className="p-[1px]">
        {status && <p className="text-center">{status}</p>}
        </div>
      </form>
    </>
  );
}
