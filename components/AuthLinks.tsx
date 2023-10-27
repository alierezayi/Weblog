"use client";

import React, { useState } from "react";
import Link from "next/link";

import { CgMenu } from "react-icons/cg";
import { LuLogIn, LuLogOut } from "react-icons/lu";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className="hidden md:block">
          <LuLogIn size={20} className="text-gray-500 dark:text-gray-400" />
        </Link>
      ) : (
        <>
          <Link href="/write" className="hidden md:block text-xl">
            Write
          </Link>
          <button className="hidden md:block" onClick={() => {}}>
            <LuLogOut size={20} className="text-red-500 dark:text-red-400" />
          </button>
        </>
      )}

      <div
        className="w-5 h-5 flex flex-col justify-between items-center cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      >
        <CgMenu size={20} />
      </div>

      {open && (
        <div
          className="absolute top-[100px] left-0 bg-var(--bg) h-[calc(100vh-100px)] w-full flex justify-center
          items-center flex-col gap-12 text-4xl z-20"
        >
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login">
              <LuLogIn />
            </Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <button
                className="text-red-500 dark:text-red-400"
                onClick={() => {}}
              >
                Log out
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
