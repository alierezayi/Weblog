"use client";

import Image from "next/image";
import { useState } from "react";

import { BsUpload } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineVideoCamera, HiXMark } from "react-icons/hi2";
import { IoImageOutline } from "react-icons/io5";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { useTheme } from "@/context/ThemeContext";

const WritePage = () => {
  const { theme } = useTheme();

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex flex-col mt-10">
      <input
        type="text"
        placeholder="Title"
        className="bg-transparent text-5xl xl:text-6xl outline-none font-semibold py-5 px-2"
      />

      <div className="flex gap-5 relative px-3">
        <button
          className={`w-9 h-9 rounded-full flex justify-center items-center border hover:scale-105 transition ${
            theme === "light" && "border-[#111]"
          }`}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <HiXMark size={16} /> : <AiOutlinePlus size={16} />}
        </button>

        {open && (
          <div className="flex gap-5 absolute z-20 w-full left-16">
            <button
              className={`w-9 h-9 rounded-full flex justify-center items-center border hover:scale-105 transition ${
                theme === "light" && "border-[#111]"
              }`}
            >
              <HiOutlineVideoCamera size={16} />
            </button>

            <button
              className={`w-9 h-9 rounded-full flex justify-center items-center border hover:scale-105 transition ${
                theme === "light" && "border-[#111]"
              }`}
            >
              <BsUpload size={16} />
            </button>

            <button
              className={`w-9 h-9 rounded-full flex justify-center items-center border hover:scale-105 transition ${
                theme === "light" && "border-[#111]"
              }`}
            >
              <IoImageOutline size={16} />
            </button>
          </div>
        )}
      </div>

      <ReactQuill
        theme="bubble"
        className={`w-full mt-7 font-[400] h-[400px] border-2 rounded-2xl xl:p-3 ${
          theme === "dark" ? "border-white/20" : "border-black/10"
        }`}
        value={value}
        onChange={setValue}
        placeholder="Tell your story . . ."
      />

      <button
        className="md:fixed relative md:top-5 md:right-6 mt-10 md:mt-auto py-2 px-4 bg-[#1a8917] text-white rounded-lg
        hover:bg-[#1a8917]/70 active:scale-105 transition"
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
