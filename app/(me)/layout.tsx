import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Honest UX | Portfolio Site",
  description: "Generated by create next app",
};

const neuePower = localFont({
  src: ".././fonts/NeuePower-Ultra.woff",
  variable: "--font-neue-power",
});

const poppins = localFont({
  src: [
    {
      path: ".././fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: ".././fonts/Poppins-Semibold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neuePower.variable} ${poppins.variable}`}>
        <div className="fixed md:px-0 top-0 w-screen">
          <Navbar />
        </div>
        <div className="lg:flex lg:h-screen flex-col lg:flex-row lg:overflow-hidden lg:pt-10 lg:px-4 bg-bg">
          <div className="hidden lg:block lg:flex-none px-5 mt-9 bg-bg w-[325px]">
            <Sidebar />
          </div>
          <div className="lg:flex-grow lg:overflow-y-auto bg-semiBg">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
