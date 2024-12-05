import { Metadata } from "next";
import Creatives from "@/app/components/Creations";

export const metadata: Metadata = {
  title: "My Creations",
};

export default function Creations() {
  return (
    <main className="px-4 lg:px-24 pb-[387px] lg:pb-16 pt-24 bg-semiBg">
      <h1 className="text-titleText text-xl lg:text-3xl font-neuePower">
        Creations
      </h1>
      <p className="mt-3 font-poppins text-[10px] lg:text-sm font-medium text-bodyText">
        This is my playground for experimenting with all kinds of creative
        ideas!
      </p>

      <div className="mt-6">
        <Creatives />
      </div>
    </main>
  );
}
