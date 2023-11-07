"use client";

import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { useState } from "react";

interface CommentsProps {
  postSlug: string;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments: React.FC<CommentsProps> = ({ postSlug }) => {
  const [desc, setDesc] = useState<string>("");

  const { theme } = useTheme();
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });

    mutate();

    setDesc("");
  };

  return (
    <div className="mt-12">
      <h3
        className={`h3 mb-8 ${
          theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
        }`}
      >
        Comments
      </h3>
      {status === "authenticated" ? (
        <div className="gap-5 flex flex-col items-end">
          <textarea
            value={desc}
            placeholder="write a comment..."
            className={`py-3 px-4 w-full rounded-xl text-black outline-none border min-h-[200px] ${
              theme === "dark"
                ? " bg-white/5 text-white border-white/10"
                : "bg-[#0f172a]/5 border-[#0f172a]/10"
            }`}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="py-3 px-6 bg-[#008080] rounded-xl text-white hover:scale-95 transition"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className="mt-12">
        {isLoading
          ? "loading"
          : data?.map((item: any) => (
              <div className="mb-12" key={item._id}>
                <div className="flex items-center justify-start gap-5 mb-5">
                  <Image
                    src={item.user.image || ""}
                    alt=""
                    width={50}
                    height={50}
                    className="h-[50px] object-cover rounded-full"
                  />

                  <div
                    className={`flex flex-col gap-1 ${
                      theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
                    }`}
                  >
                    <span className="font-semibold">{item.user.name}</span>
                    <span className="text-sm">{item.createdAt}</span>
                  </div>
                </div>
                <p
                  className={`text-lg font-light ${
                    theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
