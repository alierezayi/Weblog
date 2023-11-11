"use client";

import { BarLoader } from "react-spinners";

import { useTheme } from "@/context/ThemeContext";

const Loading = () => {
  const { theme } = useTheme();
  return (
    <div className="h-screen flex justify-center items-center">
      <BarLoader
        height={5}
        color={theme === "dark" ? "#a6a6a6" : "#1f273a"}
        loading
      />
    </div>
  );
};

export default Loading;
