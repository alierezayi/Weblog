import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";
import Socials from "./Socials";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flex items-center justify-between h-full">
      <Socials />

      <div className="flex-1 text-left lg:text-center text-2xl md:text-3xl xl:text-4xl font-bold">
        Weblog
      </div>

      <div className="flex flex-1 justify-end items-center gap-5 ">
        <ThemeToggle />

        <div className="hidden md:flex items-center justify-center gap-4 text-xl">
          <Link href="/" className="">
            Homepage
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>
          <Link href="/about" className="">
            About
          </Link>
        </div>

        <AuthLinks />
      </div>
    </div>
  );
};

export default Header;
