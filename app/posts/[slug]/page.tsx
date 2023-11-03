"use client";

import Menu from "@/components/Menu";
import Image from "next/image";
import Comments from "@/components/Comments";
import { useTheme } from "@/context/ThemeContext";

const SinglePage = () => {
  // const { slug } = params;
  const { theme } = useTheme();

  return (
    <div className="mt-20">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="h2 mb-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            {/* {data?.title} */}
          </h1>

          <div className="flex items-center gap-5">
            {/* {data?.user?.image && ( */}
            <div className="relative w-12 h-12">
              <Image
                src="/images/p1.jpeg"
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>
            {/* )} */}
            <div
              className={`flex flex-col gap-1 ${
                theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
              }`}
            >
              <span className="md:text-xl font-medium">
                John Doe
                {/* {data?.user.name} */}
              </span>
              <span className="">01.01.2024</span>
            </div>
          </div>
        </div>
        {/* {data?.img && ( */}
        <div className="flex-1 relative h-[350px] hidden lg:block">
          <Image
            src="/images/p1.jpeg"
            alt=""
            fill
            className="object-cover rounded-xl"
          />
        </div>
        {/* )} */}
      </div>
      <div className="flex gap-12">
        <div className="flex-5 mt-16 lg:max-w-[75%]">
          <p
            className={`md:text-xl font-light mb-5 ${
              theme === "dark" ? "text-[#ddd]" : "text-black"
            }`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            quis similique nulla explicabo, sunt aliquid autem aperiam sed fuga.
            Odit repellat, enim ut voluptatum voluptatibus porro saepe odio
            magnam aperiam?
          </p>

          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
