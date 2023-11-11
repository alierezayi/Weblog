"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const desc =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.";

const Featured = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-light">
        <b>Hey, Ali Rezaei here!</b> Discover my stories and creative ideas.
      </h1>

      <div className={`mt-[60px] flex flex-col gap-12 p-5 rounded-xl`}>
        <div className="flex-1 h-[400px] relative flex justify-center items-center">
          <Image
            src="/images/p1.jpeg"
            alt=""
            width={700}
            height={400}
            className="object-cover rounded-xl aspect-video"
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className=" text-3xl text-center">Programming in Nature</h1>

          <p
            className={`font-light text-xl text-center ${
              theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
            }`}
          >
            {
              desc.substring(0, 250)
            }
          </p>

          <button
            className={`py-2 px-2 w-max mx-auto ${
              theme === "dark"
                ? "border-b border-white text-white"
                : "border-b border-[#0f172a] text-[#0f172a]"
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
