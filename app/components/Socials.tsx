import Image from "next/image";
import Link from "next/link";

import Mail from "@/public/mail.png";
import MailHover from "@/public/mail-hover.png";
import Twitter from "@/public/twitter.png";
import TwitterHover from "@/public/twitter-hover.png";
import Li from "@/public/linkedin.png";
import LiHover from "@/public/linkedin-hover.png";
import Insta from "@/public/instagram.png";
import InstaHover from "@/public/instagram-hover.png";
import Be from "@/public/behance.png";
import BeHover from "@/public/behance-hover.png";

// const socialLinks = [
//   { normal: Mail, hover: MailHover, alt: "Mail" },
//   { normal: Twitter, hover: TwitterHover, alt: "Twitter" },
//   { normal: Li, hover: LiHover, alt: "LinkedIn" },
//   { normal: Insta, hover: InstaHover, alt: "Instagram" },
//   { normal: Be, hover: BeHover, alt: "Behance" },
// ];

const socialLinks = [
    { normal: Mail, hover: MailHover, alt: "Mail", url: "mailto:honest@example.com" },
    { normal: Twitter, hover: TwitterHover, alt: "Twitter", url: "https://x.com/honest" },
    { normal: Li, hover: LiHover, alt: "LinkedIn", url: "https://www.linkedin.com/in/honest" },
    { normal: Insta, hover: InstaHover, alt: "Instagram", url: "https://www.instagram.com/honest" },
    { normal: Be, hover: BeHover, alt: "Behance", url: "https://www.behance.net/honest" },
  ];


export default function Socials() {
  return (
    <>
      <h1 className="text-titleText font-poppins font-medium text-xs">
        Socials
      </h1>

      {/* <div className="mt-2 flex justify-between items-center space-x-4">
        {socialLinks.map((link, index) => (
          <div key={index} className="relative group">
            <img
              src={link.normal.src}
              alt={link.alt}
              className="w-6 h-6 transition-opacity duration-300"
            />
            <img
              src={link.hover.src}
              alt={`${link.alt} hover`}
              className="absolute top-0 left-0 w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        ))}
      </div> */}
       <div className="mt-2 flex justify-between items-center space-x-4">
        {socialLinks.map((link, index) => (
          <Link href={link.url} key={index} className="relative group" passHref>
            <Image
              src={link.normal}
              alt={link.alt}
              className="w-6 h-6 transition-opacity duration-300"
            />
            <Image
              src={link.hover}
              alt={`${link.alt} hover`}
              className="absolute top-0 left-0 w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
