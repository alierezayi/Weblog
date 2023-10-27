import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-between h-full">
      <div className="hidden lg:flex gap-[10px] flex-1">
        <Image
          src="/images/facebook.png"
          alt="facebook"
          width={24}
          height={24}
        />

        <Image
          src="/images/instagram.png"
          alt="instagram"
          width={24}
          height={24}
        />

        <Image src="/images/tiktok.png" alt="tiktok" width={24} height={24} />

        <Image src="/images/youtube.png" alt="youtube" width={24} height={24} />
      </div>

      <div className="flex-1 text-left lg:text-center text-2xl md:text-3xl xl:text-4xl font-bold">
        Weblog
      </div>

      <div className="flex flex-1 justify-end sm:justify-start items-center gap-5 ">
        <ThemeToggle />

        <div className="hidden md:flex items-center justify-center gap-4 text-xl">
          <Link href="/" className="">
            Homepage
          </Link>
          <Link href="/" className="">
            Contact
          </Link>
          <Link href="/" className="">
            About
          </Link>
        </div>

        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
