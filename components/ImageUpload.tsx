import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

import { FadeLoader } from "react-spinners";
import { BsCardImage } from "react-icons/bs";

interface ImageUploadProps {
  media: string;
  loading: boolean;
  updateFile: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  media,
  loading,
  updateFile,
}) => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center flex-col my-10">
      <div className="flex-1 relative w-[350px] sm:w-[600px] sm:h-[350px] aspect-video">
        {loading ? (
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
                  onChange={(e: any) => updateFile(e.target.files[0])}
                  className="sr-only"
                  accept="image/*"
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
