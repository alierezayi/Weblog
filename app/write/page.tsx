"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { BarLoader, FadeLoader, RingLoader } from "react-spinners";

import { useTheme } from "@/context/ThemeContext";
import { supabase } from "@/libs/supabase";

import TextEditor from "@/components/TextEditor";
import ImageUpload from "@/components/ImageUpload";
import Options from "@/components/Options";

const categories = ["style", "fashion", "food", "culture", "travel", "coding"];

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

  // const [postData, setPostData] = useState({
  //   title: "",
  //   desc: "",
  //   img: "",
  //   slug: "",
  //   catSlug: "",
  // });

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
        catSlug,
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

  const closeCategory = () => {
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
    <div className="flex flex-col mt-10">
      <ImageUpload
        media={media}
        loading={isUploadLoading}
        updateFile={(val) => setFile(val)}
      />

      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Title"
          className="bg-transparent text-2xl xl:text-4xl outline-none font-semibold py-5 px-2 max-w-[70%] md:max-w-full md:flex-1"
          onChange={(e) => setTitle(e.target.value)}
        />

        <Options
          list={categories}
          isOpen={openCategory}
          toggle={toggleCategory}
          close={closeCategory}
          selectOption={(data) => setCatSlug(data)}
        />
      </div>

      <div
        className={`w-full h-[2px] ${
          theme === "dark" ? "bg-[#1f273a]" : "bg-[#f0f0f0]"
        }`}
      />

      <TextEditor value={value} setValue={setValue} />

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
