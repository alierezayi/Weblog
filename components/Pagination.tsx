"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

interface PaginationProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <button
        className="flex justify-center items-center gap-2 p-2 hover:opacity-75 active:scale-95 transition
          rounded-lg text-[#dc143c] disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        <FaArrowLeftLong />
        Prev
      </button>
      <button
        disabled={!hasNext}
        className="flex justify-center items-center gap-2 p-2 hover:opacity-75 active:scale-95 transition
          rounded-lg text-[#dc143c] disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Pagination;
