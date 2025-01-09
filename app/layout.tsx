import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neuePower = localFont({
  src: "../public/fonts/NeuePower-Ultra.woff",
  variable: "--font-neue-power",
});

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Poppins-Semibold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Honest UX | Portfolio Site",
  description: "NextJS portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-bg ${neuePower.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
