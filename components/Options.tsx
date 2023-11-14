"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface OptionsProps {
  list: string[];
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  selectOption: (value: string) => void;
}

const Options: React.FC<OptionsProps> = ({
  list,
  isOpen,
  toggle,
  close,
  selectOption,
}) => {
  const { theme } = useTheme();

  const [option, setOption] = useState<string>("");

  const handleOptions = (data: string) => {
    setOption(data);
    selectOption(data);
    close();
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col gap-5 relative">
        <button
          className={`rounded-full flex justify-center items-center hover:scale-105 transition`}
          onClick={toggle}
        >
          <div
            className={`flex gap-2 items-center py-1 px-3 rounded-md ${
              theme === "dark" ? "bg-[#1f273a]" : "bg-[#f0f0f0]"
            }`}
          >
            {option ? option : "category"}

            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </button>

        {isOpen && (
          <div
            className={`flex flex-col absolute z-20 top-12 right-0 w-[150px] rounded-md divide-y-2 ${
              theme === "dark"
                ? "bg-[#1f273a] divide-white/5"
                : "bg-[#f0f0f0] divide-white[#1f273a]/5"
            }`}
          >
            {list.map((item) => (
              <button
                key={item}
                className={`py-2 px-3 hover:font-semibold transition text-start`}
                onClick={() => handleOptions(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
