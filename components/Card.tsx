"use client";

import Image from "next/image";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  createdAt: string;
  catSlug: string;
  img?: string;
  desc: string;
  slug: string;
}

interface CardProps {
  data: Post;
  key: string;
}

import { useTheme } from "@/context/ThemeContext";

const Card: React.FC<CardProps> = ({ data, key }) => {
  const { theme } = useTheme();
  console.log(data.img);

  return (
    <div
      key={key}
      className={`mb-12 flex flex-col md:flex-row items-center gap-10 p-5 rounded-xl group ${
        theme === "dark" ? "bg-white/5" : "bg-[#0f172a]/5"
      }`}
    >
      {data.img && (
        <Link
          href={`/posts/${data.slug}`}
          className="flex flex-1 relative h-[300px] w-[300px] aspect-square"
        >
          <Image
            src={data.img}
            alt=""
            fill
            className="object-cover rounded-xl group-hover:blur-[2px] transition-all duration-500"
          />
        </Link>
      )}

      <div className="flex flex-col flex-1 gap-4">
        <div className="flex gap-x-2">
          <div className="text-gray-500">{data.createdAt.substring(0, 10)}</div>
          -
          <div className="text-[#dc143c] font-[500] capitalize">
            {data.catSlug}
          </div>
        </div>

        <Link href={`/posts/${data.slug}`}>
          <h1 className="text-xl font-bold">{data.title}</h1>
        </Link>

        <div
          className={`description `}
          dangerouslySetInnerHTML={{ __html: data.desc.substring(0, 200) }}
        />
        <Link
          href={`/posts/${data.slug}`}
          className={`border-b-2 border-b-[#dc143c] hover:border-b-[#dc143c]/50 transition w-max ${
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
