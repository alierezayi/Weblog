import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import Menu from "@/components/Menu";
import Comments from "@/components/Comments";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }: { params: Params }) => {
  const { slug } = params;

  const data = await getData(slug);

  console.log(data.img);

  return (
    <div className="mt-20">
      <div className="flex items-center gap-12">
        <div className="flex-1 h-full flex flex-col">
          <h1 className="h2">{data?.title}</h1>

          <div className="flex items-center gap-5 mt-12">
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
            <div className={`flex flex-col gap-1`}>
              <span className="md:text-xl font-medium">{data?.user.name}</span>
              <span className="">{data.createdAt}</span>
            </div>
          </div>
        </div>

        {data.img && (
          <div className="flex-1 relative h-[350px] hidden lg:block">
            <Image
              src={data.img}
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
            className={`md:text-xl  mb-5 description`}
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
