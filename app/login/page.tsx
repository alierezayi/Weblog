"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { FaFacebook } from "react-icons/fa6";
import { ImGoogle3 } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

import { useTheme } from "@/context/ThemeContext";

const LoginPage = () => {
  const { status, data } = useSession();
  const { theme } = useTheme();
  const router = useRouter();

  if (status === "loading") {
    return <div className="{styles.loading}">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex justify-center items-center mt-16">
      <div
        className={`flex flex-col gap-14 rounded-xl ${
          theme === "dark" ? "bg-[#1f273a]" : "bg-[#f0f0f0]"
        } p-10 md:p-20 xl:py-32 xl:px-40`}
      >
        <button
          className="p-5 rounded-md text-sm sm:text-base font-semibold text-white sm:font-bold
          flex justify-center items-center bg-[#ff5555] gap-2"
          onClick={() => signIn("google")}
        >
          <ImGoogle3 size={25} />
          Sign in with Google
        </button>

        <button
          className="p-5 rounded-md text-sm sm:text-base font-semibold text-white
          flex justify-center items-center sm:font-bold bg-[#111] gap-2"
          onClick={() => signIn("github")}
        >
          <BsGithub size={25} />
          Sign in with Github
        </button>

        <button
          className="p-5 rounded-md text-sm sm:text-base font-semibold text-white
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
