"use client"

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center mt-12 py-5 ${
        theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
      }`}
    >
      <div className="flex flex-1 flex-col gap-4 mb-7">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className="text-2xl">Lamablog</h1>
        </div>
        <p className="font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className="mt-[10px] flex gap-3">
          <Image src="/images/facebook.png" alt="" width={18} height={18} />
          <Image src="/images/instagram.png" alt="" width={18} height={18} />
          <Image src="/images/twitter.png" alt="" width={18} height={18} />
          <Image src="/images/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>

      <div className="flex flex-1 md:justify-end lg:gap-24 text-xs justify-between w-full gap-8">
        <div className="flex flex-col gap-3 font-light">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-3 font-light">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-3 font-light">
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
