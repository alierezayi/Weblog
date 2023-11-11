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
      className={`mb-12 flex items-center gap-10 p-5 rounded-xl ${
        theme === "dark" ? "bg-white/5" : "bg-[#0f172a]/5"
      }`}
    >
      {data.img && (
        <div className="hidden xl:flex flex-1 relative h-[300px]">
          <Image
            src={data.img as any}
            alt=""
            fill
            className="object-cover rounded-xl"
          />
        </div>
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
          className={`description`}
          dangerouslySetInnerHTML={{ __html: data.desc.substring(0, 300) }}
        />
        <Link
          href={`/posts/${data.slug}`}
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
