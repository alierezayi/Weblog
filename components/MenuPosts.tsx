import Image from "next/image";
import Link from "next/link";

interface MenuPostsProps {
  withImage: boolean;
}
const MenuPosts: React.FC<MenuPostsProps> = ({ withImage }) => {
  return (
    <div className="mt-9 mb-16 flex flex-col gap-9">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/images/p1.jpeg"
              alt=""
              fill
              className="rounded-full border border-gray-200 object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className={`py-1 px-2 rounded-lg text-xs text-white w-max bg-[#ff7857]`}>
            Travel
          </span>
          <h3 className="text-lg font-medium ----">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="">John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/images/p1.jpeg"
              alt=""
              fill
              className="rounded-full border border-gray-200 object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span
            className={`py-1 px-2 rounded-lg text-xs text-white w-max bg-[#ffb14f]`}
          >
            Culture
          </span>
          <h3 className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="">John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/images/p1.jpeg"
              alt=""
              fill
              className="rounded-full border border-gray-200 object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span
            className={`py-1 px-2 rounded-lg text-xs text-white w-max bg-[#7fb881]`}
          >
            Food
          </span>
          <h3 className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="">John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/images/p1.jpeg"
              alt=""
              fill
              className="rounded-full border border-gray-200 object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span
            className={`py-1 px-2 rounded-lg text-xs text-white w-max bg-[#ff7887]`}
          >
            Fashion
          </span>
          <h3 className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="">John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
