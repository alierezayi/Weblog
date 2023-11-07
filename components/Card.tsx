"use client";

import Image from "next/image";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
}

interface CardProps {
  data: Post;
}

import { useTheme } from "@/context/ThemeContext";

const Card: React.FC<CardProps> = ({ data }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`mb-12 flex items-center gap-10 p-5 rounded-xl ${
        theme === "dark" ? "bg-white/5" : "bg-[#0f172a]/5"
      }`}
    >
      <div className="hidden xl:flex flex-1 relative h-[300px]">
        <Image
          src="/images/p1.jpeg"
          alt=""
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex gap-x-2">
          <div className="text-gray-500">
            11.02.2023
            {/* {item.createdAt.substring(0, 10)} -{" "} */}
          </div>
          -
          <div className="text-[#dc143c] font-[500]">
            CULTURE
            {/* {item.catSlug} */}
          </div>
        </div>

        <Link href="{`/posts/${item.slug}`}">
          <h1 className="text-xl font-bold">{data.title}</h1>
        </Link>
        <p
          className={`font-light ${
            theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed
          fuga molestias fugit, repellat minima hic delectus. Rem est vel quas
          impedit veritatis ipsum asperiores quo ducimus at, nemo totam velit .
          . .{/* {item.desc.substring(0, 60)} */}
        </p>

        <div
          className=""
          // dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}
        />
        <Link
          href="{`/posts/${item.slug}`}"
          className={`border-b border-b-[#dc143c] w-max ${
            theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
          }`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
