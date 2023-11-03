"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const Comments = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-12">
      <h3
        className={`h3 mb-8 ${
          theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
        }`}
      >
        Comments
      </h3>
      {/* {status === "authenticated" ? ( */}
      <div className="gap-5 flex flex-col items-end">
        <textarea
          placeholder="write a comment..."
          className={`py-3 px-4 w-full rounded-xl text-black outline-none border min-h-[200px] ${
            theme === "dark"
              ? " bg-white/5 text-white border-white/10"
              : "bg-[#0f172a]/5 border-[#0f172a]/10"
          }`}
          // onChange={(e) => setDesc(e.target.value)}
        />
        <button className="py-3 px-6 bg-[#008080] rounded-xl text-white hover:scale-95 transition">
          Send
        </button>
      </div>

      {/* <Link href="/login">Login to write a comment</Link> */}

      <div className="mt-12">
        {/* {isLoading
          ? "loading"
          : data?.map((item) => ( */}
        <div className="mb-12">
          <div className="flex items-center justify-start gap-5 mb-5">
            {/* {item?.user?.image && ( */}
            <Image
              src="/images/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className="h-[50px] object-cover rounded-full"
            />

            {/* )} */}
            <div
              className={`flex flex-col gap-1 ${
                theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
              }`}
            >
              <span className="font-semibold">John Doe</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            alias porro eos velit et autem quas nisi voluptatum delectus
            pariatur laboriosam molestias, eum rerum consequatur aspernatur
            suscipit vitae nihil nesciunt.
          </p>
        </div>
        {/* ))} */}
      </div>
      <div className="mt-12">
        {/* {isLoading
          ? "loading"
          : data?.map((item) => ( */}
        <div className="mb-12">
          <div className="flex items-center justify-start gap-5 mb-5">
            {/* {item?.user?.image && ( */}
            <Image
              src="/images/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className="h-[50px] object-cover rounded-full"
            />

            {/* )} */}
            <div
              className={`flex flex-col gap-1 ${
                theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
              }`}
            >
              <span className="font-semibold">John Doe</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            alias porro eos velit et autem quas nisi voluptatum delectus
            pariatur laboriosam molestias, eum rerum consequatur aspernatur
            suscipit vitae nihil nesciunt.
          </p>
        </div>
        {/* ))} */}
      </div>
      <div className="mt-12">
        {/* {isLoading
          ? "loading"
          : data?.map((item) => ( */}
        <div className="mb-12">
          <div className="flex items-center justify-start gap-5 mb-5">
            {/* {item?.user?.image && ( */}
            <Image
              src="/images/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className="h-[50px] object-cover rounded-full"
            />

            {/* )} */}
            <div
              className={`flex flex-col gap-1 ${
                theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
              }`}
            >
              <span className="font-semibold">John Doe</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            alias porro eos velit et autem quas nisi voluptatum delectus
            pariatur laboriosam molestias, eum rerum consequatur aspernatur
            suscipit vitae nihil nesciunt.
          </p>
        </div>
        {/* ))} */}
      </div>
      <div className="mt-12">
        {/* {isLoading
          ? "loading"
          : data?.map((item) => ( */}
        <div className="mb-12">
          <div className="flex items-center justify-start gap-5 mb-5">
            {/* {item?.user?.image && ( */}
            <Image
              src="/images/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className="h-[50px] object-cover rounded-full"
            />

            {/* )} */}
            <div
              className={`flex flex-col gap-1 ${
                theme === "dark" ? "text-[#a6a6a6]" : "text-[#626262]"
              }`}
            >
              <span className="font-semibold">John Doe</span>
              <span className="text-sm">01.01.2024</span>
            </div>
          </div>
          <p className="font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            alias porro eos velit et autem quas nisi voluptatum delectus
            pariatur laboriosam molestias, eum rerum consequatur aspernatur
            suscipit vitae nihil nesciunt.
          </p>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Comments;
