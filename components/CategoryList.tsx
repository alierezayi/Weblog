import Image from "next/image";
import Link from "next/link";
import React from "react";

const categorysColors = [
  "bg-[#57c4ff31]",
  "bg-[#da85c731]",
  "bg-[#7fb88133]",
  "bg-[#ff795736]",
  "bg-[#ffb04f45]",
  "bg-[#5e4fff31]",
];

const CategoryList = () => {
  return (
    <div>
      <h1 className="my-12 text-xl font-bold">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        <Link
          href="/blog?cat=style"
          className={`w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] flex items-center gap-[15px] capitalize
            h-[65px] justify-center rounded-lg hover:scale-105 transition ${categorysColors[0]}`}
        >
          <Image
            src="/images/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-[32px]"
          />
          style
        </Link>

        <Link
          href="/blog?cat=style"
          className={`w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] flex items-center gap-[15px] capitalize
            h-[65px] justify-center rounded-lg ${categorysColors[1]}`}
        >
          <Image
            src="/images/fashion.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-[32px]"
          />
          fashion
        </Link>

        <Link
          href="/blog?cat=style"
          className={`w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] flex items-center gap-[15px] capitalize
            h-[65px] justify-center rounded-lg ${categorysColors[2]}`}
        >
          <Image
            src="/images/food.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-[32px]"
          />
          food
        </Link>

        <Link
          href="/blog?cat=style"
          className={`w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] flex items-center gap-[15px] capitalize
            h-[65px] justify-center rounded-lg ${categorysColors[3]}`}
        >
          <Image
            src="/images/travel.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-[32px]"
          />
          travel
        </Link>

        <Link
          href="/blog?cat=style"
          className={`w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] flex items-center gap-[15px] capitalize
            h-[65px] justify-center rounded-lg ${categorysColors[4]}`}
        >
          <Image
            src="/images/culture.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-[32px]"
          />
          culture
        </Link>

        <Link
          href="/blog?cat=style"
          className={`w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] flex items-center gap-[15px] capitalize
            h-[65px] justify-center rounded-lg ${categorysColors[5]}`}
        >
          <Image
            src="/images/coding.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-[32px]"
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
