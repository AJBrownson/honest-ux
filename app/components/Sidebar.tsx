import Image from "next/image";
import Link from "next/link";
import Portrait from "../public/portrait.png";


export default function Sidebar() {
  return (
    <>
      <section className="flex flex-col gap-5 border border-slate-700 rounded-lg pb-5 mt-24 font-geistMono">
        <Image src={Portrait} alt="Profile picture" className="w-full" />
        <div className="flex flex-col px-3">
          {/* <h1 className="text-base">Anietie Brownson</h1> */}
          {/* <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            tenetur porro, officia laborum expedita sit tempore itaque esse
            commodi atque!
          </p> */}
        </div>
        <div className="flex flex-col gap-y-3 px-3">
          {/* <Link
            href="https://github.com/AJBrownson"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center py-1 gap-x-2 border border-slate-700 rounded-xl hover:bg-slate-700"
          >
            <FaGithub />
            <p className="text-gray-300">Github</p>
          </Link>
          <Link
            href="https://x.com/TechieAnni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center py-1 gap-x-2 border border-slate-700 rounded-xl hover:bg-slate-700"
          >
            <FaXTwitter />
            <p className="text-gray-300">Twitter</p>
          </Link>
          <Link
            href="https://docs.google.com/document/d/1rHz6O_eNEtdryuV8Iab_sJ5TNAzdEXvYaQE5GCcHZ6I/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center py-1 gap-x-2 border border-slate-700 rounded-xl hover:bg-slate-700"
          >
            <FaScroll />
            <p className="text-gray-300">Resume</p>
          </Link> */}
        </div>
      </section>
    </>
  );
}
