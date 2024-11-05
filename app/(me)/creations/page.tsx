import { Metadata } from "next";
import Creatives from "@/app/components/Creations";

export const metadata: Metadata = {
  title: "My Creations",
};

export default function Creations() {
  return (
    <main className="lg:px-24 pb-[387px] lg:pb-16 pt-24 bg-[#1A1B1E]">
      <h1 className="text-[#F9F9F9] text-xl lg:text-3xl font-neuePower">
        Creations
      </h1>
      <p className="mt-3 font-poppins text-[10px] lg:text-sm font-medium text-[#A7AAB4]">
        This is my playground for experimenting with all kinds of creative
        ideas!
      </p>

      <div className="mt-6">
        <Creatives />
      </div>
    </main>
  );
}
