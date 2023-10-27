"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`w-10 h-5 rounded-[50px] cursor-pointer flex justify-between items-center px-[2px] relative ${
        theme === "dark" ? "bg-white" : "bg-[#0f172a]"
      }`}
      onClick={toggleTheme}
    >
      <Image
        src="/images/moon.png"
        alt="dark"
        className=""
        width={14}
        height={14}
      />

      <div
        className={`w-4 h-4 rounded-[50px] absolute ${
          theme === "dark"
            ? "left-[1.5px] bg-[#0f172a]"
            : "right-[1.5px] bg-white"
        }`}
      />

      <Image
        src="/images/sun.png"
        alt="light"
        className=""
        width={14}
        height={14}
      />
    </div>
  );
};

export default ThemeToggle;
