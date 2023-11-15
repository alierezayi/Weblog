"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import { CgMenu } from "react-icons/cg";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

import { useTheme } from "@/context/ThemeContext";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  // const { status } = useSession();

  return (
    <>
      {/* {status === "unauthenticated" ? (
        <Link href="/login" className="hidden md:block">
          <LuLogIn size={20} className="text-gray-500 dark:text-gray-400" />
        </Link>
      ) : ( */}
      <>
        <Link href="/write" className="hidden md:block text-xl">
          Write
        </Link>
        <button className="hidden md:block" onClick={() => signOut()}>
          <LuLogOut size={20} className="text-red-500" />
        </button>
      </>
      {/* )} */}

      <div
        className=" flex flex-col justify-between items-center cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      >
        <CgMenu size={28} />
      </div>

      {open && (
        <div
          className={`fixed inset-0 left-0 h-full w-full flex justify-center backdrop-blur-xl
          items-center flex-col gap-12 text-4xl z-20 ${
            theme === "dark" ? "" : ""
          }`}
        >
          <button className="p-2" onClick={() => setOpen(false)}>
            <IoClose className="absolute top-5 right-9" />
          </button>

          <Link href="/">Homepage</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

          {/* {status === "unauthenticated" ? (
            <Link href="/login">
              <LuLogIn />
            </Link>
          ) : ( */}
          <>
            <Link href="/write">Write</Link>
            <button
              className="text-red-500 dark:text-red-400"
              onClick={() => signOut()}
            >
              Log out
            </button>
          </>
          {/* )} */}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
