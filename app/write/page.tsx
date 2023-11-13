"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { BarLoader, FadeLoader, RingLoader } from "react-spinners";

import { HiOutlineVideoCamera, HiXMark } from "react-icons/hi2";
import { IoImageOutline } from "react-icons/io5";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { useTheme } from "@/context/ThemeContext";
import { supabase } from "@/libs/supabase";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsCardImage } from "react-icons/bs";

const categories = ["style", "fashion", "food", "culture", "travel", "coding"];

const categorysColors = [
  "bg-[#da85c731]",
  "bg-[#ffb04f45]",
  "bg-[#7fb88133]",
  "bg-[#5e4fff31]",
  "bg-[#57c4ff31]",
  "bg-[#ff795736]",
];

const WritePage = () => {
  const { theme } = useTheme();
  const { status } = useSession();
  const router = useRouter();

  const [openCategory, setOpenCategory] = useState<boolean>(false);

  const [file, setFile] = useState<any>(null);

  const [value, setValue] = useState<string>("");
  const [media, setMedia] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [catSlug, setCatSlug] = useState<string>("");

  const [isUploadLoading, setIsUploadLoading] = useState<boolean>(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);

  const [postData, setPostData] = useState({
    title: "",
    desc: "",
    img: "",
    slug: "",
    catSlug: "",
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
    }
  }, []);

  useEffect(() => {
    const upload = async () => {
      setIsUploadLoading(true);

      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        throw uploadError;
      }

      const publicUrl = supabase.storage.from("images").getPublicUrl(filePath);

      setMedia(publicUrl.data.publicUrl);

      setIsUploadLoading(false);
    };

    file && upload();
  }, [file]);

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    setIsSubmitLoading(true);

    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }

    setIsSubmitLoading(false);
  };

  const toggleCategory = () => {
    setOpenCategory((prev) => !prev);
  };

  const handleCategory = (category: string) => {
    setCatSlug(category);
    setOpenCategory(false);
  };

  if (status === "loading") {
    return (
      <div
        className={`w-full h-screen flex justify-center items-center ${
          theme === "dark" ? "bg-[#0f172a]" : "#fff"
        }`}
      >
        <BarLoader
          height={5}
          color={theme === "dark" ? "#a6a6a6" : "#1f273a"}
          loading
        />
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <div id="editor" className="flex flex-col mt-10">
      <div className="flex justify-center items-center flex-col my-10">
        <div className="flex-1 relative w-[350px] sm:w-[600px] sm:h-[350px] aspect-video">
          {isUploadLoading ? (
            <div
              className={`w-full h-full rounded-xl flex justify-center items-center ${
                theme === "dark" ? "bg-[#1f273a]" : "bg-[#f0f0f0]"
              }`}
            >
              <FadeLoader color={theme === "dark" ? "#a6a6a6" : "#626262"} />
            </div>
          ) : (
            <>
              {media ? (
                <Image
                  src={media}
                  alt=""
                  fill
                  className="object-cover rounded-xl"
                />
              ) : (
                <>
                  <label
                    htmlFor="image"
                    className={`w-full h-full rounded-xl flex justify-center items-center cursor-pointer ${
                      theme === "dark" ? "bg-[#1f273a]" : "bg-[#f0f0f0]"
                    }`}
                  >
                    <BsCardImage
                      size={60}
                      color={theme === "dark" ? "#a6a6a6" : "#626262"}
                    />
                  </label>

                  <input
                    type="file"
                    id="image"
                    onChange={(e: any) => setFile(e.target.files[0])}
                    className="sr-only"
                    accept="image/*"
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Title"
          className="bg-transparent text-2xl xl:text-4xl outline-none font-semibold py-5 px-2 max-w-[70%] md:max-w-full md:flex-1"
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-5 relative">
            <button
              className={`rounded-full flex justify-center items-center hover:scale-105 transition`}
              onClick={toggleCategory}
            >
              <div
                className={`flex gap-2 items-center py-1 px-3 rounded-md ${
                  theme === "dark" ? "bg-[#1f273a]" : "bg-[#f0f0f0]"
                }`}
              >
                {catSlug ? catSlug : "category"}
                {openCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </button>

            {openCategory && (
              <div
                className={`flex flex-col absolute z-20 top-12 right-0 w-[150px] rounded-md divide-y-2 ${
                  theme === "dark"
                    ? "bg-[#1f273a] divide-white/5"
                    : "bg-[#f0f0f0] divide-white[#1f273a]/5"
                }`}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`py-2 px-3 hover:font-semibold transition text-start`}
                    onClick={() => handleCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`w-full h-[2px] ${
          theme === "dark" ? "bg-[#1f273a]" : "bg-[#f0f0f0]"
        }`}
      />

      <ReactQuill
        theme="bubble"
        className={`w-full min-h-[400px] my-2`}
        value={value}
        onChange={setValue}
        placeholder="Tell your story . . ."
      />

      <button
        className="py-2 px-4 bg-[#1a8917] text-white rounded-lg
        hover:bg-[#1a8917]/70 transition disabled:opacity-50"
        disabled={isSubmitLoading}
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
