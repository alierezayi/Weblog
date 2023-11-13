import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { HiOutlineEye } from "react-icons/hi2";

import Menu from "@/components/Menu";
import Comments from "@/components/Comments";
import TimeAgo from "@/components/TimeAgo";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const categories = ["style", "fashion", "food", "culture", "travel", "coding"];

const SinglePage = async ({ params }: { params: Params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className="mt-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12">
        <div className="flex-1 flex flex-col w-full lg:w-auto gap-7">
          <h1 className="h1 md:mt-4">{data?.title}</h1>

          <div className="flex items-center gap-5 mt-auto">
            {data?.user?.image && (
              <div className="relative w-12 h-12">
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            )}
            <div className={`flex flex-col `}>
              <span className="text-sm md:text-base font-medium">
                {data?.user.name}
              </span>

              <span className="text-sm md:text-base font-light">
                {data?.user.email}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mt-auto text-sm">
            <TimeAgo dateString={data.createdAt} className="" />

            <span className="md:hidden">-</span>

            <span className="capitalize py-1 px-2 rounded-lg text-white bg-[#ff7887]">
              {data?.catSlug}
            </span>

            <span className="md:hidden">-</span>

            <span className="inline-flex items-center gap-1 ">
              <HiOutlineEye size={20} />

              <span>{data?.views}</span>
            </span>
          </div>
        </div>

        {data.img && (
          <div className="flex-1 relative w-[350px] sm:w-[400px] sm:h-[350px] aspect-video">
            <Image
              src={data?.img}
              alt=""
              fill
              className="object-cover rounded-xl"
            />
          </div>
        )}
      </div>

      <div className="flex gap-12">
        <div className="flex-5 mt-16 w-full lg:max-w-[75%]">
          <div
            className={`mb-5 md:text-lg description`}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <Comments postSlug={slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
