"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const Featured = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-light">
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>

      <div className={`mt-[60px] flex gap-12 p-5 rounded-xl bg-[#0f172a]/5 dark:bg-white/10`}>
        <div className="hidden lg:block flex-1 h-[400px] relative">
          <Image
            src="/images/p1.jpeg"
            alt=""
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="text-[40px]">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>

          <p
            className={`font-light text-xl ${
              theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
            }`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>

          <button
            className={`py-3 px-5 w-max border-none rounded-md ${
              theme === "dark"
                ? "bg-white text-[#0f172a]"
                : "bg-[#0f172a] text-white"
            }`}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
