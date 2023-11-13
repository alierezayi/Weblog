"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";

import { FaFacebook } from "react-icons/fa6";
import { ImGoogle3 } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

import { useTheme } from "@/context/ThemeContext";

const LoginPage = () => {
  const { status, data } = useSession();
  const { theme } = useTheme();
  const router = useRouter();

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

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex flex-col justify-center items-center mt-16 gap-5">
      <h1 className={`h3 ${theme === "dark" ? "text-[#a6a6a6]" : "text-[#1f273a]/70"}`}>
        Login to your account
      </h1>
      <div
        className={`flex flex-col gap-6 md:gap-10 rounded-xl w-full max-w-lg  ${
          theme === "dark" ? "bg-[#1f273a]" : "bg-[#f0f0f0]"
        } p-4 md:p-10`}
      >
        <button
          className="p-5 rounded-md text-sm sm:text-base font-semibold text-white sm:font-bold hover:opacity-80 transition
          flex justify-center items-center bg-[#ff5555] gap-2"
          onClick={() => signIn("google")}
        >
          <ImGoogle3 size={25} />
          Sign in with Google
        </button>
        <button
          className="p-5 rounded-md text-sm sm:text-base font-semibold text-white hover:opacity-80 transition
          flex justify-center items-center sm:font-bold bg-[#111] gap-2"
          onClick={() => signIn("github")}
        >
          <BsGithub size={25} />
          Sign in with Github
        </button>
        <button
          className="p-5 rounded-md text-sm sm:text-base font-semibold text-white hover:opacity-80 transition
          flex justify-center items-center sm:font-bold bg-[#087bea] gap-2"
        >
          <FaFacebook size={25} />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
