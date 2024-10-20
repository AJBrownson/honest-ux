import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


export const metadata: Metadata = {
  title: "Honest UX | Portfolio Site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="lg:flex lg:h-screen flex-col lg:flex-row lg:overflow-hidden px-3 lg:p-10">
          <div className="hidden lg:block lg:px-0 lg:flex-none lg:w-80">
            <Sidebar />
          </div>
          <div className="lg:flex-grow lg:overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
